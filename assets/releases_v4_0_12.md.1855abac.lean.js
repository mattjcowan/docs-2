import{_ as e,c as t,o as a,a as n}from"./app.25a431af.js";const m='{"title":"v4.0.12 Release Notes","description":"","frontmatter":{"title":"v4.0.12 Release Notes","slug":"v4-0-12"},"headers":[{"level":2,"title":"New Email Contact Services","slug":"new-email-contact-services"},{"level":3,"title":"Example Projects","slug":"example-projects"},{"level":3,"title":"Added new OrmLiteCacheClient","slug":"added-new-ormlitecacheclient"},{"level":3,"title":"Service Clients","slug":"service-clients"},{"level":3,"title":"Minor features","slug":"minor-features"},{"level":2,"title":"OrmLite","slug":"ormlite"},{"level":2,"title":"Redis","slug":"redis"},{"level":2,"title":"ServiceStack.Text","slug":"servicestack-text"},{"level":2,"title":"Breaking Changes","slug":"breaking-changes"}],"relativePath":"releases/v4_0_12.md","lastUpdated":1644680220403}',s={},i=n(`__VP_STATIC_START__<h2 id="new-email-contact-services" tabindex="-1">New <a href="https://github.com/ServiceStack/EmailContacts/" target="_blank" rel="noopener noreferrer">Email Contact Services</a> <a class="header-anchor" href="#new-email-contact-services" aria-hidden="true">#</a></h2><p>A new ServiceStack guidance is available detailing the recommended setup and physical layout structure of typical medium-sized ServiceStack projects. It includes the complete documentation going through how to create the solution from scratch, and explains all the ServiceStack hidden features it makes use of along the way.</p><p><a href="https://github.com/ServiceStack/EmailContacts/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/release-notes/email-contacts.png" alt="EmailContacts Screenshot"></a></p><p><a href="https://github.com/ServiceStack/EmailContacts/" target="_blank" rel="noopener noreferrer">EmailContacts</a> is a Single Page App built using just ServiceStack, jQuery and Bootstrap that showcases some of ServiceStack&#39;s built-in features, useful in the reducing the effort for developing medium-sized Web Applications.</p><p>The purpose of EmailContacts is to manage contacts (in <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/#download" target="_blank" rel="noopener noreferrer">any RDBMS</a>), provide a form to be able to send them messages and maintain a rolling history of any emails sent. The application also provides an option to have emails instead sent and processed via <a href="/rabbit-mq">Rabbit MQ</a>.</p><h4 id="functional-single-page-app-in-under-130-lines-of-html-and-70-lines-js" tabindex="-1">Functional Single Page App in under 130 Lines of HTML and 70 Lines JS <a class="header-anchor" href="#functional-single-page-app-in-under-130-lines-of-html-and-70-lines-js" aria-hidden="true">#</a></h4><p>The entire EmailContacts UI is maintained in a single <a href="https://github.com/ServiceStack/EmailContacts/blob/master/src/EmailContacts/default.cshtml" target="_blank" rel="noopener noreferrer">default.cshtml</a> requiring just 70 lines of JavaScript to render the dynamic UI, bind server validation errors and provide real-time UX feedback. The Application also follows an API-First development style where the Ajax UI calls only published APIs allowing all services to be immediately available, naturally, via an end-to-end typed API to Mobile and Desktop .NET clients.</p><h3 id="example-projects" tabindex="-1">Example Projects <a class="header-anchor" href="#example-projects" aria-hidden="true">#</a></h3><p>During this release all Example projects, Demos, Starter Templates, etc in the <a href="https://github.com/ServiceStack/ServiceStack.Examples" target="_blank" rel="noopener noreferrer">ServiceStack.Example</a> and <a href="https://github.com/ServiceStack/ServiceStack.UseCases/" target="_blank" rel="noopener noreferrer">ServiceStack.UseCases</a> master repositories were upgraded to ServiceStack v4. A new <a href="https://github.com/ServiceStack/ServiceStack.UseCases/tree/master/Mvc5" target="_blank" rel="noopener noreferrer">ServiceStack + MVC5 project</a> was also added to UseCases, it just follows the instructions at <a href="/mvc-integration">MVC Integration</a> wiki, but starts with an empty MVC5 project.</p><h3 id="added-new-ormlitecacheclient" tabindex="-1">Added new OrmLiteCacheClient <a class="header-anchor" href="#added-new-ormlitecacheclient" aria-hidden="true">#</a></h3><p>A new <code>OrmLiteCacheClient</code> <a href="/caching">Caching Provider</a> was added to the <strong>ServiceStack.Server</strong> NuGet pacakge. This provides a lot of utility by supporting <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/#download" target="_blank" rel="noopener noreferrer">OrmLite&#39;s RDBMS providers</a> allowing utilization of existing RDBMS&#39;s as a distributed cache, potentially saving an infrastructure dependency.</p><p>Registration is simply:</p><div class="language-csharp"><pre><code><span class="token comment">//Register OrmLite Db Factory if not already</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Register</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDbConnectionFactory<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> 
    <span class="token keyword">new</span> <span class="token constructor-invocation class-name">OrmLiteConnectionFactory</span><span class="token punctuation">(</span>connString<span class="token punctuation">,</span> SqlServerDialect<span class="token punctuation">.</span>Provider<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">RegisterAs</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>OrmLiteCacheClient<span class="token punctuation">,</span> ICacheClient<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Create &#39;CacheEntry&#39; RDBMS table if it doesn&#39;t exist already</span>
container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Resolve</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ICacheClient<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InitSchema</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="service-clients" tabindex="-1">Service Clients <a class="header-anchor" href="#service-clients" aria-hidden="true">#</a></h3><ul><li>Added <code>CaptureSynchronizationContext</code> option to get Async Service Clients to execute responses on the same SynchronizationContext as their call-site</li><li>Added <code>UserAgent</code> option, now defaults with the ServiceStack .NET client version</li></ul><h3 id="minor-features" tabindex="-1">Minor features <a class="header-anchor" href="#minor-features" aria-hidden="true">#</a></h3><ul><li>Allow unrestricted access for Redis MQ and Rabbit MQ clients within free-quotas</li><li>SessionIds are no longer created with Url Unfriendly chars <code>+</code>, <code>/</code></li><li>Add typed <code>ToOneWayUrl()</code> and <code>ToReplyUrl()</code> extension method for generating predefined urls</li><li>Add Test showing how to use <code>ExecAllAndWait</code> extension method to <a href="https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.Common.Tests/ActionExecTests.cs" target="_blank" rel="noopener noreferrer">easily run synch operations in parallel</a></li><li>Added configurable BufferSize in StaticFileHandler</li><li>All CacheClients can now store AuthUserSessions when <code>JsConfig.ExcludeTypeInfo=true</code></li><li>Allow RegistrationService to be used for PUT requests to updates User Registration info</li><li>Elmah Logger now takes in a <code>HttpApplication</code> so it can use <code>ErrorSignal.Get(application).Raise(&lt;exception&gt;)</code> allowing modules such as ErrorMail and ErrorPost (ElmahR) to be notified</li></ul><h2 id="ormlite" tabindex="-1">OrmLite <a class="header-anchor" href="#ormlite" aria-hidden="true">#</a></h2><ul><li>Add support for <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/Expression/ExpressionChainingUseCase.cs#L192-L207" target="_blank" rel="noopener noreferrer">cloning SqlExpressions</a></li><li>Add example of <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/AdoNetDataAccessTests.cs" target="_blank" rel="noopener noreferrer">migrating SqlServer TIME column to BigInteger</a></li><li>Add example of <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/TypeWithByteArrayFieldTests.cs#L55-L147" target="_blank" rel="noopener noreferrer">calling Stored Procedures with OrmLite vs ADO.NET</a></li><li>Add support for <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/blob/master/tests/ServiceStack.OrmLite.Tests/TypeDescriptorMetadataTests.cs#L57-L96" target="_blank" rel="noopener noreferrer">MaxText in all DB providers</a> with <code>[StringLength(StringLengthAttribute.MaxText)]</code></li><li>Capture the LastSql Run even for queries with exceptions</li></ul><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h2><ul><li>Use enhanced functionality for when newer versions of redis-server exists <ul><li>i.e. Use more precise EXPIRE operations when server supports it</li></ul></li><li>Add <code>GetServerTime()</code></li></ul><h2 id="servicestack-text" tabindex="-1">ServiceStack.Text <a class="header-anchor" href="#servicestack-text" aria-hidden="true">#</a></h2><ul><li>Moved <code>JsConfig.RegisterForAot()</code> to <code>PclExport.RegisterForAot()</code><ul><li>Fine-grained AOT hints available on <code>IosPclExport</code> static methods in PCL builds</li></ul></li></ul><h2 id="breaking-changes" tabindex="-1">Breaking Changes <a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a></h2><p>The <a href="https://www.nuget.org/packages/ServiceStack.Stripe/" target="_blank" rel="noopener noreferrer">ServiceStack.Stripe</a> NuGet package is now a normal .NET 4.0 release. A new portable NuGet package was created for PCL clients at <a href="https://www.nuget.org/packages/ServiceStack.Stripe.Pcl/" target="_blank" rel="noopener noreferrer">ServiceStack.Stripe.Pcl</a>.</p>__VP_STATIC_END__`,25),r=[i];function o(c,l,p,d,h,u){return a(),t("div",null,r)}var S=e(s,[["render",o]]);export{m as __pageData,S as default};
