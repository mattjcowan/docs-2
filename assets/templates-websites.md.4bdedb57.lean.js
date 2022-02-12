import{_ as e,c as t,o as a,a as r}from"./app.25a431af.js";const u='{"title":"Website Project Templates","description":"","frontmatter":{"title":"Website Project Templates","slug":"templates-websites"},"headers":[{"level":3,"title":"Watched .NET Core builds","slug":"watched-net-core-builds"},{"level":3,"title":".NET 6.0 ServiceStack WebApp Template","slug":"net-6-0-servicestack-webapp-template"}],"relativePath":"templates-websites.md","lastUpdated":1644680220427}',s={},o=r(`__VP_STATIC_START__<p>There are 3 templates for each of the different technologies that can be used with ServiceStack to develop Server HTML Generated Websites and HTTP APIs which can be installed with <a href="/dotnet-new">dotnet-new</a>:</p><div class="language-bash"><pre><code>$ dotnet tool <span class="token function">install</span> --global x 
</code></pre></div><div class="language-bash"><pre><code>$ x new mvc AcmeMvc
</code></pre></div><p>Which will create a new .NET 6.0 MVC Project called <strong>AcmeMvc</strong>. The Template Names, Source Code and Live Demos for each Website Template is available below:</p><table class="table tpl"><tr><th>.NET 6.0</th><th>.NET Framework</th><th>Single Page App Templates</th></tr><tr><td><a href="https://github.com/NetCoreTemplates/mvc">mvc</a></td><td><a href="https://github.com/NetFrameworkTemplates/mvc-netfx">mvc-netfx</a></td><th align="center"> MVC Bootstrap Template </th></tr><tr><td class="tpl-desc" colspan="2"> The <code class="highlighter-rouge">mvc</code> template differentiates the most between .NET Core and ASP.NET versions as ASP.NET Core MVC and ASP.NET MVC 5 are completely different implementations. With <code class="highlighter-rouge">mvc</code> ServiceStack is configured within the same .NET Core pipeline and shares the same request pipeline and \u201Croute namespace\u201D but in ASP.NET MVC 5, ServiceStack is hosted at the <code class="highlighter-rouge">/api</code> Custom Path. Use MVC if you prefer to create different Controllers and View Models for your Website UI independently from your HTTP APIs or if you prefer to generate <strong>server HTML validation errors</strong> within MVC Controllers. </td><td align="center"><a href="http://mvc.web-templates.io"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/mvc.png" width="450"></a><p><a href="http://mvc.web-templates.io">mvc.web-templates.io</a></p></td></tr><tr><td><a href="https://github.com/NetCoreTemplates/razor">razor</a></td><td><a href="https://github.com/NetFrameworkTemplates/razor-netfx">razor-netfx</a></td><th align="center"> ServiceStack.Razor Bootstrap Template </th></tr><tr><td class="tpl-desc" colspan="2"> The <code class="highlighter-rouge">razor</code> Template is configured to develop Websites using <a href="http://razor.servicestack.net">ServiceStack.Razor</a> for developing server-generated Websites using Razor without MVC Controllers which lets you create Content Razor Pages that can be called directly or View Pages for generating HTML Views for existing Services. The source code for .NET Core and ASP.NET Framework projects are nearly identical despite being completely different implementations with the .NET Core version being retrofitted on top of .NET Core MVC Views. Use <code class="highlighter-rouge">razor</code> templates if you like Razor and prefer the <a href="/api-first-development">API First Development model</a> or plan on developing Websites for both .NET Core and ASP.NET and would like to be easily able to migrate between them. </td><td align="center"><a href="http://razor.web-templates.io"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/razor.png" width="450"></a><p><a href="http://razor.web-templates.io">razor.web-templates.io</a></p></td></tr><tr><td><a href="https://github.com/NetCoreTemplates/script">script</a></td><td><a href="https://github.com/NetFrameworkTemplates/script-netfx">script-netfx</a></td><th align="center"> ServiceStack #Script Pages Bootstrap Template </th></tr><tr><td class="tpl-desc" colspan="2"> The <code class="highlighter-rouge">script</code> Project Template is configured to develop Websites using <a href="https://sharpscript.net/docs/sharp-pages">#Script Pages</a>, a simpler and cleaner alternative to Razor that lets you utilize simple #Script Expressions for evaluating Server logic in <code class="highlighter-rouge">.html</code> pages. #Script doesn\u2019t require any precompilation, is easier to learn and more intuitive for non-programmers that\u2019s more suitable for a <a href="https://sharpscript.net/usecases/">number of use-cases</a>. Use <code class="highlighter-rouge">script</code> if you want an <a href="/releases/v4_5_14#why-templates">alternative to Razor</a> syntax and the heavy machinery required to support it. </td><td align="center"><a href="http://script.web-templates.io"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/templates.png" width="450"></a><p><a href="http://script.web-templates.io">script.web-templates.io</a></p></td></tr></table><h4 id="hot-reloading" tabindex="-1">Hot Reloading <a class="header-anchor" href="#hot-reloading" aria-hidden="true">#</a></h4><p>Both <code>razor</code> and <code>script</code> project enjoy Hot Reloading where in development a long poll is used to detect and reload changes in the current Template Page or static files in <code>/wwwroot</code>.</p><h3 id="watched-net-core-builds" tabindex="-1">Watched .NET Core builds <a class="header-anchor" href="#watched-net-core-builds" aria-hidden="true">#</a></h3><p>.NET Core projects can also benefit from <a href="https://dotnetcoretutorials.com/2017/01/31/live-coding-net-core-using-dotnet-watch/" target="_blank" rel="noopener noreferrer">Live Coding using dotnet watch</a> which performs a &quot;watched build&quot; where it automatically stops, recompiles and restarts your .NET Core App when it detects source file changes. You can start a watched build from the command-line with:</p><div class="language-bash"><pre><code>$ dotnet <span class="token function">watch</span> run
</code></pre></div><h3 id="net-6-0-servicestack-webapp-template" tabindex="-1">.NET 6.0 ServiceStack WebApp Template <a class="header-anchor" href="#net-6-0-servicestack-webapp-template" aria-hidden="true">#</a></h3><p>The .NET 6.0 <a href="https://github.com/sharp-apps/bare-app" target="_blank" rel="noopener noreferrer">bare-app</a> project template is a pre-built .NET 6.0 App that dramatically simplifies .NET Wep App development by enabling Websites and APIs to be developed instantly without compilation.</p><table class="table"><tr><th>.NET 6.0</th><th>Sharp App</th></tr><tr><td><a href="https://github.com/sharp-apps/rockwind-app">rockwind-app</a></td><td align="center"><a href="http://rockwind-app.web-templates.io/"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/bare-app.png" width="650"></a><p><a href="http://rockwind-app.web-templates.io/">rockwind-app.web-templates.io</a></p></td></tr></table><p>See <a href="https://sharpscript.net/docs/sharp-apps" target="_blank" rel="noopener noreferrer">sharpscript.net/docs/sharp-apps</a> to learn the different use-cases made possible with Sharp Apps.</p>__VP_STATIC_END__`,14),i=[o];function p(c,n,l,h,d,m){return a(),t("div",null,i)}var f=e(s,[["render",p]]);export{u as __pageData,f as default};
