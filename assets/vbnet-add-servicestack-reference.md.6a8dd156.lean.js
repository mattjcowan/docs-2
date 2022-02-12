import{_ as e,c as a,o as s,a as n}from"./app.25a431af.js";const m='{"title":"VB.NET Add ServiceStack Reference","description":"","frontmatter":{"slug":"vbnet-add-servicestack-reference","title":"VB.NET Add ServiceStack Reference"},"headers":[{"level":2,"title":"Add ServiceStack Reference","slug":"add-servicestack-reference"},{"level":2,"title":"Update ServiceStack Reference","slug":"update-servicestack-reference"},{"level":3,"title":"Simple Usage Example","slug":"simple-usage-example"},{"level":2,"title":"DTO Customization Options","slug":"dto-customization-options"},{"level":3,"title":"Change Default Server Configuration","slug":"change-default-server-configuration"},{"level":3,"title":"MakePartial","slug":"makepartial"},{"level":3,"title":"MakeVirtual","slug":"makevirtual"},{"level":3,"title":"MakeDataContractsExtensible","slug":"makedatacontractsextensible"},{"level":3,"title":"AddReturnMarker","slug":"addreturnmarker"},{"level":3,"title":"AddDescriptionAsComments","slug":"adddescriptionascomments"},{"level":3,"title":"AddDataContractAttributes","slug":"adddatacontractattributes"},{"level":3,"title":"AddIndexesToDataMembers","slug":"addindexestodatamembers"},{"level":3,"title":"AddGeneratedCodeAttributes","slug":"addgeneratedcodeattributes"},{"level":3,"title":"AddResponseStatus","slug":"addresponsestatus"},{"level":3,"title":"AddImplicitVersion","slug":"addimplicitversion"},{"level":3,"title":"InitializeCollections","slug":"initializecollections"},{"level":3,"title":"IncludeTypes","slug":"includetypes"},{"level":3,"title":"ExcludeTypes","slug":"excludetypes"},{"level":3,"title":"AddNamespaces","slug":"addnamespaces"},{"level":3,"title":"AddDefaultXmlNamespace","slug":"adddefaultxmlnamespace"}],"relativePath":"vbnet-add-servicestack-reference.md","lastUpdated":1644680220427}',t={},o=n(`__VP_STATIC_START__<p><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/vb-header.png" alt="VB.NET Header"></p><p>ServiceStack&#39;s <strong>Add ServiceStack Reference</strong> feature allows clients to generate Native Types from directly within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> using <a href="/create-your-first-webservice">ServiceStackVS VS.NET Extension</a> - providing a simpler, cleaner and more versatile alternative to WCF&#39;s Add Service Reference feature that&#39;s built into <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a>.</p><p>The article outlines ServiceStack&#39;s support generating <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> DTO&#39;s - providing a flexible alternative than sharing your compiled DTO .NET assembly with clients. Now <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> clients can easily add a reference to a remote ServiceStack instance and update typed DTO&#39;s directly from within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> - reducing the burden and effort required to consume ServiceStack Services whilst benefiting from clients native language strong-typing feedback.</p><h2 id="add-servicestack-reference" tabindex="-1"><a href="/add-servicestack-reference">Add ServiceStack Reference</a> <a class="header-anchor" href="#add-servicestack-reference" aria-hidden="true">#</a></h2><p>The easiest way to Add a ServiceStack reference to your project is to right-click on your project to bring up <a href="/create-your-first-webservice">ServiceStackVS&#39;s</a> <code>Add ServiceStack Reference</code> context-menu item. This opens a dialog where you can add the url of the ServiceStack instance you want to typed DTO&#39;s for, as well as the name of the DTO source file that&#39;s added to your project.</p><p><a href="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/add-service-ref-flow.png" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/img/apps/StackApis/add-service-ref-flow.png" alt="Add ServiceStack Reference"></a></p><p>After clicking OK, the servers DTO&#39;s and <a href="https://www.nuget.org/packages/ServiceStack.Client" target="_blank" rel="noopener noreferrer">ServiceStack.Client</a> NuGet package are added to the project, providing an instant typed API: <img src="https://github.com/ServiceStack/Assets/raw/master/img/apps/StackApis/call-service-vb.png" alt="VB.Net Console client"></p><p>With the <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> code generated on the Server, the role of <a href="/create-your-first-webservice">ServiceStackVS&#39;s</a> <strong>Add ServiceStack Reference</strong> is there just to integrate the remote <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> DTO&#39;s into the clients <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> project. This is just getting the generated DTOs from the server with default options set by the server and adding them locally to your project within Visual Studio.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/servicestackvs/servicestack%20reference/addref-vbnet.gif" alt="Add VB.Net ServiceStack Reference Demo"></p><h2 id="update-servicestack-reference" tabindex="-1">Update ServiceStack Reference <a class="header-anchor" href="#update-servicestack-reference" aria-hidden="true">#</a></h2><p>If your server has been updated and you want to update to client DTOs, simply right-click on the DTO file within <a href="http://VS.NET" target="_blank" rel="noopener noreferrer">VS.NET</a> and select <code>Update ServiceStack Reference</code>.</p><p><img src="https://github.com/ServiceStack/Assets/raw/master/img/servicestackvs/servicestack%20reference/updateref-vbnet.gif" alt="VBNet update demo"></p><h3 id="simple-usage-example" tabindex="-1">Simple Usage Example <a class="header-anchor" href="#simple-usage-example" aria-hidden="true">#</a></h3><p>Async Example:</p><div class="language-vb"><pre><code><span class="token keyword">Dim</span> client <span class="token operator">=</span> <span class="token keyword">New</span> JsonServiceClient<span class="token punctuation">(</span><span class="token string">&quot;https://techstacks.io&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">Dim</span> response <span class="token operator">=</span> Await client<span class="token punctuation">.</span>SendAsync<span class="token punctuation">(</span><span class="token keyword">New</span> AppOverview<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span>PrintDump<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>Sync Example:</p><div class="language-vb"><pre><code><span class="token keyword">Dim</span> client <span class="token operator">=</span> <span class="token keyword">New</span> JsonServiceClient<span class="token punctuation">(</span><span class="token string">&quot;https://techstacks.io&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">Dim</span> response <span class="token operator">=</span> client<span class="token punctuation">.</span>Send<span class="token punctuation">(</span><span class="token keyword">New</span> AppOverview<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span>PrintDump<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="dto-customization-options" tabindex="-1">DTO Customization Options <a class="header-anchor" href="#dto-customization-options" aria-hidden="true">#</a></h2><p>The header comments in the generated DTO&#39;s allows for further customization of how they&#39;re generated where ServiceStackVS automatically watches for any file changes and updates the generated DTO&#39;s with any custom Options provided. Options that are preceded by a <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> Class comment <code>&#39;&#39;&#39;</code> are defaults from the server that can be overridden, e.g:</p><div class="language-vb"><pre><code><span class="token comment">&#39; Options:</span>
<span class="token comment">&#39;Date: 2014-10-21 00:45:05</span>
<span class="token comment">&#39;Version: 1</span>
<span class="token comment">&#39;BaseUrl: http://stackapis.netcore.io</span>
<span class="token comment">&#39;</span>
<span class="token comment">&#39;&#39;&#39;MakePartial: True</span>
<span class="token comment">&#39;&#39;&#39;MakeVirtual: True</span>
<span class="token comment">&#39;&#39;&#39;MakeDataContractsExtensible: False</span>
<span class="token comment">&#39;&#39;&#39;AddReturnMarker: True</span>
<span class="token comment">&#39;&#39;&#39;AddDescriptionAsComments: True</span>
<span class="token comment">&#39;&#39;&#39;AddDataContractAttributes: False</span>
<span class="token comment">&#39;&#39;&#39;AddIndexesToDataMembers: False</span>
<span class="token comment">&#39;&#39;&#39;AddGeneratedCodeAttributes: False</span>
<span class="token comment">&#39;&#39;&#39;AddResponseStatus: False</span>
<span class="token comment">&#39;&#39;&#39;AddImplicitVersion: </span>
<span class="token comment">&#39;&#39;&#39;InitializeCollections: True</span>
<span class="token comment">&#39;&#39;&#39;AddDefaultXmlNamespace: http://schemas.servicestack.net/types</span>
</code></pre></div><p>To override these options on the client, the comment has to be changed to start with a single <code>&#39;</code> instead of triple <code>&#39;&#39;&#39;</code>. This convention is due to <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> not having block quotes. For example, if we did&#39;t want our classes to be partial by default for the <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> client, our options would look like below.</p><div class="language-vb"><pre><code><span class="token comment">&#39; Options:</span>
<span class="token comment">&#39;Date: 2014-10-21 00:45:05</span>
<span class="token comment">&#39;Version: 1</span>
<span class="token comment">&#39;BaseUrl: http://stackapis.netcore.io</span>
<span class="token comment">&#39;</span>
<span class="token comment">&#39;MakePartial: False</span>
<span class="token comment">&#39;&#39;&#39;MakeVirtual: True</span>
<span class="token comment">&#39;&#39;&#39;MakeDataContractsExtensible: False</span>
<span class="token comment">&#39;&#39;&#39;AddReturnMarker: True</span>
<span class="token comment">&#39;&#39;&#39;AddDescriptionAsComments: True</span>
<span class="token comment">&#39;&#39;&#39;AddDataContractAttributes: False</span>
<span class="token comment">&#39;&#39;&#39;AddIndexesToDataMembers: False</span>
<span class="token comment">&#39;&#39;&#39;AddGeneratedCodeAttributes: False</span>
<span class="token comment">&#39;&#39;&#39;AddResponseStatus: False</span>
<span class="token comment">&#39;&#39;&#39;AddImplicitVersion: </span>
<span class="token comment">&#39;&#39;&#39;InitializeCollections: True</span>
<span class="token comment">&#39;&#39;&#39;ExportValueTypes: False</span>
<span class="token comment">&#39;&#39;&#39;IncludeTypes: </span>
<span class="token comment">&#39;&#39;&#39;ExcludeTypes: </span>
<span class="token comment">&#39;&#39;&#39;AddNamespaces: </span>
<span class="token comment">&#39;&#39;&#39;AddDefaultXmlNamespace: http://schemas.servicestack.net/types</span>
</code></pre></div><p>Options that do not start with a <code>&#39;&#39;&#39;</code> are sent to the server to override any defaults set by the server.</p><h3 id="change-default-server-configuration" tabindex="-1">Change Default Server Configuration <a class="header-anchor" href="#change-default-server-configuration" aria-hidden="true">#</a></h3><p>The above defaults are also overridable on the ServiceStack Server by modifying the default config on the <code>NativeTypesFeature</code> Plugin, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">//Server example in CSharp</span>
<span class="token class-name"><span class="token keyword">var</span></span> nativeTypes <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetPlugin</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>NativeTypesFeature<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
nativeTypes<span class="token punctuation">.</span>MetadataTypesConfig<span class="token punctuation">.</span>MakeVirtual <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre></div><p>We&#39;ll go through and cover each of the above options to see how they affect the generated DTO&#39;s:</p><h3 id="makepartial" tabindex="-1">MakePartial <a class="header-anchor" href="#makepartial" aria-hidden="true">#</a></h3><p>Adds the <code>partial</code> modifier to all types, letting you extend generated DTO&#39;s with your own class separate from the generated types:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers
</code></pre></div><h3 id="makevirtual" tabindex="-1">MakeVirtual <a class="header-anchor" href="#makevirtual" aria-hidden="true">#</a></h3><p>Adds the <code>virtual</code> modifier to all properties:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> QuestionId <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><h3 id="makedatacontractsextensible" tabindex="-1">MakeDataContractsExtensible <a class="header-anchor" href="#makedatacontractsextensible" aria-hidden="true">#</a></h3><p>Add .NET&#39;s DataContract&#39;s <a href="http://msdn.microsoft.com/en-us/library/system.runtime.serialization.extensiondataobject(v=vs.110).aspx" target="_blank" rel="noopener noreferrer">ExtensionDataObject</a> to all DTO&#39;s:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> Hello
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">Implements</span> IExtensibleDataObject
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> ExtensionData <span class="token keyword">As</span> ExtensionDataObject <span class="token keyword">Implements</span> IExtensibleDataObject<span class="token punctuation">.</span>ExtensionData
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><h3 id="addreturnmarker" tabindex="-1">AddReturnMarker <a class="header-anchor" href="#addreturnmarker" aria-hidden="true">#</a></h3><p>AddReturnMarker annotates Request DTO&#39;s with an <code>IReturn(Of T)</code> marker referencing the Response type ServiceStack infers your Service to return:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers
    <span class="token keyword">Implements</span> IReturn<span class="token punctuation">(</span><span class="token keyword">Of</span> GetAnswersResponse<span class="token punctuation">)</span>
</code></pre></div><blockquote><p>Original DTO doesn&#39;t require a return marker as response type can be inferred from Services return type or when using the <code>%Response</code> DTO Naming convention</p></blockquote><h3 id="adddescriptionascomments" tabindex="-1">AddDescriptionAsComments <a class="header-anchor" href="#adddescriptionascomments" aria-hidden="true">#</a></h3><p>Converts any textual Description in <code>&lt;Description&gt;</code> attributes as <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> class Doc comments which allows your API to add intellisense in client projects:</p><div class="language-vb"><pre><code><span class="token comment">&#39;&#39;&#39;&lt;Summary&gt;</span>
<span class="token comment">&#39;&#39;&#39;Get a list of Answers for a Question</span>
<span class="token comment">&#39;&#39;&#39;&lt;/Summary&gt;</span>
<span class="token keyword">Public</span> <span class="token keyword">Class</span> GetAnswers
</code></pre></div><h3 id="adddatacontractattributes" tabindex="-1">AddDataContractAttributes <a class="header-anchor" href="#adddatacontractattributes" aria-hidden="true">#</a></h3><p>Decorates all DTO types with <code>&lt;DataContract&gt;</code> and properties with <code>&lt;DataMember&gt;</code> as well as adding default XML namespaces for all <a href="http://VB.Net" target="_blank" rel="noopener noreferrer">VB.Net</a> namespaces used:</p><div class="language-vb"><pre><code><span class="token operator">&lt;</span>Assembly<span class="token punctuation">:</span> ContractNamespace<span class="token punctuation">(</span><span class="token string">&quot;http://schemas.servicestack.net/types&quot;</span><span class="token punctuation">,</span> ClrNamespace<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;StackApis.ServiceModel.Types&quot;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Assembly<span class="token punctuation">:</span> ContractNamespace<span class="token punctuation">(</span><span class="token string">&quot;http://schemas.servicestack.net/types&quot;</span><span class="token punctuation">,</span> ClrNamespace<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;StackApis.ServiceModel&quot;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&lt;</span>DataContract<span class="token operator">&gt;</span>
<span class="token keyword">Partial</span> <span class="token keyword">Public</span> <span class="token keyword">Class</span> GetAnswers
    <span class="token keyword">Implements</span> IReturn<span class="token punctuation">(</span><span class="token keyword">Of</span> GetAnswersResponse<span class="token punctuation">)</span>
    <span class="token operator">&lt;</span>DataMember<span class="token operator">&gt;</span>
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> QuestionId <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><h3 id="addindexestodatamembers" tabindex="-1">AddIndexesToDataMembers <a class="header-anchor" href="#addindexestodatamembers" aria-hidden="true">#</a></h3><p>Populates a DataMember Order index for all properties:</p><div class="language-vb"><pre><code><span class="token operator">&lt;</span>DataContract<span class="token operator">&gt;</span>
<span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token operator">&lt;</span>DataMember<span class="token punctuation">(</span>Order<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> QuestionId <span class="token keyword">As</span> <span class="token keyword">Integer</span>
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><blockquote><p>Requires <strong>AddDataContractAttributes=true</strong></p></blockquote><h3 id="addgeneratedcodeattributes" tabindex="-1">AddGeneratedCodeAttributes <a class="header-anchor" href="#addgeneratedcodeattributes" aria-hidden="true">#</a></h3><p>Emit <code>&lt;GeneratedCode&gt;</code> attribute on all generated Types:</p><div class="language-vb"><pre><code><span class="token operator">&lt;</span>GeneratedCode<span class="token operator">&gt;</span>
<span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre></div><h3 id="addresponsestatus" tabindex="-1">AddResponseStatus <a class="header-anchor" href="#addresponsestatus" aria-hidden="true">#</a></h3><p>Automatically add a <code>ResponseStatus</code> property on all Response DTO&#39;s, regardless if it wasn&#39;t already defined:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> ResponseStatus <span class="token keyword">As</span> ResponseStatus
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><h3 id="addimplicitversion" tabindex="-1">AddImplicitVersion <a class="header-anchor" href="#addimplicitversion" aria-hidden="true">#</a></h3><p>Lets you specify the Version number to be automatically populated in all Request DTO&#39;s sent from the client:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetAnswers
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> Version <span class="token keyword">As</span> <span class="token keyword">Integer</span>
    <span class="token keyword">Public</span> <span class="token keyword">Sub</span> <span class="token keyword">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                Version <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">End</span> <span class="token keyword">Sub</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">End</span> <span class="token keyword">Class</span>
</code></pre></div><p>This lets you know what Version of the Service Contract that existing clients are using making it easy to implement ServiceStack&#39;s <a href="http://stackoverflow.com/a/12413091/85785" target="_blank" rel="noopener noreferrer">recommended versioning strategy</a>.</p><h3 id="initializecollections" tabindex="-1">InitializeCollections <a class="header-anchor" href="#initializecollections" aria-hidden="true">#</a></h3><p>Lets you automatically initialize collections in Request DTO&#39;s:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> SearchQuestions
    <span class="token keyword">Public</span> <span class="token keyword">Sub</span> <span class="token keyword">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        Tags <span class="token operator">=</span> <span class="token keyword">New</span> List<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">)</span>
    <span class="token keyword">End</span> <span class="token keyword">Sub</span>
    <span class="token keyword">Public</span> <span class="token keyword">Overridable</span> <span class="token keyword">Property</span> Tags <span class="token keyword">As</span> List<span class="token punctuation">(</span><span class="token keyword">Of</span> <span class="token keyword">String</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="includetypes" tabindex="-1">IncludeTypes <a class="header-anchor" href="#includetypes" aria-hidden="true">#</a></h3><p>Is used as a Whitelist that can be used to specify only the types you would like to have code-generated:</p><div class="language-"><pre><code>/* Options:
IncludeTypes: GetTechnology,GetTechnologyResponse
</code></pre></div><p>Will only generate <code>GetTechnology</code> and <code>GetTechnologyResponse</code> DTO&#39;s, e.g:</p><div class="language-vb"><pre><code><span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetTechnology <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">Public</span> <span class="token keyword">Partial</span> <span class="token keyword">Class</span> GetTechnologyResponse <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre></div><h4 id="include-request-dto-and-its-dependent-types" tabindex="-1">Include Request DTO and its dependent types <a class="header-anchor" href="#include-request-dto-and-its-dependent-types" aria-hidden="true">#</a></h4><p>You can include a Request DTO and all its dependent types with a <code>.*</code> suffix on the Request DTO, e.g:</p><div class="language-"><pre><code>/* Options:
IncludeTypes: GetTechnology.*
</code></pre></div><p>Which will include the <code>GetTechnology</code> Request DTO, the <code>GetTechnologyResponse</code> Response DTO and all Types that they both reference.</p><h4 id="include-all-types-within-a-c-namespace" tabindex="-1">Include All Types within a C# namespace <a class="header-anchor" href="#include-all-types-within-a-c-namespace" aria-hidden="true">#</a></h4><p>If your DTOs are grouped into different namespaces they can be all included using the <code>/*</code> suffix, e.g:</p><div class="language-"><pre><code>/* Options:
IncludeTypes: MyApp.ServiceModel.Admin/*
</code></pre></div><p>This will include all DTOs within the <code>MyApp.ServiceModel.Admin</code> C# namespace.</p><h3 id="excludetypes" tabindex="-1">ExcludeTypes <a class="header-anchor" href="#excludetypes" aria-hidden="true">#</a></h3><p>Is used as a Blacklist where you can specify which types you would like to exclude from being generated:</p><div class="language-"><pre><code>/* Options:
ExcludeTypes: GetTechnology,GetTechnologyResponse
</code></pre></div><p>Will exclude <code>GetTechnology</code> and <code>GetTechnologyResponse</code> DTO&#39;s from being generated.</p><h3 id="addnamespaces" tabindex="-1">AddNamespaces <a class="header-anchor" href="#addnamespaces" aria-hidden="true">#</a></h3><p>Include additional <a href="http://VB.NET" target="_blank" rel="noopener noreferrer">VB.NET</a> namespaces, e.g:</p><div class="language-"><pre><code>&#39; Options:
&#39;AddNamespaces: System.Drawing,MyApp
</code></pre></div><p>Where it will generate the specified namespaces in the generated Types:</p><div class="language-csharp"><pre><code>Imports System<span class="token punctuation">.</span>Drawing
Imports MyApp
</code></pre></div><h3 id="adddefaultxmlnamespace" tabindex="-1">AddDefaultXmlNamespace <a class="header-anchor" href="#adddefaultxmlnamespace" aria-hidden="true">#</a></h3><p>This lets you change the default DataContract XML namespace used for all namespaces:</p><div class="language-csharp"><pre><code><span class="token operator">&lt;</span>Assembly<span class="token punctuation">:</span> <span class="token function">ContractNamespace</span><span class="token punctuation">(</span><span class="token string">&quot;http://my.types.net&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">ClrNamespace</span><span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;StackApis.ServiceModel.Types&quot;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Assembly<span class="token punctuation">:</span> <span class="token function">ContractNamespace</span><span class="token punctuation">(</span><span class="token string">&quot;http://my.types.net&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">ClrNamespace</span><span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">&quot;StackApis.ServiceModel&quot;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span>
</code></pre></div><blockquote><p>Requires AddDataContractAttributes=true</p></blockquote>__VP_STATIC_END__`,89),p=[o];function r(c,l,i,d,u,k){return s(),a("div",null,p)}var g=e(t,[["render",r]]);export{m as __pageData,g as default};
