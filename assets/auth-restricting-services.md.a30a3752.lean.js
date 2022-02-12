import{_ as s,c as n,o as a,a as t}from"./app.25a431af.js";const h='{"title":"Restricting Services","description":"","frontmatter":{"slug":"restricting-services","title":"Restricting Services"},"headers":[{"level":3,"title":"Named Configurations","slug":"named-configurations"},{"level":3,"title":"Restriction Combinations","slug":"restriction-combinations"},{"level":3,"title":"Multiple restriction scenarios","slug":"multiple-restriction-scenarios"},{"level":3,"title":"Hiding Services from Metadata","slug":"hiding-services-from-metadata"},{"level":3,"title":"Restricting built-in Services","slug":"restricting-built-in-services"}],"relativePath":"auth-restricting-services.md","lastUpdated":1644680219599}',e={},o=t(`__VP_STATIC_START__<p>You can change the Visibility and Access restrictions on any service using the <code>[Restrict]</code> attribute. This is a class based attribute and should be placed on your Service class. Visibility affects whether or not the service shows up on the public <code>/metadata</code> pages, whilst access restrictions limits the accessibility of your services.</p><h3 id="named-configurations" tabindex="-1">Named Configurations <a class="header-anchor" href="#named-configurations" aria-hidden="true">#</a></h3><p>The Restrict attribute includes a number of Named configurations for common use-cases. E.g You can specify a Service should only be available from your local machine with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>LocalhostOnly <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalAdmin</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>Which ensures access to this service is only allowed from localhost clients and the details of this service will only be visible on <code>/metadata</code> pages that are viewed locally.</p><p>This is equivalent to using the underlying granular form of specifying individual <code>RequestAttributes</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>AccessTo <span class="token operator">=</span> RequestAttributes<span class="token punctuation">.</span>Localhost<span class="token punctuation">,</span> VisibilityTo <span class="token operator">=</span> RequestAttributes<span class="token punctuation">.</span>Localhost<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalAdmin</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>There are many more named configurations available. You can use <strong>VisibleInternalOnly</strong> to only have a service listed on internally viewed <code>/metadata</code> pages with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>VisibleInternalOnly <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InternalAdmin</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>Services can be restricted on any EndpointAttribute, e.g. to ensure this service is only called by XML clients, do:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>RequestAttributes<span class="token punctuation">.</span>Xml<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlOnly</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="restriction-combinations" tabindex="-1">Restriction Combinations <a class="header-anchor" href="#restriction-combinations" aria-hidden="true">#</a></h3><p>Likewise you can add any combination of Endpoint Attributes together, E.g. this restricts access to service to Internal JSON clients only:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>RequestAttributes<span class="token punctuation">.</span>InternalNetworkAccess <span class="token operator">|</span> RequestAttributes<span class="token punctuation">.</span>Json<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonInternalOnly</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="multiple-restriction-scenarios" tabindex="-1">Multiple restriction scenarios <a class="header-anchor" href="#multiple-restriction-scenarios" aria-hidden="true">#</a></h3><p>It also supports multiple restriction scenarios, E.g. This service is only accessible by <strong>internal JSON</strong> clients or <strong>External XML</strong> clients:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>
    RequestAttributes<span class="token punctuation">.</span>InternalNetworkAccess <span class="token operator">|</span> RequestAttributes<span class="token punctuation">.</span>Json<span class="token punctuation">,</span>
    RequestAttributes<span class="token punctuation">.</span>External <span class="token operator">|</span> RequestAttributes<span class="token punctuation">.</span>Xml<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonInternalOrXmlExternalOnly</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><p>A popular configuration that takes advantage of this feature would be to only allow HTTP plain-text traffic from Internal Networks and only allow external access via secure HTTPS, which you can enforce with:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Restrict</span><span class="token attribute-arguments"><span class="token punctuation">(</span>RequestAttributes<span class="token punctuation">.</span>InSecure <span class="token operator">|</span> RequestAttributes<span class="token punctuation">.</span>InternalNetworkAccess<span class="token punctuation">,</span>
          RequestAttributes<span class="token punctuation">.</span>Secure   <span class="token operator">|</span> RequestAttributes<span class="token punctuation">.</span>External<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InternalHttpAndExternalHttps</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="hiding-services-from-metadata" tabindex="-1">Hiding Services from Metadata <a class="header-anchor" href="#hiding-services-from-metadata" aria-hidden="true">#</a></h3><p>You can use the <code>[Exclude*]</code> attributes to hide Services from appearing in your public metadata services:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ExcludeMetadata</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InternalService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturnVoid</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Exclude</span><span class="token attribute-arguments"><span class="token punctuation">(</span>Feature<span class="token punctuation">.</span>Metadata <span class="token operator">|</span> Feature<span class="token punctuation">.</span>Soap<span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InternalService</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturnVoid</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="restricting-built-in-services" tabindex="-1">Restricting built-in Services <a class="header-anchor" href="#restricting-built-in-services" aria-hidden="true">#</a></h3><p>In addition to statically annotating classes, you can also add .NET Attributes at runtime to restrict Services you don&#39;t control. So to only allow built-in Services to be visible from <strong>localhost</strong> requests you can add restriction attributes to Request DTO&#39;s in your AppHost with:</p><div class="language-csharp"><pre><code><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">AssignRoles</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddAttributes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RestrictAttribute</span> <span class="token punctuation">{</span> VisibleLocalhostOnly <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">UnAssignRoles</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddAttributes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RestrictAttribute</span> <span class="token punctuation">{</span> VisibleLocalhostOnly <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Or to hide it for all requests you can set the visibility to none:</p><div class="language-csharp"><pre><code><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">AssignRoles</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddAttributes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RestrictAttribute</span> <span class="token punctuation">{</span> VisibilityTo<span class="token operator">=</span>RequestAttributes<span class="token punctuation">.</span>None <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">UnAssignRoles</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">AddAttributes</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">RestrictAttribute</span> <span class="token punctuation">{</span> VisibilityTo<span class="token operator">=</span>RequestAttributes<span class="token punctuation">.</span>None <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Note they&#39;ll still be shown in development mode when <code>Debug=true</code> which is automatically enabled for <strong>Debug</strong> builds, to simulate what it would look like in a release build you can set it to <code>false</code>, e.g:</p><div class="language-csharp"><pre><code><span class="token function">SetConfig</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">HostConfig</span> <span class="token punctuation">{</span>
    DebugMode <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,29),p=[o];function c(i,l,u,r,k,d){return a(),n("div",null,p)}var g=s(e,[["render",c]]);export{h as __pageData,g as default};
