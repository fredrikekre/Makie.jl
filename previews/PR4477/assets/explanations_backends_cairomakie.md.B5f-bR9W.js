import{_ as t,c as n,a5 as a,j as s,a as l,G as o,B as h,o as r}from"./chunks/framework.DgcwXE7J.js";const p="/previews/PR4477/assets/7521e8f.C7yAVeMW.svg",d="/previews/PR4477/assets/426b9cc.DECYta14.svg",f=JSON.parse('{"title":"CairoMakie","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/backends/cairomakie.md","filePath":"explanations/backends/cairomakie.md","lastUpdated":null}'),k={name:"explanations/backends/cairomakie.md"},c={class:"jldocstring custom-block",open:""};function g(E,i,u,y,v,b){const e=h("Badge");return r(),n("div",null,[i[3]||(i[3]=a('<h1 id="cairomakie" tabindex="-1">CairoMakie <a class="header-anchor" href="#cairomakie" aria-label="Permalink to &quot;CairoMakie&quot;">​</a></h1><p><a href="https://github.com/MakieOrg/Makie.jl/tree/master/CairoMakie" target="_blank" rel="noreferrer">CairoMakie</a> uses Cairo.jl to draw vector graphics to SVG and PDF. You should use it if you want to achieve the highest-quality plots for publications, as the rendering process of the GL backends works via bitmaps and is geared more towards speed than pixel-perfection.</p><h2 id="Activation-and-screen-config" tabindex="-1">Activation and screen config <a class="header-anchor" href="#Activation-and-screen-config" aria-label="Permalink to &quot;Activation and screen config {#Activation-and-screen-config}&quot;">​</a></h2><p>Activate the backend by calling <code>CairoMakie.activate!()</code> with the following options:</p>',4)),s("details",c,[s("summary",null,[i[0]||(i[0]=s("a",{id:"CairoMakie.activate!",href:"#CairoMakie.activate!"},[s("span",{class:"jlbinding"},"CairoMakie.activate!")],-1)),i[1]||(i[1]=l()),o(e,{type:"info",class:"jlObjectType jlFunction",text:"Function"})]),i[2]||(i[2]=a('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CairoMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; screen_config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Sets CairoMakie as the currently active backend and also allows to quickly set the <code>screen_config</code>. Note, that the <code>screen_config</code> can also be set permanently via <code>Makie.set_theme!(CairoMakie=(screen_config...,))</code>.</p><p><strong>Arguments one can pass via <code>screen_config</code>:</strong></p><ul><li><p><code>px_per_unit = 2.0</code></p></li><li><p><code>pt_per_unit = 0.75</code></p></li><li><p><code>antialias::Union{Symbol, Int} = :best</code>: antialias modus Cairo uses to draw. Applicable options: <code>[:best =&gt; Cairo.ANTIALIAS_BEST, :good =&gt; Cairo.ANTIALIAS_GOOD, :subpixel =&gt; Cairo.ANTIALIAS_SUBPIXEL, :none =&gt; Cairo.ANTIALIAS_NONE]</code>.</p></li><li><p><code>visible::Bool</code>: if true, a browser/image viewer will open to display rendered output.</p></li><li><p><code>pdf_version::String = nothing</code>: the version of output PDFs. Applicable options are <code>&quot;1.4&quot;</code>, <code>&quot;1.5&quot;</code>, <code>&quot;1.6&quot;</code>, <code>&quot;1.7&quot;</code>, or <code>nothing</code>, which leaves the PDF version unrestricted.</p></li></ul><p><a href="https://github.com/MakieOrg/Makie.jl/blob/4f84fcd4b8057f50effb83cedd6773ea4932a0e3/CairoMakie/src/screen.jl#L130-L139" target="_blank" rel="noreferrer">source</a></p>',5))]),i[4]||(i[4]=a(`<h4 id="Inline-Plot-Type" tabindex="-1">Inline Plot Type <a class="header-anchor" href="#Inline-Plot-Type" aria-label="Permalink to &quot;Inline Plot Type {#Inline-Plot-Type}&quot;">​</a></h4><p>You can choose the type of plot that is displayed inline in, e.g., VSCode, Pluto.jl, or any other environment, by setting it via the <code>activate!</code> function.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CairoMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CairoMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h4 id="z-order" tabindex="-1">Z-Order <a class="header-anchor" href="#z-order" aria-label="Permalink to &quot;Z-Order&quot;">​</a></h4><p>CairoMakie as a 2D engine has no concept of z-clipping, therefore its 3D capabilities are quite limited. The z-values of 3D plots will have no effect and will be projected flat onto the canvas. Z-layering is approximated by sorting all plot objects by their z translation value before drawing, after that by parent scene and then insertion order. Therefore, if you want to draw something on top of something else, but it ends up below, try translating it forward via <code>translate!(obj, 0, 0, some_positive_z_value)</code>.</p><h4 id="Selective-Rasterization" tabindex="-1">Selective Rasterization <a class="header-anchor" href="#Selective-Rasterization" aria-label="Permalink to &quot;Selective Rasterization {#Selective-Rasterization}&quot;">​</a></h4><p>By setting the <code>rasterize</code> attribute of a plot, you can tell CairoMakie that this plot needs to be rasterized when saving, even if saving to a vector backend. This can be very useful for large meshes, surfaces or even heatmaps if on an irregular grid.</p><p>Assuming that you have a <code>Plot</code> object <code>plt</code>, you can set <code>plt.rasterize = true</code> for simple rasterization, or you can set <code>plt.rasterize = scale::Int</code>, where <code>scale</code> represents the scaling factor for the image surface.</p><p>For example, if your Scene&#39;s size is <code>(800, 600)</code>, by setting <code>scale=2</code>, the rasterized image embedded in the vector graphic will have a resolution of <code>(1600, 1200)</code>.</p><p>You can deactivate this rasterization by setting <code>plt.rasterize = false</code>.</p><p>Example: <a id="example-7521e8f"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v[:,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], v[:,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], rasterize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, markersize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+p+`" width="600px" height="450px"><p>If you zoom in, you will see a pretty badly pixelated image - this is because the rasterization density is set to 1 <code>px</code> per <code>pt</code>. Setting <code>rasterize=10</code> makes this a lot smoother: <a id="example-426b9cc"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scatter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v[:,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], v[:,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], rasterize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, markersize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+d+`" width="600px" height="450px"><h4 id="PDF-version" tabindex="-1">PDF version <a class="header-anchor" href="#PDF-version" aria-label="Permalink to &quot;PDF version {#PDF-version}&quot;">​</a></h4><p>The version of output PDFs can be restricted via the <code>pdf_version</code> argument of the screen config. Conveniently, it can be also passed as an argument of the <code>save</code> function:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;figure.pdf&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fig, pdf_version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,19))])}const F=t(k,[["render",g]]);export{f as __pageData,F as default};
