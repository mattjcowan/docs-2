import{_ as s,c as n,o as a,a as e}from"./app.25a431af.js";const m=`{"title":"SOAP support","description":"","frontmatter":{"slug":"soap-support","title":"SOAP support"},"headers":[{"level":3,"title":"Configure","slug":"configure"},{"level":2,"title":"SOAP + REST","slug":"soap-rest"},{"level":2,"title":"Consuming SOAP Services","slug":"consuming-soap-services"},{"level":3,"title":"Visual Studios Add Service Reference","slug":"visual-studios-add-service-reference"},{"level":3,"title":"Using XSD.exe","slug":"using-xsd-exe"},{"level":3,"title":"REST-ful registration of multiple services","slug":"rest-ful-registration-of-multiple-services"},{"level":2,"title":"SOAP Limitations","slug":"soap-limitations"},{"level":3,"title":"DTO Naming Conventions","slug":"dto-naming-conventions"},{"level":3,"title":"Single WSDL Namespace","slug":"single-wsdl-namespace"},{"level":2,"title":"Changing the default namespace","slug":"changing-the-default-namespace"},{"level":3,"title":"SOAP Exceptions","slug":"soap-exceptions"},{"level":2,"title":"Customize WSDL's and XSD's","slug":"customize-wsdl-s-and-xsd-s"},{"level":3,"title":"Raw Access to WCF SOAP Message","slug":"raw-access-to-wcf-soap-message"},{"level":3,"title":"Customize SOAP Response","slug":"customize-soap-response"}],"relativePath":"soap-support.md","lastUpdated":1644680220423}`,t={},p=e(`<p>If you want to support SOAP, you have to ensure you adhere to some additional constraints where each method needs to be defined with the <code>Any()</code> endpoint and each DTO needs to be decorated with <code>[DataContract]</code> and <code>[DataMember]</code> attributes so their metadata is generated in your Services XSD and WSDL metadata.</p><h3 id="configure" tabindex="-1">Configure <a class="header-anchor" href="#configure" aria-hidden="true">#</a></h3><p>Register the <code>SoapFormat</code> Plugin to enable SOAP Support in ServiceStack (Requires <a href="http://ASP.NET" target="_blank" rel="noopener noreferrer">ASP.NET</a> Framework):</p><div class="language-csharp"><pre><code>Plugins<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">SoapFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="soap-rest" tabindex="-1">SOAP + REST <a class="header-anchor" href="#soap-rest" aria-hidden="true">#</a></h2><p>SOAP only supports a single <code>POST</code> request but REST services also make use of <code>GET</code>, <code>PUT</code>, <code>DELETE</code>, etc requests, which aren&#39;t used in SOAP. So if you want to support SOAP and REST, you need to create one service for each operation which is also the <a href="http://stackoverflow.com/a/15235822/85785" target="_blank" rel="noopener noreferrer">recommended API structure</a> for creating <a href="http://stackoverflow.com/a/15941229/85785" target="_blank" rel="noopener noreferrer">message-based Services</a>. The difference to be able to support SOAP is that Service implementations need to be defined with <code>Any()</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Request DTO - Add DataMember attribute for all properties.</span>
<span class="token punctuation">[</span>DataContract<span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/customers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/customers/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetCustomers</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetCustomersResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetCustomersResponse</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Customer<span class="token punctuation">&gt;</span></span> Results <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ResponseStatus</span> ResponseStatus <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DataContract</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/customers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddCustomer</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetCustomersResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DataContract</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/customers/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateCustomer</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetCustomersResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">DataContract</span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/customers/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeleteCustomer</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetCustomersResponse<span class="token punctuation">&gt;</span></span></span> <span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>

<span class="token comment">//Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomersService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Service</span></span> 
<span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">GetCustomers</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">AddCustomer</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">UpdateCustomer</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
   <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Any</span><span class="token punctuation">(</span><span class="token class-name">DeleteCustomer</span>  request<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Using <code>Any</code> will allow the Service to be executed on each HTTP Verb which is required for SOAP since all SOAP Requests are made with a HTTP POST Request wrapped inside a SOAP message and sent to the fixed <code>/soap11</code> or <code>/soap12</code> endpoints. You also want to make sure that <strong>all DTO models</strong> have <code>[DataContract]</code> attribute (and <code>[DataMember]</code> attribute for <strong>all properties</strong>) otherwise the XSD-schema embedded within the WSDL will be partially incomplete.</p><h2 id="consuming-soap-services" tabindex="-1">Consuming SOAP Services <a class="header-anchor" href="#consuming-soap-services" aria-hidden="true">#</a></h2><p>Ideally the nicest experience for consuming SOAP Services would be to use a generic <a href="/csharp-client#httpwebrequest-service-clients">C# ServiceClients</a>, e.g:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Soap12ServiceClient</span><span class="token punctuation">(</span>BaseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Although if you could use a generic ServiceClient, you&#39;d typically be better off using the other cleaner and faster endpoints like JSON instead:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JsonServiceClient</span><span class="token punctuation">(</span>BaseUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">GetCustomers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>In either case you can share your DTOs in your <code>*.ServiceModel.dll</code> to use the same DTOs without code-gen or use <a href="/csharp-add-servicestack-reference">C# Add ServiceStack Reference</a> to easily generate DTOs on the client.</p><h3 id="visual-studios-add-service-reference" tabindex="-1">Visual Studios Add Service Reference <a class="header-anchor" href="#visual-studios-add-service-reference" aria-hidden="true">#</a></h3><p>Since <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>&#39;s <code>Add Service Reference</code> is optimized for consuming <strong>.asmx</strong> or <strong>WCF</strong> RPC method calls it doesn&#39;t properly support multiple return values (e.g. when you also want a ResponseStatus property) where it will generate an ugly proxy API complete with <strong>out</strong> parameters.</p><p>If you want to ensure a <em>pretty proxy</em> is generated you should only have 1 first-level property which contains all the data you want to return.</p><h3 id="using-xsd-exe" tabindex="-1">Using XSD.exe <a class="header-anchor" href="#using-xsd-exe" aria-hidden="true">#</a></h3><p>One way around it is to share your services DTO&#39;s and use any of the typed <a href="/csharp-client#httpwebrequest-service-clients">Generic Service Clients</a> that are in-built into ServiceStack. Alternatively you can use the <code>XSD.exe</code> command-line utility to generate your types on the client and use those in the typed Service Clients.</p><h3 id="rest-ful-registration-of-multiple-services" tabindex="-1">REST-ful registration of multiple services <a class="header-anchor" href="#rest-ful-registration-of-multiple-services" aria-hidden="true">#</a></h3><p>The Custom <code>[Route]</code> definitions are used to control how you want services exposed in REST APIs which all logically appear to exposed them under a single REST-ful resource, i.e:</p><table><thead><tr><th style="text-align:left;">Request</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>GET /customers</strong></td><td style="text-align:left;">Get All Customers</td></tr><tr><td style="text-align:left;"><strong>GET /customers/1</strong></td><td style="text-align:left;">Get Customer #1</td></tr><tr><td style="text-align:left;"><strong>POST /customers</strong></td><td style="text-align:left;">Add New Customer</td></tr><tr><td style="text-align:left;"><strong>PUT /customers/1</strong></td><td style="text-align:left;">Update Customer #1</td></tr><tr><td style="text-align:left;"><strong>DELETE /customers</strong></td><td style="text-align:left;">Delete Customer #1</td></tr></tbody></table><p>This Web Service now supports both <strong>REST and SOAP</strong> with REST API&#39;s using the above custom routes and SOAP requests posting WSDL Requests to their fixed <code>/soap11</code> or <code>/soap12</code> endpoints.</p><h2 id="soap-limitations" tabindex="-1">SOAP Limitations <a class="header-anchor" href="#soap-limitations" aria-hidden="true">#</a></h2><p>SOAP expects that each request always returns the same response DTO. So you need to follow the <strong>Response DTO naming convention</strong>, otherwise ServiceStack won&#39;t be able to generate the WSDLs and the SOAP endpoint won&#39;t be able to work.</p><h3 id="dto-naming-conventions" tabindex="-1">DTO Naming Conventions <a class="header-anchor" href="#dto-naming-conventions" aria-hidden="true">#</a></h3><p><strong>Naming convention:</strong> <code>{Request DTO Name} + Response</code></p><h4 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-hidden="true">#</a></h4><p><strong>Request DTO</strong> <code>DeleteCustomer</code> =&gt; <strong>Response DTO</strong> <code>DeleteCustomerResponse</code></p><p>If you would leave the services as they are, the REST endpoint wouldn&#39;t exist. So you need to hook them all up on the same URL like that:</p><h3 id="single-wsdl-namespace" tabindex="-1">Single WSDL Namespace <a class="header-anchor" href="#single-wsdl-namespace" aria-hidden="true">#</a></h3><p>If you happen to generate requests from the WSDLs with a tool like SoapUI you may end up with an incorrectly generated request like this:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2003/05/soap-envelope<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name"><span class="token namespace">xmlns:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.servicestack.net/types<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Header</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">type:</span>Hello</span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soap:</span>Body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soap:</span>Envelope</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>You can resolve this issue by adding the following line to your AssemblyInfo file</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token target keyword">assembly</span><span class="token punctuation">:</span> <span class="token class-name">ContractNamespace</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;http://schemas.servicestack.net/types&quot;</span><span class="token punctuation">,</span> 
           ClrNamespace <span class="token operator">=</span> <span class="token string">&quot;&lt;YOUR NAMESPACE&gt;&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token target keyword">assembly</span><span class="token punctuation">:</span> <span class="token class-name">ContractNamespace</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;http://schemas.servicestack.net/types&quot;</span><span class="token punctuation">,</span>
           ClrNamespace <span class="token operator">=</span> <span class="token string">&quot;MyApp.ServiceModel&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token target keyword">assembly</span><span class="token punctuation">:</span> <span class="token class-name">ContractNamespace</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;http://schemas.servicestack.net/types&quot;</span><span class="token punctuation">,</span>
           ClrNamespace <span class="token operator">=</span> <span class="token string">&quot;MyApp.ServiceModel.Types&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><p>Rebuild and regenerate the request from the updated wsdl. You should get a correct request this time.</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2003/05/soap-envelope<span class="token punctuation">&quot;</span></span> 
               <span class="token attr-name"><span class="token namespace">xmlns:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.servicestack.net/types<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Header</span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soap:</span>Body</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">type:</span>Hello</span><span class="token punctuation">&gt;</span></span>
         <span class="token comment">&lt;!--Optional:--&gt;</span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">type:</span>Name</span><span class="token punctuation">&gt;</span></span>?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">type:</span>Name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">type:</span>Hello</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soap:</span>Body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soap:</span>Envelope</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="changing-the-default-namespace" tabindex="-1">Changing the default namespace <a class="header-anchor" href="#changing-the-default-namespace" aria-hidden="true">#</a></h2><p>A requirement with SOAP endpoints is for all DTO types to share the same single namespace which should match the <code>Config.WsdlServiceNamespace</code> if you want to change it from the default namespace: <code>http://schemas.servicestack.net/types</code>. E.g. You can change the default WSDL Namespace in your AppConfig with:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
    WsdlServiceNamespace <span class="token operator">=</span> <span class="token string">&quot;http://my.new.namespace.com/types&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>This can easily be done by using the <code>[assembly:ContractNamespace]</code> attribute usually defined in the DTO project&#39;s AssemblyInfo.cs file, here is how this is done in the <a href="https://github.com/ServiceStack/ServiceStack.Examples/blob/master/src/ServiceStack.Examples/ServiceStack.Examples.ServiceModel/Properties/AssemblyInfo.cs#L39" target="_blank" rel="noopener noreferrer">ServiceStack.Examples project</a>:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token target keyword">assembly</span><span class="token punctuation">:</span> <span class="token class-name">ContractNamespace</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;http://my.new.namespace.com/types&quot;</span><span class="token punctuation">,</span>
           ClrNamespace <span class="token operator">=</span> <span class="token string">&quot;ServiceStack.Examples.ServiceModel.Operations&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token target keyword">assembly</span><span class="token punctuation">:</span> <span class="token class-name">ContractNamespace</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;http://my.new.namespace.com/types&quot;</span><span class="token punctuation">,</span>
           ClrNamespace <span class="token operator">=</span> <span class="token string">&quot;ServiceStack.Examples.ServiceModel.Types&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
</code></pre></div><h3 id="soap-exceptions" tabindex="-1">SOAP Exceptions <a class="header-anchor" href="#soap-exceptions" aria-hidden="true">#</a></h3><p>Exceptions in SOAP responses are returned with an <code>200 OK</code> HTTP Status so they are deserialized as normal responses in code-generated SOAP clients. The original HTTP Status code is available in the <code>X-Status</code> HTTP Header or SOAP Response Header named <code>X-Status</code>. This is transparently converted into a typed <code>WebServiceException</code> when using ServiceStack&#39;s built-in Soap 1.1/1.2 generic Service Clients as seen in <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.IntegrationTests/Tests/WebServicesTests.cs" target="_blank" rel="noopener noreferrer">WebServicesTests</a>.</p><p>To check if the response was an error in non ServiceStack SOAP clients, check the <code>response.ResponseStatus.ErrorCode</code> property for a <strong>non-null</strong> value.</p><h4 id="convert-soap-exceptions-to-soap-faults" tabindex="-1">Convert SOAP Exceptions to SOAP Faults <a class="header-anchor" href="#convert-soap-exceptions-to-soap-faults" aria-hidden="true">#</a></h4><p>If preferred, you can also convert SOAP Exceptions into a SOAP Fault by adding a ServiceExceptionHandler, e.g:</p><div class="language-csharp"><pre><code>ServiceExceptionHandlers<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> request<span class="token punctuation">,</span> ex<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">GetItem</span><span class="token punctuation">(</span>Keywords<span class="token punctuation">.</span>SoapMessage<span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token class-name">System<span class="token punctuation">.</span>ServiceModel<span class="token punctuation">.</span>Channels<span class="token punctuation">.</span>Message</span> requestMsg<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        req<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>UseBufferedStream <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> msgVersion <span class="token operator">=</span> requestMsg<span class="token punctuation">.</span>Version<span class="token punctuation">;</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> response <span class="token operator">=</span> XmlWriter<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>Response<span class="token punctuation">.</span>OutputStream<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> message <span class="token operator">=</span> System<span class="token punctuation">.</span>ServiceModel<span class="token punctuation">.</span>Channels<span class="token punctuation">.</span>Message<span class="token punctuation">.</span><span class="token function">CreateMessage</span><span class="token punctuation">(</span>
                msgVersion<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FaultCode</span><span class="token punctuation">(</span><span class="token string">&quot;Receiver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        req<span class="token punctuation">.</span>Response<span class="token punctuation">.</span><span class="token function">End</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="customize-wsdl-s-and-xsd-s" tabindex="-1">Customize WSDL&#39;s and XSD&#39;s <a class="header-anchor" href="#customize-wsdl-s-and-xsd-s" aria-hidden="true">#</a></h2><p>There&#39;s finer-grain control available over which <strong>Operations</strong> and <strong>Types</strong> are exported in SOAP WSDL&#39;s and XSD&#39;s by overriding the new <code>ExportSoapOperationTypes()</code> and <code>ExportSoapType()</code> methods in your AppHost.</p><p>You can exclude specific Request DTO&#39;s from being emitted in WSDL&#39;s and XSD&#39;s with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Exclude</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Feature<span class="token punctuation">.</span>Soap<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HiddenFromSoap</span> <span class="token punctuation">{</span> <span class="token range operator">..</span> <span class="token punctuation">}</span> 
</code></pre></div><h3 id="raw-access-to-wcf-soap-message" tabindex="-1">Raw Access to WCF SOAP Message <a class="header-anchor" href="#raw-access-to-wcf-soap-message" aria-hidden="true">#</a></h3><p><code>IRequiresSoapMessage</code> works similar to <a href="/serialization-deserialization">IRequiresRequestStream</a> interface to tell ServiceStack to skip de-serialization of the request and instead pass the raw WCF Message to the Service instead for manual processing, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RawWcfMessage</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IRequiresSoapMessage</span></span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token return-type class-name">Message</span> Message <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">object</span></span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token class-name">RawWcfMessage</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
	request<span class="token punctuation">.</span>Message<span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token comment">//Raw WCF SOAP Message</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="customize-soap-response" tabindex="-1">Customize SOAP Response <a class="header-anchor" href="#customize-soap-response" aria-hidden="true">#</a></h3><p>You can override and customize how the SOAP Message Responses are written, here&#39;s a basic example:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token function">WriteSoapMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">,</span> <span class="token class-name">Stream</span> outputStream<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> writer <span class="token operator">=</span> XmlWriter<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>outputStream<span class="token punctuation">,</span> Config<span class="token punctuation">.</span>XmlWriterSettings<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The default <a href="https://github.com/ServiceStack/ServiceStack/blob/fb08f5cb408ece66f203f677a4ec14ee9aad78ae/src/ServiceStack/ServiceStackHost.Runtime.cs#L484" target="_blank" rel="noopener noreferrer">WriteSoapMessage</a> implementation also raises a ServiceException and writes any returned response to a buffered Response Stream (if configured)</p></div>`,61),o=[p];function c(l,u,i,r,k,d){return a(),n("div",null,o)}var h=s(t,[["render",c]]);export{m as __pageData,h as default};
