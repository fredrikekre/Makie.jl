import{_ as s,c as l,j as a,a as t,G as r,a5 as o,B as n,o as d}from"./chunks/framework.DgcwXE7J.js";const p="/previews/PR4477/assets/1139957.D8_Bd72J.png",g=JSON.parse('{"title":"qqplot","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/qqplot.md","filePath":"reference/plots/qqplot.md","lastUpdated":null}'),c={name:"reference/plots/qqplot.md"},h={class:"jldocstring custom-block",open:""};function u(k,e,f,b,m,q){const i=n("Badge");return d(),l("div",null,[e[3]||(e[3]=a("h1",{id:"qqplot",tabindex:"-1"},[t("qqplot "),a("a",{class:"header-anchor",href:"#qqplot","aria-label":'Permalink to "qqplot"'},"​")],-1)),a("details",h,[a("summary",null,[e[0]||(e[0]=a("a",{id:"Makie.qqplot-reference-plots-qqplot",href:"#Makie.qqplot-reference-plots-qqplot"},[a("span",{class:"jlbinding"},"Makie.qqplot")],-1)),e[1]||(e[1]=t()),r(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[2]||(e[2]=o('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qqplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Draw a Q-Q plot, comparing quantiles of two distributions. <code>y</code> must be a list of samples, i.e., <code>AbstractVector{&lt;:Real}</code>, whereas <code>x</code> can be</p><ul><li><p>a list of samples,</p></li><li><p>an abstract distribution, e.g. <code>Normal(0, 1)</code>,</p></li><li><p>a distribution type, e.g. <code>Normal</code>.</p></li></ul><p>In the last case, the distribution type is fitted to the data <code>y</code>.</p><p>The attribute <code>qqline</code> (defaults to <code>:none</code>) determines how to compute a fit line for the Q-Q plot. Possible values are the following.</p><ul><li><p><code>:identity</code> draws the identity line.</p></li><li><p><code>:fit</code> computes a least squares line fit of the quantile pairs.</p></li><li><p><code>:fitrobust</code> computes the line that passes through the first and third quartiles of the distributions.</p></li><li><p><code>:none</code> omits drawing the line.</p></li></ul><p>Broadly speaking, <code>qqline = :identity</code> is useful to see if <code>x</code> and <code>y</code> follow the same distribution, whereas <code>qqline = :fit</code> and <code>qqline = :fitrobust</code> are useful to see if the distribution of <code>y</code> can be obtained from the distribution of <code>x</code> via an affine transformation.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>qqplot</code> function is <code>QQPlot</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/4f84fcd4b8057f50effb83cedd6773ea4932a0e3/MakieCore/src/recipes.jl#L511-L585" target="_blank" rel="noreferrer">source</a></p>',10))]),e[4]||(e[4]=o(`<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Test if <code>xs</code> and <code>ys</code> follow the same distribution. <a id="example-1139957"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qqplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xs, ys, qqline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+p+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="clip-planes" tabindex="-1">clip_planes <a class="header-anchor" href="#clip-planes" aria-label="Permalink to &quot;clip_planes&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Clip planes offer a way to do clipping in 3D space. You can set a Vector of up to 8 <code>Plane3f</code> planes here, behind which plots will be clipped (i.e. become invisible). By default clip planes are inherited from the parent plot or scene. You can remove parent <code>clip_planes</code> by passing <code>Plane3f[]</code>.</p><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>@inherit linecolor</code></p><p>Control color of both line and markers (if <code>markercolor</code> is not specified).</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle&quot;">​</a></h3><p>Defaults to <code>[:color]</code></p><p>No docs available.</p><h3 id="depth-shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth-shift" aria-label="Permalink to &quot;depth_shift&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector-clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector-clear" aria-label="Permalink to &quot;inspector_clear&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector-hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector-hover" aria-label="Permalink to &quot;inspector_hover&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector-label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector-label" aria-label="Permalink to &quot;inspector_label&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="linestyle" tabindex="-1">linestyle <a class="header-anchor" href="#linestyle" aria-label="Permalink to &quot;linestyle&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="linewidth" tabindex="-1">linewidth <a class="header-anchor" href="#linewidth" aria-label="Permalink to &quot;linewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>No docs available.</p><h3 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h3><p>Defaults to <code>@inherit marker</code></p><p>No docs available.</p><h3 id="markercolor" tabindex="-1">markercolor <a class="header-anchor" href="#markercolor" aria-label="Permalink to &quot;markercolor&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize&quot;">​</a></h3><p>Defaults to <code>@inherit markersize</code></p><p>No docs available.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit markerstrokecolor</code></p><p>No docs available.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>@inherit markerstrokewidth</code></p><p>No docs available.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p>',74))])}const x=s(c,[["render",u]]);export{g as __pageData,x as default};
