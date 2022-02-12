import{_ as n,c as a,o as s,a as e}from"./app.25a431af.js";const m=`{"title":"Why Remote Services should use DTOs","description":"","frontmatter":{"title":"Why Remote Services should use DTOs","slug":"why-remote-services-use-dtos"},"headers":[{"level":2,"title":"The Service Layer is your most important Contract","slug":"the-service-layer-is-your-most-important-contract"},{"level":3,"title":"DTOs are Best practices for remote services","slug":"dtos-are-best-practices-for-remote-services"},{"level":3,"title":"DRY vs Intent","slug":"dry-vs-intent"},{"level":3,"title":"Using ServiceStack's Built-in auto-mapping","slug":"using-servicestack-s-built-in-auto-mapping"}],"relativePath":"why-remote-services-use-dtos.md","lastUpdated":1644680220427}`,t={},o=e(`<p>Types provide several productivity and compiler benefits when used within the same solution, they&#39;re especially more useful across process boundaries where they&#39;re the only mechanical tool that will be able to determine if Remote Services are being consumed correctly, mitigating run-time errors from making it into production where they&#39;ll ultimately be discovered by end-users who&#39;ll exhaust untested corner cases.</p><h2 id="the-service-layer-is-your-most-important-contract" tabindex="-1">The Service Layer is your most important Contract <a class="header-anchor" href="#the-service-layer-is-your-most-important-contract" aria-hidden="true">#</a></h2><p>The most important interface that you can ever create in your entire system is your external facing service contract, this is what consumers of your service or application will bind to, i.e. the existing call-sites that often won&#39;t get updated along with your code-base - every other model is secondary.</p><h3 id="dtos-are-best-practices-for-remote-services" tabindex="-1">DTOs are Best practices for remote services <a class="header-anchor" href="#dtos-are-best-practices-for-remote-services" aria-hidden="true">#</a></h3><p>In following of <a href="http://martinfowler.com/eaaCatalog/dataTransferObject.html" target="_blank" rel="noopener noreferrer">Martin Fowler&#39;s recommendation for using DTOs</a> (Data Transfer Objects) for remote services (<a href="http://msdn.microsoft.com/en-us/library/ff649585.aspx" target="_blank" rel="noopener noreferrer">MSDN</a>), ServiceStack encourages the use of clean, untainted POCOs to define a well-defined contract with that should kept in a largely implementation and dependency-free .dll. The benefits of this allows you to be able to re-use typed DTOs used to define your services with, as-is, in your <a href="/csharp-client">C#/.NET Clients</a> - providing an end-to-end typed API without the use of any code-gen or other artificial machinery.</p><h3 id="dry-vs-intent" tabindex="-1">DRY vs Intent <a class="header-anchor" href="#dry-vs-intent" aria-hidden="true">#</a></h3><p>Keeping things DRY should not be confused with clearly stating of intent, which you should avoid trying to DRY or <a href="http://ayende.com/blog/4769/code-review-guidelines-avoid-inheritance-for-properties" target="_blank" rel="noopener noreferrer">hide behind inheritance</a>, magic properties or any other mechanism. Having clean, well-defined DTOs provides a single source of reference that anyone can look at to see what each service accepts and returns, it allows your client and server developers to start their work straight away and bind to the external service models without the implementation having been written.</p><p>Keeping the DTOs separated also gives you the freedom to re-factor the implementation from within without breaking external clients, i.e. your service starts to cache responses or leverages a NoSQL solution to populate your responses with.</p><p>It&#39;s also provides the authoritative source (that&#39;s not leaked or coupled inside your app logic) that&#39;s used to create the auto-generated metadata pages, example responses, Swagger support, XSDs, WSDLs, etc.</p><h3 id="using-servicestack-s-built-in-auto-mapping" tabindex="-1"><a href="/auto-mapping">Using ServiceStack&#39;s Built-in auto-mapping</a> <a class="header-anchor" href="#using-servicestack-s-built-in-auto-mapping" aria-hidden="true">#</a></h3><p>Whilst we encourage keeping separate DTO models, you don&#39;t need to maintain your own manual mapping as you can use a mapper like <a href="https://github.com/AutoMapper/AutoMapper" target="_blank" rel="noopener noreferrer">AutoMapper</a> or using ServiceStack&#39;s built-in Auto Mapping support, e.g:</p><p>Create a new DTO instance, populated with matching properties on viewModel:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> viewModel<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertTo</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyDto<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Initialize DTO and populate it with matching properties on a view model:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyDto</span> <span class="token punctuation">{</span> A <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> B <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">PopulateWith</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Initialize DTO and populate it with <strong>non-default</strong> matching properties on a view model:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyDto</span> <span class="token punctuation">{</span> A <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> B <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">PopulateWithNonDefaultValues</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Initialize DTO and populate it with matching properties that are annotated with the <strong>Attr</strong> Attribute on a view model:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MyDto</span> <span class="token punctuation">{</span> A<span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">PopulateFromPropertiesWithAttribute</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Attr<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>viewModel<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>When mapping logic becomes more complicated we like to use extension methods to keep code DRY and maintain the mapping in one place that&#39;s easily consumable from within your application, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">MappingExtensions</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">MyDto</span> <span class="token function">ToDto</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">MyViewModel</span> viewModel<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> viewModel<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConvertTo</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>MyDto<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dto<span class="token punctuation">.</span>Items <span class="token operator">=</span> viewModel<span class="token punctuation">.</span>Items<span class="token punctuation">.</span><span class="token function">ConvertAll</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span><span class="token function">ToDto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        dto<span class="token punctuation">.</span>CalculatedProperty <span class="token operator">=</span> <span class="token function">Calculate</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">.</span>Seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Which is now easily consumable with just:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> dto <span class="token operator">=</span> viewModel<span class="token punctuation">.</span><span class="token function">ToDto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,23),p=[o];function c(i,r,l,u,d,k){return s(),a("div",null,p)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
