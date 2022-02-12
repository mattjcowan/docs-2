import{_ as e,c as t,o as i,a as r}from"./app.25a431af.js";const g='{"title":"C#/.NET Client for Redis","description":"","frontmatter":{"title":"C#/.NET Client for Redis"},"headers":[{"level":3,"title":"API Overview","slug":"api-overview"}],"relativePath":"redis/index.md","lastUpdated":1644680220399}',a={},s=r(`<p><a href="https://github.com/ServiceStack/ServiceStack.Redis" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s C# Redis Client</a> is a simple, high-performance and feature-rich C# Client for Redis with native support and <a href="./design-nosql.html">high-level abstractions</a> for serializing POCOs and Complex Types.</p><p>There are a number of different APIs available with the <code>RedisClient</code> implementing the following interfaces:</p><ul><li><a href="http://docs.servicestack.net/caching" target="_blank" rel="noopener noreferrer">Caching Provider</a> - If you are using Redis solely as a cache, you should bind to the ServiceStack&#39;s common interface as there already are In-Memory an Memcached implementations available in ServiceStack, allowing you to easily switch providers</li><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Redis/IRedisNativeClient.cs" target="_blank" rel="noopener noreferrer">IRedisNativeClient</a> / <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Redis/IRedisNativeClientAsync.cs" target="_blank" rel="noopener noreferrer">Async</a> - For those wanting a low-level raw byte access (where you can control your own serialization/deserialization) that map 1:1 with Redis operations of the same name.</li></ul><p>For most cases if you require access to Redis specific functionality you would want to bind to the interface below:</p><ul><li><a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Redis/IRedisClient.cs" target="_blank" rel="noopener noreferrer">IRedisClient</a> / <a href="https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Redis/IRedisClientAsync.cs" target="_blank" rel="noopener noreferrer">Async</a> - Provides a friendlier, more descriptive API that lets you store values as strings (UTF8 encoding).</li><li><a href="https://github.com/ServiceStack/ServiceStack/tree/master/src/ServiceStack.Interfaces/Redis/Generic" target="_blank" rel="noopener noreferrer">Redis generic client APIs</a> - created with <code>redis.As&lt;T&gt;()</code> - returns a &#39;strongly-typed client&#39; that provides a typed-interface for all redis value operations that works against any C#/.NET POCO type.</li></ul><p>The interfaces work cleanly with any IOC and allows your app logic to bind to implementation-free interfaces which can easily be mocked and substituted.</p><p>An overview of class hierarchy for the C# Redis clients looks like:</p><div class="language-"><pre><code>RedisTypedClient (POCO) &gt; RedisClient (string) &gt; RedisNativeClient (raw byte[])
</code></pre></div><p>With each client providing different layers of abstraction:</p><ul><li>The RedisNativeClient exposes raw <code>byte[]</code> apis and does no marshalling and passes all values directly to redis.</li><li>The RedisClient assumes <code>string</code> values and simply converts strings to UTF8 bytes before sending to Redis</li><li>The RedisTypedClient provides a generic interface allowing you to add POCO values. POCOs are serialized using <a href="https://github.com/ServiceStack/ServiceStack.Text" target="_blank" rel="noopener noreferrer">ServiceStack.Text</a> which is then converted to UTF8 bytes and sent to Redis.</li></ul><h3 id="api-overview" tabindex="-1">API Overview <a class="header-anchor" href="#api-overview" aria-hidden="true">#</a></h3><p><a href="https://servicestack.net/images/redis-annotated.png" target="_blank" rel="noopener noreferrer"><img src="https://servicestack.net/images/redis-annotated-preview.png" alt="Redis Client API"></a></p>`,12),n=[s];function o(c,l,d,h,p,v){return i(),t("div",null,n)}var S=e(a,[["render",o]]);export{g as __pageData,S as default};
