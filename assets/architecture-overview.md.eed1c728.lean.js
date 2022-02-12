import{_ as r}from"./servicestack-logical-view-02.c9437c74.js";import{_ as a}from"./servicestack-httpclients.06dbe80e.js";import{_ as n}from"./servicestack-overview-01.ed500f58.js";import{_ as s,c as i,o as c,b as e,e as t}from"./app.25a431af.js";var o="/assets/servicestack-mqclients.71aaa491.png";const B='{"title":"Architecture Overview","description":"","frontmatter":{"title":"Architecture Overview"},"headers":[{"level":2,"title":"Server Architecture","slug":"server-architecture"},{"level":2,"title":"Client Architecture","slug":"client-architecture"},{"level":2,"title":"Implementation","slug":"implementation"}],"relativePath":"architecture-overview.md","lastUpdated":1644680219599}',l={},h=e("p",null,[t("Ultimately behind-the-scenes ServiceStack is just built on top of "),e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),t("'s Raw "),e("a",{href:"https://msdn.microsoft.com/en-us/library/ms227433.aspx",target:"_blank",rel:"noopener noreferrer"},"IHttpAsyncHandler"),t(". Existing abstractions and "),e("a",{href:"http://mono.servicestack.net/mvc-powerpack/",target:"_blank",rel:"noopener noreferrer"},"xmlconfig-encumbered legacy ASP.NET providers"),t(" have been abandoned, in favour of fresh, simple and clean "),e("a",{href:"/caching"},"Caching"),t(", "),e("a",{href:"/sessions"},"Session"),t(" and "),e("a",{href:"/authentication-and-authorization"},"Authentication"),t(" providers all based on clean POCOs, supporting multiple back-ends and all working seamlessly together. Our best-practices architecture is purposely kept simple, introduces minimal new concepts or artificial constructs that can all be eloquently captured in the diagram below:")],-1),p=e("h2",{id:"server-architecture",tabindex:"-1"},[t("Server Architecture "),e("a",{class:"header-anchor",href:"#server-architecture","aria-hidden":"true"},"#")],-1),d=e("p",null,[e("img",{src:r,alt:"ServiceStack Logical Architecture View"})],-1),u=e("h2",{id:"client-architecture",tabindex:"-1"},[t("Client Architecture "),e("a",{class:"header-anchor",href:"#client-architecture","aria-hidden":"true"},"#")],-1),m=e("p",null,[t("ServiceStack's "),e("a",{href:"/advantages-of-message-based-web-services"},"Message-based design"),t(" allows us to easily support "),e("a",{href:"/clients-overview"},"typed, generic and re-usable Service Clients"),t(" for all our popular formats:")],-1),v=e("p",null,[e("img",{src:a,alt:"ServiceStack HTTP Client Architecture"})],-1),_=e("p",null,[t("Having all clients share the same interface allow them to be hot-swappable at run-time without code changes and keep them highly testable where the same unit test can also "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/tests/ServiceStack.WebHost.IntegrationTests/Tests/WebServicesTests.cs",target:"_blank",rel:"noopener noreferrer"},"serve as an XML, JSON, JSV, SOAP Integration Test"),t(".")],-1),f=e("p",null,[t("By promoting clean (endpoint-ignorant and dependency-free) Service and DTO classes, your web services are instantly re-usable and can be hosted in non-http contexts as well. E.g. The client architecture when one of the "),e("a",{href:"/redis-mq"},"built-in MQ Host is enabled"),t(":")],-1),b=e("p",null,[e("img",{src:o,alt:"ServiceStack MQ Client Architecture"})],-1),S=e("h2",{id:"implementation",tabindex:"-1"},[t("Implementation "),e("a",{class:"header-anchor",href:"#implementation","aria-hidden":"true"},"#")],-1),g=e("p",null,[t("The entry point for all "),e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),t(" and HttpListener requests is in the "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/HttpHandlerFactory.cs",target:"_blank",rel:"noopener noreferrer"},"ServiceStack.HttpHandlerFactory"),t(" whose purpose is to return the appropriate IHttpHandler for the incoming request.")],-1),k=e("p",null,"There are 2 distinct modes in any ServiceStack application:",-1),w=e("ol",null,[e("li",null,"AppHost Setup and Configuration - Only done once for all services. Run only once on App StartUp."),e("li",null,"Runtime - Run on every request: uses dependencies, plugins, etc. defined in the AppHost. Each new request re-binds all IOC dependencies to a new service instance which gets disposed at the end of each request.")],-1),A=e("p",null,"The implementation of this can be visualized below:",-1),y=e("p",null,[e("img",{src:n,alt:"ServiceStack Overview"})],-1),T=e("p",null,[t("After the "),e("code",null,"IHttpHandler"),t(" is returned, it gets executed with the current "),e("a",{href:"http://ASP.NET",target:"_blank",rel:"noopener noreferrer"},"ASP.NET"),t(" or HttpListener request wrapped in a common "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack.Interfaces/Web/IRequest.cs",target:"_blank",rel:"noopener noreferrer"},"IRequest"),t(" instance.")],-1),H=[h,p,d,u,m,v,_,f,b,S,g,k,w,A,y,T];function x(O,q,E,I,P,N){return c(),i("div",null,H)}var L=s(l,[["render",x]]);export{B as __pageData,L as default};
