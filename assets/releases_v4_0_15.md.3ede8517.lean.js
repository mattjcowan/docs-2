import{_ as n,c as a,o as s,a as e}from"./app.25a431af.js";const h='{"title":"v4.0.15 Release Notes","description":"","frontmatter":{"title":"v4.0.15 Release Notes","slug":"v4-0-15"},"headers":[{"level":3,"title":"Individual Products now available","slug":"individual-products-now-available"},{"level":3,"title":"ServiceStack","slug":"servicestack"},{"level":3,"title":"OrmLite","slug":"ormlite"},{"level":3,"title":"Redis","slug":"redis"},{"level":3,"title":"Text","slug":"text"},{"level":3,"title":"New Signed NuGet Packages","slug":"new-signed-nuget-packages"}],"relativePath":"releases/v4_0_15.md","lastUpdated":1644680220403}',t={},o=e(`__VP_STATIC_START__<h3 id="individual-products-now-available" tabindex="-1">Individual Products now available <a class="header-anchor" href="#individual-products-now-available" aria-hidden="true">#</a></h3><p>In this release we&#39;ve added the most requested &quot;non-technical feature&quot; by creating new licenses for <a href="https://servicestack.net/#products" target="_blank" rel="noopener noreferrer">individual ServiceStack products</a> which provide much better value when only using one of ServiceStack&#39;s stand-alone libraries on their own.</p><p>New products available:</p><ul><li><a href="https://servicestack.net/text" target="_blank" rel="noopener noreferrer">servicestack.net/text</a></li><li><a href="https://servicestack.net/redis" target="_blank" rel="noopener noreferrer">servicestack.net/redis</a></li><li><a href="https://servicestack.net/ormlite" target="_blank" rel="noopener noreferrer">servicestack.net/ormlite</a></li></ul><blockquote><p>Both OrmLite and Redis includes an implicit license for ServiceStack.Text</p></blockquote><h3 id="servicestack" tabindex="-1">ServiceStack <a class="header-anchor" href="#servicestack" aria-hidden="true">#</a></h3><ul><li>Upgraded ServiceStack&#39;s external dependencies to use latest version on NuGet</li><li>Modified <a href="http://www.nuget.org/packages/ServiceStack.RabbitMq" target="_blank" rel="noopener noreferrer">ServiceStack.RabbitMq</a> to only depend on <strong>ServiceStack</strong> instead of <strong>ServiceStack.Server</strong></li><li>Added optional <code>fieldName</code> property to ServiceClient <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/IRestClient.cs#L52-L55" target="_blank" rel="noopener noreferrer">PostFileWithRequest</a></li><li>Changed exceptions in FileSystem scanning to be logged as warnings, fixes issues with NTFS symbolic links</li><li>Pass through Thread CurrentCulture when executing a sync request in a new Task</li><li>Added Evaluator.NamespaceAssemblies to specify alternate default namespace for Assemblies</li><li>Changed to use OrdinalIgnoreCase instead of InvariantCultureIgnoreCase when possible</li></ul><h3 id="ormlite" tabindex="-1">OrmLite <a class="header-anchor" href="#ormlite" aria-hidden="true">#</a></h3><h4 id="ormlite-s-core-exec-functions-are-now-overridable-as-a-filter" tabindex="-1">OrmLite&#39;s core Exec functions are now overridable as a Filter <a class="header-anchor" href="#ormlite-s-core-exec-functions-are-now-overridable-as-a-filter" aria-hidden="true">#</a></h4><p>Continuing in efforts to make OrmLite more introspectable and configurable, OrmLite&#39;s core Exec functions <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/commit/fa55404200f4a319eae3a298b648462dadafce5e" target="_blank" rel="noopener noreferrer">have been re-factored out into a substitutable Exec Filter</a>.</p><p>This now makes it possible to inject a custom managed exec function where you can inject your own behavior, tracing, profiling, etc.</p><p>It comes in useful for situations when you want to use SqlServer in production but use an <code>in-memory</code> Sqlite database in tests and you want to emulate any missing SQL Server Stored Procedures in code:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MockStoredProcExecFilter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">OrmLiteExecFilter</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">Exec</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">IDbConnection</span> dbConn<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span>IDbCommand<span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> filter<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>dbConn<span class="token punctuation">,</span> filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>dbConn<span class="token punctuation">.</span><span class="token function">GetLastSql</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;exec sp_name @firstName, @age&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">object</span><span class="token punctuation">)</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Person</span> <span class="token punctuation">{</span> FirstName <span class="token operator">=</span> <span class="token string">&quot;Mocked&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

OrmLiteConfig<span class="token punctuation">.</span>ExecFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">MockStoredProcExecFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> <span class="token function">OpenDbConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> person <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">SqlScalar</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;exec sp_name @firstName, @age&quot;</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token punctuation">{</span> firstName <span class="token operator">=</span> <span class="token string">&quot;aName&quot;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    person<span class="token punctuation">.</span>FirstName<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Mocked</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Or if you want to do things like executing each operation multiple times, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReplayOrmLiteExecFilter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">OrmLiteExecFilter</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> ReplayTimes <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">Exec</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name">IDbConnection</span> dbConn<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span>IDbCommand<span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> filter<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> holdProvider <span class="token operator">=</span> OrmLiteConfig<span class="token punctuation">.</span>DialectProvider<span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> dbCmd <span class="token operator">=</span> <span class="token function">CreateCommand</span><span class="token punctuation">(</span>dbConn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">var</span></span> ret <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token type-expression class-name">T</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ReplayTimes<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                ret <span class="token operator">=</span> <span class="token function">filter</span><span class="token punctuation">(</span>dbCmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span>
        <span class="token punctuation">{</span>
            <span class="token function">DisposeCommand</span><span class="token punctuation">(</span>dbCmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
            OrmLiteConfig<span class="token punctuation">.</span>DialectProvider <span class="token operator">=</span> holdProvider<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

OrmLiteConfig<span class="token punctuation">.</span>ExecFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ReplayOrmLiteExecFilter</span> <span class="token punctuation">{</span> ReplayTimes <span class="token operator">=</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> db <span class="token operator">=</span> <span class="token function">OpenDbConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DropAndCreateTable</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>PocoTable<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">PocoTable</span> <span class="token punctuation">{</span> Name <span class="token operator">=</span> <span class="token string">&quot;Multiplicity&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> rowsInserted <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Count</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>PocoTable<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;Multiplicity&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="other-improvements" tabindex="-1">Other improvements <a class="header-anchor" href="#other-improvements" aria-hidden="true">#</a></h4><ul><li>Added <a href="https://github.com/ServiceStack/ServiceStack.OrmLite/commit/7f0711aa3368087037d8b7b84cf9f70f1ea2b191" target="_blank" rel="noopener noreferrer">SqlVerifyFragment string extension</a> to verify sql fragments where free-text is allowed in SqlExpression APIs</li><li>Change MySql to create TimeSpan&#39;s column as INT to store ticks</li></ul><h3 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h3><ul><li>Add new Increment by double and long methods to Redis Client</li></ul><h3 id="text" tabindex="-1">Text <a class="header-anchor" href="#text" aria-hidden="true">#</a></h3><ul><li>Added <a href="https://github.com/ServiceStack/ServiceStack.Text/commit/9bd0cc35c0a4e3ddcb7e6b6b88e760f45496145b" target="_blank" rel="noopener noreferrer">T.PopulateFromPropertiesWithoutAttribute</a> Auto Mapping method</li></ul><h3 id="new-signed-nuget-packages" tabindex="-1">New Signed NuGet Packages <a class="header-anchor" href="#new-signed-nuget-packages" aria-hidden="true">#</a></h3><ul><li><a href="http://www.nuget.org/packages/ServiceStack.OrmLite.Sqlite.Windows.Signed" target="_blank" rel="noopener noreferrer">ServiceStack.OrmLite.Sqlite.Windows.Signed</a></li></ul>__VP_STATIC_END__`,23),p=[o];function c(l,i,r,u,k,d){return s(),a("div",null,p)}var g=n(t,[["render",c]]);export{h as __pageData,g as default};
