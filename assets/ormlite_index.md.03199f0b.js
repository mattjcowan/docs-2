import{_ as e,c as t,o as r,a}from"./app.25a431af.js";const u='{"title":"Fast, Simple, Typed ORM for .NET","description":"","frontmatter":{"title":"Fast, Simple, Typed ORM for .NET"},"headers":[{"level":2,"title":"Community Resources","slug":"community-resources"},{"level":2,"title":"Other notable Micro ORMs for .NET","slug":"other-notable-micro-orms-for-net"}],"relativePath":"ormlite/index.md","lastUpdated":1644680220379}',o={},n=a('<p>OrmLite&#39;s goal is to provide a convenient, DRY, config-free, RDBMS-agnostic typed wrapper that retains a high affinity with SQL, exposing intuitive APIs that generate predictable SQL and maps cleanly to disconnected and Data Transfer Object (DTO) friendly, Plain Old C# Objects (POCOs). This approach makes easier to reason-about your data access making it obvious what SQL is getting executed at what time, whilst mitigating unexpected behavior, implicit N+1 queries and leaky data access prevalent in Heavy Object Relational Mappers (ORMs).</p><p>OrmLite was designed with a focus on the core objectives:</p><ul><li>Provide a set of light-weight C# extension methods around .NET&#39;s impl-agnostic <code>System.Data.*</code> interfaces</li><li>Map a POCO class 1:1 to an RDBMS table, cleanly by conventions, without any attributes required.</li><li>Create/Drop DB Table schemas using nothing but POCO class definitions</li><li>Simplicity - typed, wrist friendly API for common data access patterns.</li><li>High performance - with support for indexes, text blobs, etc. <ul><li>Amongst the <a href="https://servicestackv3.github.io/Mono/src/Mono/benchmarks/default.htm" target="_blank" rel="noopener noreferrer">fastest Micro ORMs</a> for .NET.</li></ul></li><li>Expressive power and flexibility - with access to <code>IDbCommand</code> and raw SQL</li><li>Cross-platform - supports multiple dbs (currently: Sql Server, Sqlite, MySql, PostgreSQL, Firebird) running on both .NET Framework and .NET Core platforms.</li></ul><p>In OrmLite: <strong>1 Class = 1 Table</strong>. There should be no surprising or hidden behaviour, the Typed API that produces the Query <a href="http://stackoverflow.com/a/37443162/85785" target="_blank" rel="noopener noreferrer">doesn&#39;t impact how results get intuitively mapped</a> to the returned POCO&#39;s which could be different to the POCO used to create the query, e.g. containing only a subset of the fields you want populated.</p><p>Any non-scalar properties (i.e. complex types) are text blobbed by default in a schema-less text field using any of the <a href="./introspection#pluggable-complex-type-serializers">available pluggable text serializers</a>. Support for <a href="./reference-support">POCO-friendly references</a> is also available to provide a convenient API to persist related models. Effectively this allows you to create a table from any POCO type, and it should persist as expected in a DB Table with columns for each of the classes 1st level public properties.</p><h2 id="community-resources" tabindex="-1">Community Resources <a class="header-anchor" href="#community-resources" aria-hidden="true">#</a></h2><ul><li><a href="http://www.abtosoftware.com/blog/servicestack-ormlite-and-redis-new-alternatives-for-handling-db-communication" target="_blank" rel="noopener noreferrer">OrmLite and Redis: New alternatives for handling db communication</a> by <a href="https://twitter.com/abtosoftware" target="_blank" rel="noopener noreferrer">@abtosoftware</a></li><li><a href="http://www.unpluggeddevelopment.com/post/85225892120/object-serialization-as-step-towards-normalization" target="_blank" rel="noopener noreferrer">Object Serialization as Step Towards Normalization</a> by <a href="https://twitter.com/82unpluggd" target="_blank" rel="noopener noreferrer">@ 82unpluggd</a></li><li><a href="http://jokecamp.wordpress.com/2013/09/07/code-generation-using-servicestack-ormlite-and-t4-text-templates/" target="_blank" rel="noopener noreferrer">Code Generation using ServiceStack.OrmLite and T4 Text templates</a> by <a href="https://twitter.com/jokecamp" target="_blank" rel="noopener noreferrer">@jokecamp</a></li><li><a href="http://www.curlette.com/?p=1068" target="_blank" rel="noopener noreferrer">Simple ServiceStack OrmLite Example</a> by <a href="https://twitter.com/robrtc" target="_blank" rel="noopener noreferrer">@robrtc</a></li><li><a href="http://www.philliphaydon.com/2012/03/19/ormlite-blobbing-done-with-nhibernate-and-serialized-json/" target="_blank" rel="noopener noreferrer">OrmLite Blobbing done with NHibernate and Serialized JSON</a> by <a href="https://twitter.com/philliphaydon" target="_blank" rel="noopener noreferrer">@philliphaydon</a></li><li><a href="http://www.eggheadcafe.com/tutorials/asp-net/285cbe96-9922-406a-b193-3a0b40e31c40/creating-an-aspnet-mvc-blog-with-servicestackormlite.aspx" target="_blank" rel="noopener noreferrer">Creating An ASP.NET MVC Blog With ServiceStack.OrmLite</a> by <a href="https://twitter.com/peterbromberg" target="_blank" rel="noopener noreferrer">@peterbromberg</a></li></ul><p>If you know of an article/blog post about ServiceStack.OrmLite that is missing, let us know over on the ServiceStack GitHub Discussions, and we will be sure to include it here.</p><div class="my-8 pb-8 flex justify-center"><a href="https://github.com/ServiceStack/Discuss/discussions/categories/show-and-tell" class="hover:text-black inline-flex items-center px-6 py-3 border border-gray-300 shadow text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:no-underline"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"></path></g></svg><span class="mx-2">ServiceStack/Discuss</span></a></div><h2 id="other-notable-micro-orms-for-net" tabindex="-1">Other notable Micro ORMs for .NET <a class="header-anchor" href="#other-notable-micro-orms-for-net" aria-hidden="true">#</a></h2><p>Many performance problems can be mitigated and a lot of use-cases can be simplified without the use of a heavyweight ORM, and their config, mappings and infrastructure. We can recommend the following list, each with their own unique special blend of features.</p><ul><li><strong><a href="http://code.google.com/p/dapper-dot-net/" target="_blank" rel="noopener noreferrer">Dapper</a></strong> - by <a href="http://twitter.com/samsaffron" target="_blank" rel="noopener noreferrer">@samsaffron</a> and <a href="http://twitter.com/marcgravell" target="_blank" rel="noopener noreferrer">@marcgravell</a><ul><li>Current performance king, supports both POCO and dynamic access, fits in a single class. Used to solve <a href="http://samsaffron.com/archive/2011/03/30/How+I+learned+to+stop+worrying+and+write+my+own+ORM" target="_blank" rel="noopener noreferrer">StackOverflow&#39;s Perf issues</a></li></ul></li><li><strong><a href="http://www.toptensoftware.com/petapoco/" target="_blank" rel="noopener noreferrer">PetaPoco</a></strong> - by <a href="http://twitter.com/toptensoftware" target="_blank" rel="noopener noreferrer">@toptensoftware</a><ul><li>Fast, supports dynamics, expandos and typed POCOs, fits in a single class. Includes optional T4 templates for POCO table generation</li></ul></li><li><strong><a href="https://github.com/robconery/massive" target="_blank" rel="noopener noreferrer">Massive</a></strong> - by <a href="http://twitter.com/robconery" target="_blank" rel="noopener noreferrer">@robconery</a><ul><li>Fast, supports dynamics and expandos, smart use of optional params for a wrist-friendly api, fits in a single class. Multi RDBMS</li></ul></li><li><strong><a href="https://github.com/markrendle/Simple.Data" target="_blank" rel="noopener noreferrer">Simple.Data</a></strong> - by <a href="http://twitter.com/markrendle" target="_blank" rel="noopener noreferrer">@markrendle</a><ul><li>A little slower than above ORMS, most wrist-friendly courtesy of a dynamic API, multiple RDBMS support inc. Mongo DB</li></ul></li></ul>',12),i=[n];function s(l,c,p,d,h,f){return r(),t("div",null,i)}var b=e(o,[["render",s]]);export{u as __pageData,b as default};
