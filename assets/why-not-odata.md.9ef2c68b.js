import{_ as e,c as t,o as a,a as i}from"./app.25a431af.js";const m='{"title":"Why not OData?","description":"","frontmatter":{"slug":"why-not-odata","title":"Why not OData?"},"headers":[{"level":3,"title":"OData Example","slug":"odata-example"},{"level":3,"title":"Out of band knowledge in Free-form expressions","slug":"out-of-band-knowledge-in-free-form-expressions"},{"level":3,"title":"Tight Coupling of Internals","slug":"tight-coupling-of-internals"},{"level":3,"title":"The ideal impl-agnostic movie ratings API","slug":"the-ideal-impl-agnostic-movie-ratings-api"},{"level":2,"title":"Goals of Service Design","slug":"goals-of-service-design"},{"level":2,"title":"Unnecessary Complexity","slug":"unnecessary-complexity"},{"level":3,"title":"OData is Big","slug":"odata-is-big"},{"level":3,"title":"Why not Complexity","slug":"why-not-complexity"},{"level":3,"title":"Adding new Features without new Complexity","slug":"adding-new-features-without-new-complexity"},{"level":2,"title":"Introducing AutoQuery","slug":"introducing-autoquery"}],"relativePath":"why-not-odata.md","lastUpdated":1644680220427}',n={},o=i('<p><a href="http://msdn.microsoft.com/en-us/library/ms954638.aspx" target="_blank" rel="noopener noreferrer">Microsoft&#39;s own Services Design guidelines</a> provides a good initial summary on why OData-like services are a Services anti-pattern:</p><ul><li>There is virtually no contract. A service consumer has no idea how to use the service (for example, what are valid Command arguments, encoding expectations, and so on).</li><li>The interface errs on the side of being too liberal in what it will accept.</li><li>The contract does not provide enough information to consumers on how to use the service. If a consumer must read something other than the service&#39;s signature to understand how to use the service, the factoring of the service should be reviewed.</li><li>Consumers are expected to be familiar with the database and table structures prior to consuming the Web service. This results in a tight coupling between service providers and consumers.</li><li>Performance will suffer due to dependencies on late binding and encoding/decoding between boundaries within the same service.</li></ul><p>This is ultimately where many auto querying solutions fall down, they&#39;re typically executed with black-box binary implementations which only understand their opaque query languages normal Services wouldn&#39;t support, are exposed on unnatural routes you wouldn&#39;t use and return unclean verbose wire formats normal Services wouldn&#39;t return. So when it comes to needing to replace their implementation-specific APIs, it&#39;s often not feasible to reverse engineer a new implementation to match its existing Services contract and would need to resort in creating a new incompatible API, breaking existing clients and violating its Systems</p><h3 id="odata-example" tabindex="-1">OData Example <a class="header-anchor" href="#odata-example" aria-hidden="true">#</a></h3><p>We previously used one of <a href="http://stackoverflow.com/a/9579090/85785" target="_blank" rel="noopener noreferrer">Netflix&#39;s OData examples to illustrate this</a> showing how to query for movies with specific ratings, a service available before <a href="http://developer.netflix.com/blog/read/Changes_to_the_Public_API_Program" target="_blank" rel="noopener noreferrer">Netflix retired their OData catalog</a>:</p><blockquote><p><a href="http://odata.netflix.com/Catalog/Titles?$filter=Type%20eq%20&#39;Movie&#39;%20and%20(Rating%20eq%20&#39;G&#39;%20or%20Rating%20eq%20&#39;PG-13&#39;)" target="_blank" rel="noopener noreferrer">http://odata.netflix.com/Catalog/Titles?$filter=Type eq &#39;Movie&#39; and (Rating eq &#39;G&#39; or Rating eq &#39;PG-13&#39;)</a></p></blockquote><p>This service is effectively coupled to a Table/View called <code>Titles</code> and a column called <code>Type</code>. You&#39;re also coupled to the OData binary implementation inhibiting future optimizations or the ability to move to an optimal implementation in future e.g. leveraging a Search Index to serve part or the entire request. Use of special operators illegal in C#/.NET variable names like <code>$filter</code> shows that OData makes a point of exposing an API that wouldn&#39;t be developed naturally, it&#39;s effectively an isolated technology stack processing queries tunneled within its own custom namespace.</p><h3 id="out-of-band-knowledge-in-free-form-expressions" tabindex="-1">Out of band knowledge in Free-form expressions <a class="header-anchor" href="#out-of-band-knowledge-in-free-form-expressions" aria-hidden="true">#</a></h3><p>In order to understand how to consume this service you also have to be familiar with <a href="http://www.odata.org/documentation/odata-version-4-0/" target="_blank" rel="noopener noreferrer">the OData specification</a> which due to its size and complexity ensures OData queries effectively become an opaque text blob invisible to your application that can only be processed by an OData binary that understands the OData spec. This was one of the major disadvantages of SOAP and WS-* specifications which due to its size and complexity forced the use of a SOAP Framework to be able to create services as opposed to simple HTTP API&#39;s which allow any language on any platform with a HTTP Server to be able to create Web Services. A pitfall free-form expressions encourage is having knowledge and opinions baked into client libraries, eventually mandating the use of specific consumer implementations. This is avoided with well-defined API boundaries ensuring that any service, of any complexity, can be called with just a URL and the API&#39;s published message forms.</p><h3 id="tight-coupling-of-internals" tabindex="-1">Tight Coupling of Internals <a class="header-anchor" href="#tight-coupling-of-internals" aria-hidden="true">#</a></h3><p>This service also requires knowledge of the internal structure of Netflix&#39;s DB schema to know what table and columns to query, more importantly once an OData API for your data model is published and has clients binded to it in production, the DB schema effectively becomes frozen since the OData query-space can reference any table and any column that was exposed.</p><h3 id="the-ideal-impl-agnostic-movie-ratings-api" tabindex="-1">The ideal impl-agnostic movie ratings API <a class="header-anchor" href="#the-ideal-impl-agnostic-movie-ratings-api" aria-hidden="true">#</a></h3><p>In contrast, if you were to create the service without using OData it would something like:</p><blockquote><p><a href="http://api.netflix.com/movies?ratings=G,PG-13" target="_blank" rel="noopener noreferrer">http://api.netflix.com/movies?ratings=G,PG-13</a></p></blockquote><p>i.e. just capturing the actual intent of the query, leaves complete freedom in how to best service the request whilst retaining the ability to evolve the underlying implementation without breaking existing clients.</p><h2 id="goals-of-service-design" tabindex="-1">Goals of Service Design <a class="header-anchor" href="#goals-of-service-design" aria-hidden="true">#</a></h2><p>The primary benefits of Services are that they offer the highest level of software re-use, they&#39;re <a href="http://mythz.servicestack.net/#messaging" target="_blank" rel="noopener noreferrer">Real Computers all the way down</a> retaining the ability to represent anything. Especially at this level, encapsulation and its external interactions are paramount which sees the <a href="http://stackoverflow.com/a/15369736/85785" target="_blank" rel="noopener noreferrer">Service Layer as its most important Contract</a>, constantly evolving to support new capabilities whilst serving and outliving its many consumers.</p><p>Extra special attention should be given to Service design with the primary goals of exposing its capabilities behind <a href="http://stackoverflow.com/a/15941229/85785" target="_blank" rel="noopener noreferrer">consistent and self-describing</a>, intent-based <a href="http://pragprog.com/articles/tell-dont-ask" target="_blank" rel="noopener noreferrer">tell-dont-ask</a> APIs - given its importance, it&#39;s not something that should be dictated by an internal implementation.</p><p>A Services ability to encapsulate complexity is what empowers consumers to be able to perform higher-level tasks like provisioning a cluster of AWS servers or being able to send a tweet to millions of followers in seconds with just a simple HTTP request, i.e. being able to re-use existing hardened functionality without the required effort, resources and infrastructure to facilitate the request yourself. To maximize accessibility it&#39;s recommended for Service Interfaces to retain a flat structure, customizable with key value pairs so they&#39;re accessible via the built-in QueryString and FormData support present in all HTTP clients, from HTML Forms to command-line utilities like <a href="http://curl.haxx.se/" target="_blank" rel="noopener noreferrer">curl</a>.</p><h2 id="unnecessary-complexity" tabindex="-1">Unnecessary Complexity <a class="header-anchor" href="#unnecessary-complexity" aria-hidden="true">#</a></h2><p>Another reason we&#39;re opposed to considering technologies like OData is the sheer amount of unnecessary complexity of the implementation itself. Minimizing complexity is at the core essence of ServiceStack, it&#39;s why ServiceStack exists and remains the primary design goal in how features are implemented with the least complexity and cognitive overhead required.</p><h3 id="odata-is-big" tabindex="-1">OData is Big <a class="header-anchor" href="#odata-is-big" aria-hidden="true">#</a></h3><p>By contrast OData is comically large, there&#39;s literally an <a href="http://www.odata.org/" target="_blank" rel="noopener noreferrer">entire Organization</a> created around it, sporting its own <a href="http://www.odata.org/blog/" target="_blank" rel="noopener noreferrer">blog</a>, <a href="http://www.odata.org/join-the-odata-discussion/" target="_blank" rel="noopener noreferrer">mailing list</a>, multiple <a href="http://www.odata.org/documentation/odata-version-4-0/" target="_blank" rel="noopener noreferrer">spec versions</a> and <a href="http://www.odata.org/documentation/odata-version-4-0/" target="_blank" rel="noopener noreferrer">client libraries</a> of which it appears only the Microsoft sponsored client libraries implement the latest v4 of the OData spec, as-is the nature of complicated rolling specs.</p><p>Measuring size by weight shows <code>Microsoft.Data.OData.dll</code> alone weighs in at <strong>1,287kb</strong>, even more than <code>ServiceStack.dll</code>, surprising given <a href="https://servicestack.net/features" target="_blank" rel="noopener noreferrer">ServiceStack does a lot</a>. Include OData&#39;s required <code>Microsoft.Data.Edm.dll</code> and <code>System.Spatial.dll</code> NuGet dependencies and the payload increases another 50%, include integration with WebApi and client OData libraries and it bloats up further again.</p><h3 id="why-not-complexity" tabindex="-1">Why not Complexity <a class="header-anchor" href="#why-not-complexity" aria-hidden="true">#</a></h3><p>Imagine how much knowledge and cognitive overhead would be required to create a simple web app if every feature was over-engineered in this way? Every new feature introduces a complexity cost which is <a href="http://mythz.servicestack.net/#engineering" target="_blank" rel="noopener noreferrer">why it&#39;s critically important</a> to ensure any complexity introduced <a href="https://gist.github.com/cookrn/4015437" target="_blank" rel="noopener noreferrer">remains proportional</a> with the <a href="http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/" target="_blank" rel="noopener noreferrer">needs being solved</a>.</p><p>The needs in this case is <a href="http://www.infoq.com/presentations/Simple-Made-Easy" target="_blank" rel="noopener noreferrer">simplifying</a> the creation and consumption of data-driven services, something which could easily have been implemented as a single feature point, has instead <a href="http://www.tele-task.de/player/embed/5819/0/?iframe" target="_blank" rel="noopener noreferrer">been over-engineered</a> beyond belief and turned into something you can go on a training course and get certifications for!</p><p><a href="http://steve-yegge.blogspot.com/2007/12/codes-worst-enemy.html" target="_blank" rel="noopener noreferrer">Large implementations</a> weakens our ability to reason about a system, to make informed decisions, to understand the impact of customization&#39;s and optimizations or identify the underlying cause of unintended behavior.</p><h3 id="adding-new-features-without-new-complexity" tabindex="-1">Adding new Features without new Complexity <a class="header-anchor" href="#adding-new-features-without-new-complexity" aria-hidden="true">#</a></h3><p>Rather than tacking on new libraries or inventing different ways/concepts/specs/dsl&#39;s for doing new things, features in ServiceStack are applied thoughtfully so they naturally integrate with its <a href="/architecture-overview">existing architecture</a> maximizing re-use and leveraging existing functionality wherever possible, strengthening the existing mental model and ensuring new abstractions or concepts only get added for that of which is truly new.</p><h2 id="introducing-autoquery" tabindex="-1"><a href="/autoquery#introducing-autoquery">Introducing AutoQuery</a> <a class="header-anchor" href="#introducing-autoquery" aria-hidden="true">#</a></h2><p>The solution to overcome most of OData issues is ultimately quite simple: enhance the ideal API the developer would naturally write and complete their implementation for them! This is essentially the philosophy behind AutoQuery which utilizes conventions to automate creation of intent-based self-descriptive APIs that are able to specify configurable conventions and leverage extensibility options to maximize the utility of AutoQuery services.</p>',32),r=[o];function s(l,c,h,d,p,u){return a(),t("div",null,r)}var f=e(n,[["render",s]]);export{m as __pageData,f as default};
