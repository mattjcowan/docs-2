import{_ as s,c as n,o as a,a as t}from"./app.25a431af.js";const y='{"title":"Design RESTful Services","description":"","frontmatter":{"title":"Design RESTful Services","slug":"design-rest-services"},"headers":[{"level":3,"title":"Use a logical / hierarchical Url structure","slug":"use-a-logical-hierarchical-url-structure"},{"level":3,"title":"Implementing RESTful Routes","slug":"implementing-restful-routes"},{"level":3,"title":"Notes","slug":"notes"},{"level":2,"title":"Physical Project Structure","slug":"physical-project-structure"},{"level":2,"title":"More Info","slug":"more-info"}],"relativePath":"design-rest-services.md","lastUpdated":1644680219607}',e={},p=t(`__VP_STATIC_START__<p>ServiceStack encourages a message-based design so each Service should have its own distinct message (aka Request DTO) where it&#39;s able to use explicit properties to define what each Service accepts. Something to keep in mind is how you define and design your Services in ServiceStack are de-coupled in how you expose them which can be exposed under any custom Route.</p><h3 id="use-a-logical-hierarchical-url-structure" tabindex="-1">Use a logical / hierarchical Url structure <a class="header-anchor" href="#use-a-logical-hierarchical-url-structure" aria-hidden="true">#</a></h3><p>We recommend adopting a logical hierarchically structured URL that represents the identifier of a resource, i.e. the parent path categorizes your resource and gives it meaningful context. So if you needed to design an API for System that maintained <strong>Events</strong> and their <strong>Reviews</strong> it could adopt the following url structure:</p><div class="language-"><pre><code>/events             # all events
/events/1           # event #1
/events/1/reviews   # event #1 reviews
</code></pre></div><p>Where each of the above resource identifiers can be invoked using any HTTP <strong>Verb</strong> which represents the action to take on them, e.g:</p><div class="language-"><pre><code>GET    /events        # View all Events
POST   /events        # Create a new Event
PUT    /events/{Id}   # Update an existing Event
DELETE /events/{Id}   # Delete an existing Event
</code></pre></div><h3 id="implementing-restful-routes" tabindex="-1">Implementing RESTful Routes <a class="header-anchor" href="#implementing-restful-routes" aria-hidden="true">#</a></h3><p>For their implementation ServiceStack encourages a message-based design that groups all related operations based on <strong>Response type</strong> and <strong>Call Context</strong>. For an Events and Reviews system it could look something like:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/category/{Category}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>    <span class="token comment">// Optional GET example </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SearchEvents</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>Event<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token comment">//resultset filter examples, e.g. ?Category=Tech&amp;Query=servicestack</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Category <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> 
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Query <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateEvent</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>Event<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> StartDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/code/{EventCode}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span> <span class="token comment">// Alternative Id</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEvent</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>Event<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> EventCode <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// Alternative to fetch Events</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UpdateEvent</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturnVoid</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> StartDate <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Event Reviews would follow a similar pattern:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{EventId}/reviews&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEventReviews</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>List<span class="token punctuation">&lt;</span>EventReview<span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> EventId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{EventId}/reviews/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEventReview</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>EventReview<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> EventId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{EventId}/reviews&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateEventReview</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>EventReview<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> EventId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Comments <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The above REST Service examples returns naked Types and collections which <a href="/api-design#structured-error-handling">ServiceStack has a great story for</a>, however our personal preference is to design more coarse-grained and versionable <a href="/design-message-based-apis">Message-based APIs</a> where we&#39;d use an explicit Response DTO for each Service, e.g:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{EventId}/reviews&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEventReviews</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetEventReviewsResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> EventId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEventReviewsResponse</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">List<span class="token punctuation">&lt;</span>Event<span class="token punctuation">&gt;</span></span> Results <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{EventId}/reviews/{Id}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEventReview</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>GetEventReviewResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> EventId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetEventReviewResponse</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">EventReview</span> Result <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ResponseStatus</span> ResponseStatus <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>  <span class="token comment">// inject structured errors if any</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Route</span><span class="token attribute-arguments"><span class="token punctuation">(</span><span class="token string">&quot;/events/{EventId}/reviews&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateEventReview</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IReturn<span class="token punctuation">&lt;</span>CreateEventReviewResponse<span class="token punctuation">&gt;</span></span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> EventId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Comments <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CreateEventReviewResponse</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">EventReview</span> Result <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">ResponseStatus</span> ResponseStatus <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-hidden="true">#</a></h3><p>The implementation of each Services then becomes straight-forward based on these messages, which (depending on code-base size) we&#39;d recommend organizing in 2 <strong>EventsService</strong> and <strong>EventReviewsService</strong> classes.</p><p>Although <code>UpdateEvent</code> and <code>CreateEvent</code> are seperate Services here, if the use-case permits they can instead be handled by a single idempotent <code>StoreEvent</code> Service.</p><h2 id="physical-project-structure" tabindex="-1"><a href="/physical-project-structure">Physical Project Structure</a> <a class="header-anchor" href="#physical-project-structure" aria-hidden="true">#</a></h2><p>Ideally the root-level <strong>AppHost</strong> project should be kept lightweight and implementation-free. Although for small projects or prototypes with only a few services it&#39;s ok for everything to be in a single project and to simply grow your architecture when and as needed.</p><p>For medium-to-large projects we recommend the physical structure below which for the purposes of this example we&#39;ll assume our Application is called <strong>Events</strong>.</p><p>The order of the projects also show its dependencies, e.g. the top-level <code>Events</code> project references <strong>all</strong> sub projects whilst the last <code>Events.ServiceModel</code> project references <strong>none</strong>:</p><div class="language-"><pre><code>    /Events
        AppHost.cs              // ServiceStack Web or Self Host Project

    /Events.ServiceInterface    // Service implementations (akin to MVC Controllers)
        EventsService.cs
        EventsReviewsService.cs

    /Events.Logic               // For large projects: extract C# logic, data models, etc
        IGoogleCalendarGateway  // E.g of a external dependency this project could use

    /Events.ServiceModel        // Service Request/Response DTOs and DTO types
        Events.cs               // SearchEvents, CreateEvent, GetEvent DTOs 
        EventReviews.cs         // GetEventReviews, CreateEventReview
        Types/
          Event.cs              // Event type
          EventReview.cs        // EventReview type
</code></pre></div><p>With the <code>Events.ServiceModel</code> DTO&#39;s kept in their own separate implementation and dependency-free dll, you&#39;re freely able to share this dll in any .NET client project as-is - which you can use with any of the generic <a href="/csharp-server-events-client">C# Service Clients</a> to provide an end-to-end typed API without any code-gen.</p><h2 id="more-info" tabindex="-1">More Info <a class="header-anchor" href="#more-info" aria-hidden="true">#</a></h2><ul><li>This recommended project structure is embedded in all <a href="/templates-overview">ServiceStackVS VS.NET Templates</a>.</li><li>The <a href="/why-servicestack#simple-customer-database-rest-services-example">Simple Customer REST Example</a> is a small self-contained, real-world example of creating a simple REST Service utilizing an RDBMS.</li></ul>__VP_STATIC_END__`,24),o=[p];function c(l,u,i,r,k,d){return a(),n("div",null,o)}var g=s(e,[["render",c]]);export{y as __pageData,g as default};
