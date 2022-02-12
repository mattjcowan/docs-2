import{_ as n,c as a,o as s,a as t}from"./app.25a431af.js";const m='{"title":"Run side-by-side with another Framework","description":"","frontmatter":{"slug":"servicestack-side-by-side-with-another-web-framework","title":"Run side-by-side with another Framework"},"headers":[{"level":2,"title":"Enable ASP.NET Sessions","slug":"enable-asp-net-sessions"},{"level":3,"title":"Resources","slug":"resources"}],"relativePath":"servicestack-side-by-side-with-another-web-framework.md","lastUpdated":1644680220419}',p={},e=t(`<p>In order to avoid conflicts with your existing <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> web framework it is recommended to host your ServiceStack web services at a custom path. This will allow you to use ServiceStack together with an existing web framework e.g. <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC 3 or FUBU MVC, etc.</p><p>The location configuration (to your root Web.config file) below hosts your webservices at custom path: <code>/api</code></p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>api<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Required for IIS 7.0 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modules</span> <span class="token attr-name">runAllManagedModulesForAllRequests</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>handlers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.Factory<span class="token punctuation">&quot;</span></span> 
             <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> 
             <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">preCondition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>integratedMode<span class="token punctuation">&quot;</span></span> 
             <span class="token attr-name">resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Unspecified<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowPathInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>handlers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Configuration for also running on Mono / IIS 6:</p><div class="language-xml"><pre><code><span class="token comment">&lt;!-- Required for MONO --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>api*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validation</span> <span class="token attr-name">validateIntegratedModeConfiguration</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.webServer</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Due to limitations in IIS 6 - the <code>/custompath</code> must end with <code>.ashx</code>, e.g: <code>path=&quot;api.ashx&quot;</code></p></div><p>You also need to configure the root path in your AppHost.</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span> HandlerFactoryPath <span class="token operator">=</span> <span class="token string">&quot;api&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>To avoid conflicts with <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> MVC add an ignore rule</strong> in <code>Global.asax RegisterRoutes</code> method e.g:</p><div class="language-csharp"><pre><code>routes<span class="token punctuation">.</span>IgnoreRoute <span class="token punctuation">(</span><span class="token string">&quot;api/{*pathInfo}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>See <a href="https://github.com/NetFrameworkTemplates/mvc-netfx" target="_blank" rel="noopener noreferrer">mvc-netfx</a> for a working ServiceStack + MVC Project Template.</p><p><strong>For MVC4 applications you also need to unregister WebApi</strong>, by commenting out this line in <code>Global.asax.cs</code>:</p><div class="language-csharp"><pre><code><span class="token comment">//WebApiConfig.Register(GlobalConfiguration.Configuration);</span>
</code></pre></div><p>If you used Nuget to install the bits, remove the original handler from the web.config system.webserver node e.g:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.Factory<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ServiceStack.HttpHandlerFactory, ServiceStack<span class="token punctuation">&quot;</span></span> <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name">preCondition</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>integratedMode<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Unspecified<span class="token punctuation">&quot;</span></span> <span class="token attr-name">allowPathInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="enable-asp-net-sessions" tabindex="-1">Enable <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Sessions <a class="header-anchor" href="#enable-asp-net-sessions" aria-hidden="true">#</a></h2><p>If you want ServiceStack Services to be able to access <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Session you can use a decorated <code>IHttpHandlerFactory</code> below that returns a <code>SessionHandlerDecorator</code> that&#39;s decorated with <code>IRequiresSessionState</code> to tell <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> to enable Sessions for these handlers:</p><div class="language-csharp"><pre><code><span class="token keyword">namespace</span> <span class="token namespace">MyApp</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SessionHttpHandlerFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHttpHandlerFactory</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">HttpHandlerFactory</span> Factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpHandlerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token return-type class-name">IHttpHandler</span> <span class="token function">GetHandler</span><span class="token punctuation">(</span><span class="token class-name">HttpContext</span> context<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> requestType<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> url<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> path<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> handler <span class="token operator">=</span> Factory<span class="token punctuation">.</span><span class="token function">GetHandler</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> requestType<span class="token punctuation">,</span> url<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> handler <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">?</span> <span class="token keyword">null</span> <span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SessionHandlerDecorator</span><span class="token punctuation">(</span><span class="token punctuation">(</span>IHttpAsyncHandler<span class="token punctuation">)</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ReleaseHandler</span><span class="token punctuation">(</span><span class="token class-name">IHttpHandler</span> handler<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Factory<span class="token punctuation">.</span><span class="token function">ReleaseHandler</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SessionHandlerDecorator</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHttpAsyncHandler</span><span class="token punctuation">,</span> <span class="token class-name">IRequiresSessionState</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token return-type class-name">IHttpAsyncHandler</span> Handler <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

        <span class="token keyword">internal</span> <span class="token function">SessionHandlerDecorator</span><span class="token punctuation">(</span><span class="token class-name">IHttpAsyncHandler</span> handler<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">bool</span></span> IsReusable <span class="token operator">=&gt;</span> Handler<span class="token punctuation">.</span>IsReusable<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ProcessRequest</span><span class="token punctuation">(</span><span class="token class-name">HttpContext</span> context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Handler<span class="token punctuation">.</span><span class="token function">ProcessRequest</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token return-type class-name">IAsyncResult</span> <span class="token function">BeginProcessRequest</span><span class="token punctuation">(</span><span class="token class-name">HttpContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AsyncCallback</span> cb<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">object</span></span> extraData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
          Handler<span class="token punctuation">.</span><span class="token function">BeginProcessRequest</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> extraData<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">EndProcessRequest</span><span class="token punctuation">(</span><span class="token class-name">IAsyncResult</span> result<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Handler<span class="token punctuation">.</span><span class="token function">EndProcessRequest</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Then replace the existing <code>ServiceStack.HttpHandlerFactory</code> registration with your decorated implementation above, e.g:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>system.web</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MyApp.SessionHttpHandlerFactory, MyApp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">verb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>httpHandlers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>system.web</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/ServiceStackApps/LiveDemos#starter-templates" target="_blank" rel="noopener noreferrer">Example config files for Starter Templates</a></li></ul>`,22),o=[e];function c(l,u,k,r,i,d){return s(),a("div",null,o)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
