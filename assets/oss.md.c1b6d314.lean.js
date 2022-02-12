import{_ as e,c as r,o as a,a as t}from"./app.25a431af.js";const k='{"title":"FREE for OSS","description":"","frontmatter":{"slug":"oss","title":"FREE for OSS"},"headers":[{"level":3,"title":"Linking to Source projects","slug":"linking-to-source-projects"},{"level":3,"title":"Use Local Libraries","slug":"use-local-libraries"},{"level":3,"title":"Use Local NuGet packages","slug":"use-local-nuget-packages"},{"level":3,"title":"OSS License Key","slug":"oss-license-key"}],"relativePath":"oss.md","lastUpdated":1644680220379}',c={},o=t(`__VP_STATIC_START__<p>ServiceStack&#39;s <a href="https://github.com/ServiceStack/ServiceStack/blob/master/license.txt" target="_blank" rel="noopener noreferrer">AGPL/FLOSS Exception</a> allows free usage of ServiceStack&#39;s Source Code on GitHub in OSS projects without a commercial license.</p><h3 id="linking-to-source-projects" tabindex="-1">Linking to Source projects <a class="header-anchor" href="#linking-to-source-projects" aria-hidden="true">#</a></h3><p>In order to get the best source-based development experience using the latest version of ServiceStack in your Projects, clone the ServiceStack Repos you want to use:</p><ul><li><a href="https://github.com/ServiceStack/ServiceStack" target="_blank" rel="noopener noreferrer">ServiceStack/ServiceStack</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.Text" target="_blank" rel="noopener noreferrer">ServiceStack/ServiceStack.Text</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.Text" target="_blank" rel="noopener noreferrer">ServiceStack/ServiceStack.Redis</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.OrmLite" target="_blank" rel="noopener noreferrer">ServiceStack/ServiceStack.OrmLite</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.Aws" target="_blank" rel="noopener noreferrer">ServiceStack/ServiceStack.Aws</a></li><li><a href="https://github.com/ServiceStack/ServiceStack.Azure" target="_blank" rel="noopener noreferrer">ServiceStack/ServiceStack.Azure</a></li></ul><p>Then reference the <code>*.Source.csproj</code> of each project you want to reference in your solution.</p><p>This approach is used in our <a href="https://github.com/NetCoreApps/Test/blob/master/src/Test/Test.csproj" target="_blank" rel="noopener noreferrer">Test.csproj</a> allowing us to debug directly into ServiceStack library source code just like any other project reference in our solution.</p><h3 id="use-local-libraries" tabindex="-1">Use Local Libraries <a class="header-anchor" href="#use-local-libraries" aria-hidden="true">#</a></h3><p>Each ServiceStack Repo has a <code>.sln</code> in its <code>/src</code> folder you can use to build all libraries in each repo. These libraries can be copied to a local lib folder and included as <code>.dll</code> references.</p><h3 id="use-local-nuget-packages" tabindex="-1">Use Local NuGet packages <a class="header-anchor" href="#use-local-nuget-packages" aria-hidden="true">#</a></h3><p>As each ServiceStack project is a standard <code>.csproj</code>, you can alternatively choose to build and reference NuGet packages instead:</p><pre><code>$ dotnet pack -c Release &lt;project&gt;.csproj
</code></pre><h4 id="use-build-proj-to-generate-all-packages" tabindex="-1">Use build.proj to generate all packages <a class="header-anchor" href="#use-build-proj-to-generate-all-packages" aria-hidden="true">#</a></h4><p>Each repo has a <code>/build/build.proj</code> that can be run to generate all library NuGet packages in each repo, e.g:</p><pre><code>$ msbuild build.proj /property:Configuration=Release;MinorVersion=&lt;MINOR&gt;;PatchVersion=1
</code></pre><p>Which can be referenced as a <a href="https://docs.microsoft.com/en-us/nuget/hosting-packages/local-feeds" target="_blank" rel="noopener noreferrer">local Nuget package feed</a>.</p><h3 id="oss-license-key" tabindex="-1">OSS License Key <a class="header-anchor" href="#oss-license-key" aria-hidden="true">#</a></h3><p>OSS projects building from source can use the <a href="https://github.com/ServiceStack/ServiceStack.Text/blob/master/tests/ServiceStack.Text.Tests/App.config#L4" target="_blank" rel="noopener noreferrer">OSS License Key</a> below to allow unrestricted usage in their OSS projects:</p><div class="language-"><pre><code>1001-e1JlZjoxMDAxLE5hbWU6VGVzdCBCdXNpbmVzcyxUeXBlOkJ1c2luZXNzLEhhc2g6UHVNTVRPclhvT2ZIbjQ5MG5LZE1mUTd5RUMzQnBucTFEbTE3TDczVEF4QUNMT1FhNXJMOWkzVjFGL2ZkVTE3Q2pDNENqTkQyUktRWmhvUVBhYTBiekJGUUZ3ZE5aZHFDYm9hL3lydGlwUHI5K1JsaTBYbzNsUC85cjVJNHE5QVhldDN6QkE4aTlvdldrdTgyTk1relY2eis2dFFqTThYN2lmc0JveHgycFdjPSxFeHBpcnk6MjAxMy0wMS0wMX0=
</code></pre></div><p>Which can be registered using any of ServiceStack&#39;s <a href="https://servicestack.net/download#register" target="_blank" rel="noopener noreferrer">license registration options</a>.</p>__VP_STATIC_END__`,19),i=[o];function s(l,n,p,d,h,S){return a(),r("div",null,i)}var g=e(c,[["render",s]]);export{k as __pageData,g as default};
