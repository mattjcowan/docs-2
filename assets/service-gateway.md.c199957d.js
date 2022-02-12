import{_ as n,c as s,o as a,a as e}from"./app.25a431af.js";const y=`{"title":"Service Gateway","description":"","frontmatter":{"slug":"service-gateway","title":"Service Gateway"},"headers":[{"level":3,"title":"Service Integration API's","slug":"service-integration-api-s"},{"level":3,"title":"Substitutable Service Gateways","slug":"substitutable-service-gateways"},{"level":3,"title":"Call Internal and External Services from URLs","slug":"call-internal-and-external-services-from-urls"},{"level":2,"title":"Service Discovery","slug":"service-discovery"},{"level":2,"title":"Designing for Microservices","slug":"designing-for-microservices"}],"relativePath":"service-gateway.md","lastUpdated":1644680220419}`,t={},o=e(`<p>The Service Gateway is implemented on top of ServiceStack&#39;s existing message-based architecture to open up exciting new possibilities for development of loosely-coupled <a href="/modularizing-services">Modularized Service Architectures</a>.</p><p>The new <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/IServiceGateway.cs" target="_blank" rel="noopener noreferrer">IServiceGateway</a> interfaces represent the minimal surface area required to support ServiceStack&#39;s different calling conventions in a formalized API that supports both Sync and Async Service Integrations:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IServiceGateway</span>
<span class="token punctuation">{</span>
    <span class="token comment">// Normal Request/Reply Services</span>
    <span class="token return-type class-name">TResponse</span> <span class="token generic-method"><span class="token function">Send</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> requestDto<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Auto Batched Request/Reply Requests</span>
    <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span></span> <span class="token generic-method"><span class="token function">SendAll</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> requestDtos<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// OneWay Service</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Publish</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> requestDto<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Auto Batched OneWay Requests</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">PublishAll</span><span class="token punctuation">(</span><span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> requestDtos<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Equivalent Async API&#39;s</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IServiceGatewayAsync</span>
<span class="token punctuation">{</span>
    <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span></span> <span class="token generic-method"><span class="token function">SendAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> requestDto<span class="token punctuation">,</span> 
        <span class="token class-name">CancellationToken</span> token <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">CancellationToken</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token generic-method"><span class="token function">SendAllAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TResponse<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> requestDtos<span class="token punctuation">,</span> 
        <span class="token class-name">CancellationToken</span> token <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">CancellationToken</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">Task</span> <span class="token function">PublishAsync</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">object</span></span> requestDto<span class="token punctuation">,</span> 
        <span class="token class-name">CancellationToken</span> token <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">CancellationToken</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">Task</span> <span class="token function">PublishAllAsync</span><span class="token punctuation">(</span><span class="token class-name">IEnumerable<span class="token punctuation">&lt;</span><span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> requestDtos<span class="token punctuation">,</span> 
        <span class="token class-name">CancellationToken</span> token <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">CancellationToken</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The minimum set of API&#39;s above requires the least burden for <code>IServiceGateway</code> implementers whilst the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Client/ServiceGatewayExtensions.cs" target="_blank" rel="noopener noreferrer">ServiceGatewayExtensions</a> overlays convenience API&#39;s common to all implementations providing the nicest API&#39;s possible for Request DTO&#39;s implementing the recommended <code>IReturn&lt;T&gt;</code> and <code>IReturnVoid</code> interface markers. The extension methods also provide fallback pseudo-async support for <code>IServiceGateway</code> implementations that also don&#39;t implement the optional <code>IServiceGatewayAsync</code>, but will use native async implementations for those that do.</p><p>Naked Request DTO&#39;s without annotations are sent as a <strong>POST</strong> but alternative Verbs are also supported by annotating Request DTO&#39;s with <a href="/csharp-client#http-verb-interface-markers">HTTP Verb Interface Markers</a> where Request DTO&#39;s containing <code>IGet</code>, <code>IPut</code>, etc. are sent using the typed Verb API, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/customers/{Id}&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetCustomer</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IGet</span><span class="token punctuation">,</span> <span class="token class-name">IReturn<span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span> <span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name"><span class="token keyword">var</span></span> customer <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomer</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//GET /customers/1</span>
<span class="token comment">//Equivalent to:</span>
<span class="token class-name"><span class="token keyword">var</span></span> customer <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomer</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><h3 id="service-integration-api-s" tabindex="-1">Service Integration API&#39;s <a class="header-anchor" href="#service-integration-api-s" aria-hidden="true">#</a></h3><p>To execute existing ServiceStack Services internally you can call <code>ExecuteRequest(requestDto)</code> which passes the Request DTO along with the current <code>IRequest</code> into the <code>ServiceController.Execute()</code> to execute. The alternative is to call <code>ResolveService&lt;T&gt;</code> to resolve an autowired instance of the Service that&#39;s injected with the current <code>IRequest</code> context letting you call methods on the Service instance directly. Below is an example of using both API&#39;s:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">GetCustomerOrders</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> orderService <span class="token operator">=</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ResolveService</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>OrderService<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomerOrders</span> <span class="token punctuation">{</span>
            Customer <span class="token operator">=</span> <span class="token punctuation">(</span>Customer<span class="token punctuation">)</span><span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">ExecuteRequest</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomer</span> <span class="token punctuation">{</span>Id<span class="token operator">=</span>request<span class="token punctuation">.</span>Id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            Orders <span class="token operator">=</span> orderService<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">QueryOrders</span> <span class="token punctuation">{</span> CustomerId <span class="token operator">=</span> request<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The recommended approach now is to instead use the <code>IServiceGateway</code> accessible from <code>base.Gateway</code> available in all Service, Razor Views, MVC ServiceStackController classes, etc. It works similar to the <code>ExecuteRequest()</code> API (which it now replaces) where you can invoke a Service with just a populated Request DTO, but instead yields an ideal typed API for Request DTO&#39;s implementing the recommended <code>IReturn&lt;T&gt;</code> or <code>IReturnVoid</code> markers:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">GetCustomerOrders</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomerOrders</span> <span class="token punctuation">{</span>
        Customer <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomer</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> request<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Orders <span class="token operator">=</span> Gateway<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">QueryOrders</span> <span class="token punctuation">{</span> CustomerId <span class="token operator">=</span> request<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Or you can use the Async API if you prefer the non-blocking version:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task<span class="token punctuation">&lt;</span>GetCustomerOrdersResponse<span class="token punctuation">&gt;</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">GetCustomerOrders</span> request<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomerOrdersResponse</span> <span class="token punctuation">{</span>
        Customer <span class="token operator">=</span> <span class="token keyword">await</span> Gateway<span class="token punctuation">.</span><span class="token function">SendAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomer</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> request<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Orders <span class="token operator">=</span> <span class="token keyword">await</span> Gateway<span class="token punctuation">.</span><span class="token function">SendAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">QueryOrders</span> <span class="token punctuation">{</span> CustomerId <span class="token operator">=</span> request<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The capability that sets the ServiceGateway apart (other than offering a nicer API to work with) is that this System could later have its <strong>Customer</strong> and <strong>Order</strong> Subsystems split out into different hosts and this exact Service implementation would continue to function as before, albeit a little slower due to the overhead of any introduced out-of-process communications.</p><p>The default implementation of <code>IServiceGateway</code> uses the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/InProcessServiceGateway.cs" target="_blank" rel="noopener noreferrer">InProcessServiceGateway</a> which delegates the Request DTO to the appropriate <code>ServiceController.Execute()</code> or <code>ServiceController.ExecuteAsync()</code> methods to execute the Service. One noticeable difference is that any Exceptions thrown by downstream Services are automatically converted into the same <code>WebServiceException</code> that clients would throw when calling the Service externally, this is so Exceptions are indistinguishable whether it&#39;s calling an internal Service or an external one, which begins touching on the benefits of the Gateway...</p><p>The ServiceGateway is the same interface whether you&#39;re calling an Internal Service on the Server or a remote Service from a client. It exposes an ideal message-based API that&#39;s <a href="http://www.infoq.com/articles/interview-servicestack" target="_blank" rel="noopener noreferrer">optimal for remote Service Integrations</a> that also supports <a href="/auto-batched-requests">Auto Batched Requests</a> for combining multiple Service Calls into a single Request, minimizing latency when possible.</p><h3 id="substitutable-service-gateways" tabindex="-1">Substitutable Service Gateways <a class="header-anchor" href="#substitutable-service-gateways" aria-hidden="true">#</a></h3><p>These characteristics makes it easy to substitute and customize the behavior of the Gateway as visible in the examples below. The easiest scenario to support is to redirect all Service Gateway calls to a remote ServiceStack instance which can be done by registering any .NET Service Client against the <code>IServiceGateway</code> interface, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IServiceGateway<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>baseUrl<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>A more likely scenario you&#39;d want to support is a mix where internal requests are executed in-process and external requests call their respective Service. If your system is split in two this becomes a simple check to return the local InProcess Gateway for Requests which are defined in this ServiceStack instance otherwise return a Service Client configured to the alternative host when not, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomServiceGatewayFactory</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ServiceGatewayFactoryBase</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">IServiceGateway</span> <span class="token function">GetGateway</span><span class="token punctuation">(</span><span class="token class-name">Type</span> requestType<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> isLocal <span class="token operator">=</span> HostContext<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span>RequestTypes<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>requestType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> gateway <span class="token operator">=</span> isLocal
            <span class="token punctuation">?</span> <span class="token punctuation">(</span>IServiceGateway<span class="token punctuation">)</span><span class="token keyword">base</span><span class="token punctuation">.</span>localGateway
            <span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>alternativeBaseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> gateway<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>For this we needed to implement the <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IServiceGatewayFactory.cs" target="_blank" rel="noopener noreferrer">IServiceGatewayFactory</a> so we can first capture the current <code>IRequest</code> that&#39;s needed in order to call the In Process Service Gateway with. The convenience <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/ServiceGatewayFactoryBase.cs" target="_blank" rel="noopener noreferrer">ServiceGatewayFactoryBase</a> abstracts the rest of the API away so you&#39;re only tasked with returning the appropriate Service Gateway for the specified Request DTO.</p><p>Capturing the current <code>IRequest</code> makes the Gateway factory instance non-suitable to use as a singleton, so we&#39;ll need to register it with <code>AddTransient</code> or <code>ReuseScope.None</code> scope so a new instance is resolved each time:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Configure</span><span class="token punctuation">(</span><span class="token class-name">Container</span> container<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddTransient</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IServiceGatewayFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CustomServiceGatewayFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">// Equivalent to:</span>
<span class="token comment">//    container.Register&lt;IServiceGatewayFactory&gt;(x =&gt; new CustomServiceGatewayFactory())</span>
<span class="token comment">//        .ReusedWithin(ReuseScope.None);</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="call-internal-and-external-services-from-urls" tabindex="-1">Call Internal and External Services from URLs <a class="header-anchor" href="#call-internal-and-external-services-from-urls" aria-hidden="true">#</a></h3><p>The <code>Metadata.CreateRequestFromUrl()</code> API lets you create Request DTOs from absolute or relative URLs. This is useful if you need a generic routine to be able to execute a number of different Services from a collection or URL&#39;s, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> processUrls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span> <span class="token string">&quot;https://example.org/invoices/generate?userId=1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/assets/1/generate&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> url <span class="token keyword">in</span> processUrls<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> HostContext<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span><span class="token function">CreateRequestFromUrl</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> responseType <span class="token operator">=</span> HostContext<span class="token punctuation">.</span>Metadata<span class="token punctuation">.</span><span class="token function">GetResponseTypeByRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> HostContext<span class="token punctuation">.</span>AppHost<span class="token punctuation">.</span><span class="token function">GetServiceGateway</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>responseType<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>

    db<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Task</span> <span class="token punctuation">{</span> Url <span class="token operator">=</span> url<span class="token punctuation">,</span> Response <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">ToJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Completed <span class="token operator">=</span> DateTime<span class="token punctuation">.</span>UtcNow <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The Service Gateway provides an optimal way for executing Services where it will transparently execute local requests in process or external requests remotely using either the configured <a href="#substitutable-service-gateways">Service Gateway</a> or <a href="/service-discovery">Service Discovery Solution</a>.</p><h2 id="service-discovery" tabindex="-1"><a href="/service-discovery">Service Discovery</a> <a class="header-anchor" href="#service-discovery" aria-hidden="true">#</a></h2><p>This demonstrates the underpinnings by which we can plug into and intercept all intra-Service calls and apply our own high-level custom logic which sets the foundation for other value-added functionality like <a href="/service-discovery">Service Discovery</a> which can transparently route service calls to the most appropriate available remote endpoint at run-time, automatically without additional configuration or code-maintenance overhead.</p><h2 id="designing-for-microservices" tabindex="-1">Designing for Microservices <a class="header-anchor" href="#designing-for-microservices" aria-hidden="true">#</a></h2><p>Whether or not Systems <a href="http://blog.cleancoder.com/uncle-bob/2014/09/19/MicroServicesAndJars.html" target="_blank" rel="noopener noreferrer">benefit overall from a fine-grained microservices architecture</a>, enough to justify the additional latency, management and infrastructure overhead it requires, we still see value in the development process of <a href="https://channel9.msdn.com/events/Build/2016/C918" target="_blank" rel="noopener noreferrer">designing for Microservices</a> where decoupling naturally isolated components into loosely-coupled subsystems has software-architecture benefits with overall complexity of an entire system being reduced into smaller, more manageable logical scopes which encapsulates their capabilities behind re-usable, <a href="http://stackoverflow.com/a/32940275/85785" target="_blank" rel="noopener noreferrer">coarse-grained messages to small, well-defined facades</a>.</p><p>The ServiceGateway and its Services Discovery ecosystem together with ServiceStack&#39;s recommended use of impl-free reusable POCO DTO&#39;s and its ability to <a href="/modularizing-services">modularize Service implementations across multiple projects</a> naturally promote a microservices-ready architecture where Service interactions are loosely-coupled behind well-defined, reusable, coarse-grained messages. Designing systems in this way later allows the isolated Service Implementation .dll to be extracted from the main System and wrapped into its own AppHost. Together with an agreed Service Discovery solution, allows you to spawn multiple instances of the new Service - letting you scale, deploy and maintain it independently from the rest of the system.</p>`,33),p=[o];function c(r,l,i,u,k,d){return a(),s("div",null,p)}var h=n(t,[["render",c]]);export{y as __pageData,h as default};
