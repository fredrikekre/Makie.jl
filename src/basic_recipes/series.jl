

"""
    series(curves;
        linewidth=2,
        color=:lighttest,
        solid_color=nothing,
        labels=nothing,
        # scatter arguments, if any is set != nothing, a scatterplot is added
        marker=nothing,
        markersize=nothing,
        markercolor=automatic,
        strokecolor=nothing,
        strokewidth=nothing)

Curves can be:
* `AbstractVector{<: AbstractVector{<: Point2}}`: the native representation of a series as a vector of lines
* `AbstractMatrix`: each row represents y coordinates of the line, while `x` goes from `1:size(curves, 1)`
* `AbstractVector, AbstractMatrix`: the same as the above, but the first argument sets the x values for all lines
* `AbstractVector{<: Tuple{X<: AbstractVector, Y<: AbstractVector}}`: A vector of tuples, where each tuple contains a vector for the x and y coordinates

"""
@recipe(Series, curves) do scene
    Attributes(
        linewidth=2,
        color=:lighttest,
        solid_color=nothing,
        labels=nothing,
        linestyle=:solid,
        marker=nothing,
        markersize=nothing,
        markercolor=automatic,
        strokecolor=nothing,
        strokewidth=nothing,
        space = :data,
    )
end

replace_missing(x) = ismissing(x) ? NaN : x

function convert_arguments(T::Type{<: Series}, y::AbstractMatrix)
    convert_arguments(T, 1:size(y, 2), y)
end

function convert_arguments(::Type{<: Series}, x::AbstractVector, ys::AbstractMatrix)
    return (map(1:size(ys, 1)) do i
        Point2f.(replace_missing.(x), replace_missing.(view(ys, i, :)))
    end,)
end

function convert_arguments(::Type{<: Series}, arg::AbstractVector{<: Tuple{X, Y}}) where {X, Y}
    return (map(arg) do (x, y)
        Point2f.(replace_missing.(x), replace_missing.(y))
    end,)
end

function convert_arguments(T::Type{<: Series}, arg::Tuple{<:AbstractVector, <:AbstractVector})
    return convert_arguments(T, [arg])
end

function convert_arguments(::Type{<: Series}, arg::AbstractVector{<: AbstractVector{<:Point2}})
    return (map(arg) do points
        Point2f.(replace_missing.(first.(points)), replace_missing.(last.(points)))
    end,)
end

function plot!(plot::Series)
    @extract plot (curves, labels, linewidth, color, solid_color, space, linestyle)
    sargs = [:marker, :markersize, :strokecolor, :strokewidth]
    scatter = Dict((f => plot[f] for f in sargs if !isnothing(plot[f][])))
    nseries = length(curves[])
    colors = lift(color, solid_color) do color, scolor
        if isnothing(scolor)
            return categorical_colors(color, nseries)
        else
            return scolor
        end
    end

    for i in 1:nseries
        label = @lift isnothing($labels) ? "series $(i)" : $labels[i]
        positions = @lift $curves[i]
        series_color = @lift $colors isa AbstractVector ? $colors[i] : $colors
        series_linestyle = @lift $linestyle isa AbstractVector ? $linestyle[i] : $linestyle
        if !isempty(scatter)
            mcolor = plot.markercolor
            markercolor = @lift $mcolor == automatic ? $series_color : $mcolor
            scatterlines!(plot, positions;
                linewidth=linewidth, color=series_color, markercolor=series_color,
                label=label[], scatter..., space = space, linestyle = series_linestyle)
        else
            lines!(plot, positions; linewidth=linewidth, color=series_color, label=label, space = space,
                linestyle = series_linestyle)
        end
    end
end

function Makie.get_plots(plot::Series)
    return plot.plots
end
