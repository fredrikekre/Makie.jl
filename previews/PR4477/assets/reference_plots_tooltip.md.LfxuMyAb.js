import{_ as s,c as l,j as a,a as t,G as n,a5 as o,B as r,o as p}from"./chunks/framework.DgcwXE7J.js";const d="/previews/PR4477/assets/ae12434.0Y4W0v-p.png",q=JSON.parse('{"title":"tooltip","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/tooltip.md","filePath":"reference/plots/tooltip.md","lastUpdated":null}'),h={name:"reference/plots/tooltip.md"},c={class:"jldocstring custom-block",open:""};function u(f,e,k,b,m,g){const i=r("Badge");return p(),l("div",null,[e[3]||(e[3]=a("h1",{id:"tooltip",tabindex:"-1"},[t("tooltip "),a("a",{class:"header-anchor",href:"#tooltip","aria-label":'Permalink to "tooltip"'},"​")],-1)),a("details",c,[a("summary",null,[e[0]||(e[0]=a("a",{id:"Makie.tooltip-reference-plots-tooltip",href:"#Makie.tooltip-reference-plots-tooltip"},[a("span",{class:"jlbinding"},"Makie.tooltip")],-1)),e[1]||(e[1]=t()),n(i,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),e[2]||(e[2]=o('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position, string)</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, string)</span></span></code></pre></div><p>Creates a tooltip pointing at <code>position</code> displaying the given `string</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>tooltip</code> function is <code>Tooltip</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/4f84fcd4b8057f50effb83cedd6773ea4932a0e3/MakieCore/src/recipes.jl#L511-L591" target="_blank" rel="noreferrer">source</a></p>',5))]),e[4]||(e[4]=o(`<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="Basic-tooltip" tabindex="-1">Basic tooltip <a class="header-anchor" href="#Basic-tooltip" aria-label="Permalink to &quot;Basic tooltip {#Basic-tooltip}&quot;">​</a></h3><a id="example-ae12434"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig, ax, p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point2f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), marker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;x&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, markersize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tooltip!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point2f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a tooltip pointing at x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+d+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="align" tabindex="-1">align <a class="header-anchor" href="#align" aria-label="Permalink to &quot;align&quot;">​</a></h3><p>Defaults to <code>0.5</code></p><p>Sets the alignment of the tooltip relative <code>position</code>. With <code>align = 0.5</code> the tooltip is centered above/below/left/right the <code>position</code>.</p><h3 id="backgroundcolor" tabindex="-1">backgroundcolor <a class="header-anchor" href="#backgroundcolor" aria-label="Permalink to &quot;backgroundcolor&quot;">​</a></h3><p>Defaults to <code>:white</code></p><p>Sets the background color of the tooltip.</p><h3 id="clip-planes" tabindex="-1">clip_planes <a class="header-anchor" href="#clip-planes" aria-label="Permalink to &quot;clip_planes&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Clip planes offer a way to do clipping in 3D space. You can set a Vector of up to 8 <code>Plane3f</code> planes here, behind which plots will be clipped (i.e. become invisible). By default clip planes are inherited from the parent plot or scene. You can remove parent <code>clip_planes</code> by passing <code>Plane3f[]</code>.</p><h3 id="depth-shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth-shift" aria-label="Permalink to &quot;depth_shift&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-label="Permalink to &quot;font&quot;">​</a></h3><p>Defaults to <code>@inherit font</code></p><p>Sets the font.</p><h3 id="fontsize" tabindex="-1">fontsize <a class="header-anchor" href="#fontsize" aria-label="Permalink to &quot;fontsize&quot;">​</a></h3><p>Defaults to <code>16</code></p><p>Sets the text size in screen units.</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector-clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector-clear" aria-label="Permalink to &quot;inspector_clear&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector-hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector-hover" aria-label="Permalink to &quot;inspector_hover&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector-label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector-label" aria-label="Permalink to &quot;inspector_label&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="justification" tabindex="-1">justification <a class="header-anchor" href="#justification" aria-label="Permalink to &quot;justification&quot;">​</a></h3><p>Defaults to <code>:left</code></p><p>Sets whether text is aligned to the <code>:left</code>, <code>:center</code> or <code>:right</code> within its bounding box.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="offset" tabindex="-1">offset <a class="header-anchor" href="#offset" aria-label="Permalink to &quot;offset&quot;">​</a></h3><p>Defaults to <code>10</code></p><p>Sets the offset between the given <code>position</code> and the tip of the triangle pointing at that position.</p><h3 id="outline-color" tabindex="-1">outline_color <a class="header-anchor" href="#outline-color" aria-label="Permalink to &quot;outline_color&quot;">​</a></h3><p>Defaults to <code>:black</code></p><p>Sets the color of the tooltip outline.</p><h3 id="outline-linestyle" tabindex="-1">outline_linestyle <a class="header-anchor" href="#outline-linestyle" aria-label="Permalink to &quot;outline_linestyle&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Sets the linestyle of the tooltip outline.</p><h3 id="outline-linewidth" tabindex="-1">outline_linewidth <a class="header-anchor" href="#outline-linewidth" aria-label="Permalink to &quot;outline_linewidth&quot;">​</a></h3><p>Defaults to <code>2.0</code></p><p>Sets the linewidth of the tooltip outline.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="placement" tabindex="-1">placement <a class="header-anchor" href="#placement" aria-label="Permalink to &quot;placement&quot;">​</a></h3><p>Defaults to <code>:above</code></p><p>Sets where the tooltip should be placed relative to <code>position</code>. Can be <code>:above</code>, <code>:below</code>, <code>:left</code>, <code>:right</code>.</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>:white</code></p><p>Sets the text outline color.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>Gives text an outline if set to a positive value.</p><h3 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;text&quot;">​</a></h3><p>Defaults to <code>&quot;&quot;</code></p><p>No docs available.</p><h3 id="textcolor" tabindex="-1">textcolor <a class="header-anchor" href="#textcolor" aria-label="Permalink to &quot;textcolor&quot;">​</a></h3><p>Defaults to <code>@inherit textcolor</code></p><p>Sets the text color.</p><h3 id="textpadding" tabindex="-1">textpadding <a class="header-anchor" href="#textpadding" aria-label="Permalink to &quot;textpadding&quot;">​</a></h3><p>Defaults to <code>(4, 4, 4, 4)</code></p><p>Sets the padding around text in the tooltip. This is given as <code>(left, right, bottom, top)</code> offsets.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="triangle-size" tabindex="-1">triangle_size <a class="header-anchor" href="#triangle-size" aria-label="Permalink to &quot;triangle_size&quot;">​</a></h3><p>Defaults to <code>10</code></p><p>Sets the size of the triangle pointing at <code>position</code>.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p><h3 id="xautolimits" tabindex="-1">xautolimits <a class="header-anchor" href="#xautolimits" aria-label="Permalink to &quot;xautolimits&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>No docs available.</p><h3 id="yautolimits" tabindex="-1">yautolimits <a class="header-anchor" href="#yautolimits" aria-label="Permalink to &quot;yautolimits&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>No docs available.</p><h3 id="zautolimits" tabindex="-1">zautolimits <a class="header-anchor" href="#zautolimits" aria-label="Permalink to &quot;zautolimits&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>No docs available.</p>',105))])}const y=s(h,[["render",u]]);export{q as __pageData,y as default};
