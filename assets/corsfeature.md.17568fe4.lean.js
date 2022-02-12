import{_ as n,c as s,o as a,a as t}from"./app.25a431af.js";const g='{"title":"CORS Feature","description":"","frontmatter":{"slug":"corsfeature","title":"CORS Feature"},"headers":[{"level":3,"title":"Enabling Global CORS support","slug":"enabling-global-cors-support"},{"level":3,"title":"Allow specific origins","slug":"allow-specific-origins"},{"level":3,"title":"Enabling CORS per-service support","slug":"enabling-cors-per-service-support"},{"level":2,"title":"Manually enabling CORS","slug":"manually-enabling-cors"},{"level":3,"title":"Setting Global HTTP Headers","slug":"setting-global-http-headers"},{"level":3,"title":"Returning Custom HTTP Headers in a service","slug":"returning-custom-http-headers-in-a-service"},{"level":2,"title":"JSONP","slug":"jsonp"}],"relativePath":"corsfeature.md","lastUpdated":1644680219603}',e={},o=t(`__VP_STATIC_START__<h3 id="enabling-global-cors-support" tabindex="-1">Enabling Global CORS support <a class="header-anchor" href="#enabling-global-cors-support" aria-hidden="true">#</a></h3><p>The <strong>CorsFeature</strong> wraps CORS headers into an encapsulated <a href="/plugins">Plugin</a> to make it much easier to add CORS support to your ServiceStack services.</p><p>Commonly this is now all that&#39;s needed:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CorsFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Which uses the default values:</p><div class="language-csharp"><pre><code><span class="token function">CorsFeature</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">allowedOrigins</span><span class="token punctuation">:</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> 
    <span class="token named-parameter punctuation">allowedMethods</span><span class="token punctuation">:</span><span class="token string">&quot;GET, POST, PUT, DELETE, OPTIONS&quot;</span><span class="token punctuation">,</span> 
    <span class="token named-parameter punctuation">allowedHeaders</span><span class="token punctuation">:</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> 
    <span class="token named-parameter punctuation">allowCredentials</span><span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>You can leave out any of the values matching the default. E.g. if you just wanted to restrict the allowed methods to just GET and POST requests, you can just do:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token function">CorsFeature</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">allowedMethods</span><span class="token punctuation">:</span><span class="token string">&quot;GET, POST&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="allow-specific-origins" tabindex="-1">Allow specific origins <a class="header-anchor" href="#allow-specific-origins" aria-hidden="true">#</a></h3><p>Use <code>allowOriginWhitelist</code> when you want to only allow CORS access by specific sites:</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">CorsFeature</span><span class="token punctuation">(</span>
    <span class="token named-parameter punctuation">allowOriginWhitelist</span><span class="token punctuation">:</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;http://localhost&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://localhost:5000&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://run.plnkr.co&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">allowCredentials</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">allowedHeaders</span><span class="token punctuation">:</span> <span class="token string">&quot;Content-Type, Allow, Authorization, X-Args&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="enabling-cors-per-service-support" tabindex="-1">Enabling CORS per-service support <a class="header-anchor" href="#enabling-cors-per-service-support" aria-hidden="true">#</a></h3><p>Instead of using the plugin above, ServiceStack also allows you to enable CORS on a per-service basis by using <strong>[EnableCors]</strong> <a href="/filter-attributes">Response Filter attribute</a> which has the same defaults as above. E.g. You can enable just GET, POST as above with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">EnableCors</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token named-parameter punctuation">allowedMethods</span><span class="token punctuation">:</span><span class="token string">&quot;GET,POST&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre></div><h2 id="manually-enabling-cors" tabindex="-1">Manually enabling CORS <a class="header-anchor" href="#manually-enabling-cors" aria-hidden="true">#</a></h2><p>The beauty of <a href="http://www.servicestack.net" target="_blank" rel="noopener noreferrer">ServiceStack</a> is that it&#39;s built on a highly flexible and simple core. We don&#39;t believe in building strong-typed APIs over everything, as it&#39;s impossible to predict what new HTTP Headers / StatusCodes will exist in the future. So whilst we provide convenient behavior to accomplish common tasks, we also provide a flexible API that lets you configure any desired HTTP Output.</p><h3 id="setting-global-http-headers" tabindex="-1">Setting Global HTTP Headers <a class="header-anchor" href="#setting-global-http-headers" aria-hidden="true">#</a></h3><p>This is how to globally enable Cross Origin Sharing in you AppHost config:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//Permit modern browsers (e.g. Firefox) to allow sending of any HTTP Method</span>
    <span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> 
    <span class="token punctuation">{</span>
        GlobalResponseHeaders <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET, POST, PUT, DELETE, OPTIONS&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Type&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="returning-custom-http-headers-in-a-service" tabindex="-1">Returning Custom HTTP Headers in a service <a class="header-anchor" href="#returning-custom-http-headers-in-a-service" aria-hidden="true">#</a></h3><p>These headers will get sent on every request, alternatively you can also enable it for specific web services, i.e. take the <a href="http://www.servicestack.net/ServiceStack.Hello/" target="_blank" rel="noopener noreferrer">Hello World Web Service</a> for example:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloResponse</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Result <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IService</span></span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">Hello</span> request<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HelloResponse</span> <span class="token punctuation">{</span> Result <span class="token operator">=</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Name <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpResult</span><span class="token punctuation">(</span>dto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Headers <span class="token operator">=</span> <span class="token punctuation">{</span>
              <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET, POST, PUT, DELETE&quot;</span> <span class="token punctuation">}</span> 
              <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Content-Type&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above is all the C# code you need to develop a web service which is then automatically wired up for you on all HTTP Verbs (GET, POST, etc) and built-in endpoints, i.e. JSON, XML, JSV, HTML, CSV, SOAP 1.1/1.2 - for free, without any config or friction required. Checkout <a href="http://www.servicestack.net/ServiceStack.Hello/" target="_blank" rel="noopener noreferrer">the live example of the above web service</a>.</p><h2 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-hidden="true">#</a></h2><p>In addition to the above endpoints each service is available to be called by <a href="https://en.wikipedia.org/wiki/JSONP" target="_blank" rel="noopener noreferrer">JSONP</a> (another popular way to enable cross-domain service calls in Ajax apps) where each service can be called via JSONP by simply adding the <strong>?callback=cb</strong> parameter to the querystring, e.g:</p><p><a href="https://techstacks.io/technology/servicestack?callback=cb" target="_blank" rel="noopener noreferrer">techstacks.io/technology/servicestack?callback=cb</a>:</p><div class="language-js"><pre><code><span class="token comment">//Response:</span>
<span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
    <span class="token operator">...</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,27),p=[o];function c(l,i,u,r,k,d){return a(),s("div",null,p)}var b=n(e,[["render",c]]);export{g as __pageData,b as default};
