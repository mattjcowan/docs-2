import{_ as n}from"./startup-errors.1f567b17.js";import{_ as s,c as a,o,b as e,e as t}from"./app.25a431af.js";const Ue='{"title":"Debugging","description":"","frontmatter":{"slug":"debugging","title":"Debugging"},"headers":[{"level":2,"title":"SourceLink Enabled Packages","slug":"sourcelink-enabled-packages"},{"level":3,"title":"All ServiceStack GitHub projects use CI NuGet feed","slug":"all-servicestack-github-projects-use-ci-nuget-feed"},{"level":3,"title":"Linking to Source projects","slug":"linking-to-source-projects"},{"level":3,"title":"Alternatives Debugging Solutions","slug":"alternatives-debugging-solutions"},{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"DebugMode","slug":"debugmode"},{"level":3,"title":"StrictMode","slug":"strictmode"},{"level":3,"title":"Admin Role","slug":"admin-role"},{"level":3,"title":"AuthSecret","slug":"authsecret"},{"level":2,"title":"Debug Links","slug":"debug-links"},{"level":2,"title":"Startup Errors","slug":"startup-errors"},{"level":2,"title":"Debug Inspector","slug":"debug-inspector"},{"level":2,"title":"Lisp TCP Repl Server","slug":"lisp-tcp-repl-server"},{"level":3,"title":"Request Info","slug":"request-info"},{"level":2,"title":"Plugins","slug":"plugins"},{"level":3,"title":"Request Logger","slug":"request-logger"}],"relativePath":"debugging.md","lastUpdated":1644680219603}',r={},i=e("h2",{id:"sourcelink-enabled-packages",tabindex:"-1"},[t("SourceLink Enabled Packages "),e("a",{class:"header-anchor",href:"#sourcelink-enabled-packages","aria-hidden":"true"},"#")],-1),c=e("p",null,[t("To maximize the debuggability of ServiceStack packages all ServiceStack projects utilize "),e("strong",null,"MSBuild generated NuGet packages"),t(" where all packages are embed "),e("strong",null,"pdb symbols"),t(" and are configured with "),e("a",{href:"https://github.com/dotnet/sourcelink/",target:"_blank",rel:"noopener noreferrer"},"support for SourceLink"),t(" to improve the debugging experience of ServiceStack Apps as source files can be downloaded on-the-fly from GitHub as you debug.")],-1),l=e("p",null,[t("Scott Hanselman has written a "),e("a",{href:"https://www.hanselman.com/blog/ExploringNETCoresSourceLinkSteppingIntoTheSourceCodeOfNuGetPackagesYouDontOwn.aspx",target:"_blank",rel:"noopener noreferrer"},"nice post on Source Link"),t(" and how it can be enabled inside "),e("a",{href:"http://VS.NET",target:"_blank",rel:"noopener noreferrer"},"VS.NET"),t(" by turning on "),e("strong",null,"Enable source link support"),t(":")],-1),u=e("p",null,[e("a",{href:"https://www.hanselman.com/blog/ExploringNETCoresSourceLinkSteppingIntoTheSourceCodeOfNuGetPackagesYouDontOwn.aspx",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:"https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/7e5fb7b6dad8_140AA/image_0c73cb8d-bd5a-406e-a51d-a2eb4af12117.png",alt:""})])],-1),p=e("p",null,"When enabled it should let you debug into the ServiceStack framework implementation, downloading the correct source files version from GitHub as and when needed.",-1),d=e("h3",{id:"all-servicestack-github-projects-use-ci-nuget-feed",tabindex:"-1"},[t("All ServiceStack GitHub projects use CI NuGet feed "),e("a",{class:"header-anchor",href:"#all-servicestack-github-projects-use-ci-nuget-feed","aria-hidden":"true"},"#")],-1),h=e("p",null,[t("In addition to using MSBuild generated packages all projects also utilize CI NuGet package feeds for external dependencies instead of copying .dll's in "),e("code",null,"/lib"),t(" folders. As a consequence you'll no longer have to build external ServiceStack GitHub projects or use GitHub published releases, as now the "),e("strong",null,"master"),t(" repo of all GitHub projects can be built from a clean checkout at anytime.")],-1),g=e("p",null,[t("The pre-release packages are still published using the "),e("strong",null,"same version number"),t(" so if you get a build error from having a cached stale package you'll need to "),e("a",{href:"/myget#redownloading-myget-packages"},"clear your local packages cache"),t(" to download the latest build packages from the CI NuGet packages feed.")],-1),k=e("h3",{id:"linking-to-source-projects",tabindex:"-1"},[t("Linking to Source projects "),e("a",{class:"header-anchor",href:"#linking-to-source-projects","aria-hidden":"true"},"#")],-1),b=e("p",null,"In order to get the best source-based development experience using the latest version of ServiceStack in your Projects, clone the ServiceStack Repos you want to use:",-1),f=e("ul",null,[e("li",null,[e("a",{href:"https://github.com/ServiceStack/ServiceStack",target:"_blank",rel:"noopener noreferrer"},"ServiceStack/ServiceStack")]),e("li",null,[e("a",{href:"https://github.com/ServiceStack/ServiceStack.Text",target:"_blank",rel:"noopener noreferrer"},"ServiceStack/ServiceStack.Text")]),e("li",null,[e("a",{href:"https://github.com/ServiceStack/ServiceStack.Text",target:"_blank",rel:"noopener noreferrer"},"ServiceStack/ServiceStack.Redis")]),e("li",null,[e("a",{href:"https://github.com/ServiceStack/ServiceStack.OrmLite",target:"_blank",rel:"noopener noreferrer"},"ServiceStack/ServiceStack.OrmLite")]),e("li",null,[e("a",{href:"https://github.com/ServiceStack/ServiceStack.Aws",target:"_blank",rel:"noopener noreferrer"},"ServiceStack/ServiceStack.Aws")]),e("li",null,[e("a",{href:"https://github.com/ServiceStack/ServiceStack.Azure",target:"_blank",rel:"noopener noreferrer"},"ServiceStack/ServiceStack.Azure")])],-1),_=e("p",null,[t("Then reference the "),e("code",null,"*.Source.csproj"),t(" of each project you want to reference in your solution.")],-1),S=e("p",null,[t("This approach is used in our "),e("a",{href:"https://github.com/NetCoreApps/Test/blob/master/src/Test/Test.csproj",target:"_blank",rel:"noopener noreferrer"},"Test.csproj"),t(" allowing us to debug directly into ServiceStack library source code just like any other project reference in our solution.")],-1),v=e("h3",{id:"alternatives-debugging-solutions",tabindex:"-1"},[t("Alternatives Debugging Solutions "),e("a",{class:"header-anchor",href:"#alternatives-debugging-solutions","aria-hidden":"true"},"#")],-1),m=e("p",null,[e("a",{href:"https://oren.codes/2015/09/23/enabling-source-code-debugging-for-your-nuget-packages-with-gitlink/",target:"_blank",rel:"noopener noreferrer"},"GitLink"),t(" is another solution for debugging source code in NuGet packages.")],-1),w=e("p",null,[t("Otherwise the most reliable solution for debugging ServiceStack source code is to "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/releases",target:"_blank",rel:"noopener noreferrer"},"download the source code for the release"),t(" on Github you want to debug, build the "),e("a",{href:"http://VS.NET",target:"_blank",rel:"noopener noreferrer"},"VS.NET"),t(" Solution locally using "),e("strong",null,"Debug"),t(" configuration then change your ServiceStack references to use your local "),e("strong",null,".dll"),t(".")],-1),y=e("h2",{id:"configuration",tabindex:"-1"},[t("Configuration "),e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#")],-1),A=e("h3",{id:"debugmode",tabindex:"-1"},[t("DebugMode "),e("a",{class:"header-anchor",href:"#debugmode","aria-hidden":"true"},"#")],-1),T=e("p",null,[t("ServiceStack allows additional debug information when in "),e("strong",null,"DebugMode"),t(", which is automatically set by default in "),e("strong",null,"Debug"),t(" builds or explicitly with:")],-1),x=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"SetConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"HostConfig"),t(),e("span",{class:"token punctuation"},"{"),t(" DebugMode "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token boolean"},"true"),t(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),q=e("p",null,[t("In addition, users with the "),e("strong",null,"Admin"),t(" role or Requests with an "),e("strong",null,"AuthSecret"),t(" can also view Debug Info in production.")],-1),D=e("h3",{id:"strictmode",tabindex:"-1"},[t("StrictMode "),e("a",{class:"header-anchor",href:"#strictmode","aria-hidden":"true"},"#")],-1),L=e("p",null,"You can configure Strict Mode in ServiceStack to enforce stricter behavior and have it throw Exceptions when it sees certain failure conditions. To enable Strict Mode across all libraries use:",-1),P=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Env"),e("span",{class:"token punctuation"},"."),t("StrictMode "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),H=e("p",null,"Otherwise to just enable StrictMode for ServiceStack:",-1),C=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"SetConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"HostConfig"),t(),e("span",{class:"token punctuation"},"{"),t(`
    StrictMode `),e("span",{class:"token operator"},"="),t(),e("span",{class:"token boolean"},"true"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),R=e("p",null,"When enabled ServiceStack will perform runtime checks to catch invalid state, currently:",-1),E=e("ul",null,[e("li",null,"Checks if Services return Value Types"),e("li",null,"Checks if UserSession has circular dependencies"),e("li",null,"Fails fast for exceptions on Startup")],-1),I=e("h3",{id:"admin-role",tabindex:"-1"},[t("Admin Role "),e("a",{class:"header-anchor",href:"#admin-role","aria-hidden":"true"},"#")],-1),M=e("p",null,[t("Users in the "),e("code",null,"Admin"),t(" role have super-user access giving them access to any services or plugins protected with Roles and Permissions.")],-1),j=e("h3",{id:"authsecret",tabindex:"-1"},[t("AuthSecret "),e("a",{class:"header-anchor",href:"#authsecret","aria-hidden":"true"},"#")],-1),G=e("p",null,[t("You can use "),e("strong",null,"Config.AdminAuthSecret"),t(" to specify a special string to give you admin access without having to login by adding "),e("code",null,"?authsecret=xxx"),t(" to the query string, e.g:")],-1),N=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"SetConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"HostConfig"),t(),e("span",{class:"token punctuation"},"{"),t(" AdminAuthSecret "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token string"},'"secretz"'),t(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),O=e("p",null,"By-pass protected services using query string:",-1),U=e("div",{class:"language-"},[e("pre",null,[e("code",null,`/my-service?authsecret=secretz
`)])],-1),F=e("p",null,[t("Or if using a Service Client it can be sent in the "),e("code",null,"authsecret"),t(" Cookie or "),e("code",null,"X-Param-Override-authsecret"),t(" HTTP Header.")],-1),z=e("h2",{id:"debug-links",tabindex:"-1"},[t("Debug Links "),e("a",{class:"header-anchor",href:"#debug-links","aria-hidden":"true"},"#")],-1),W=e("p",null,[t("To provide better visibility to the hidden functionality in ServiceStack we've added "),e("strong",null,"Debug Info"),t(" links section to the "),e("code",null,"/metadata"),t(" page which add links to any Plugins with Web UI's, e.g:")],-1),B=e("p",null,[e("img",{src:"http://i.imgur.com/2Hf3P9L.png",alt:"Debug Info Links"})],-1),V=e("p",null,[t("The "),e("strong",null,"Debug Links"),t(" section is only available in "),e("strong",null,"DebugMode"),t(".")],-1),Y=e("p",null,[t("You can add links to your own "),e("a",{href:"/plugins"},"Plugins"),t(" in the metadata pages with:")],-1),$=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("appHost"),e("span",{class:"token punctuation"},"."),e("span",{class:"token generic-method"},[e("span",{class:"token function"},"GetPlugin"),e("span",{class:"token generic class-name"},[e("span",{class:"token punctuation"},"<"),t("MetadataFeature"),e("span",{class:"token punctuation"},">")])]),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(`
    `),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"AddPluginLink"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"swagger-ui/"'),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token string"},'"Swagger UI"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`

appHost`),e("span",{class:"token punctuation"},"."),e("span",{class:"token generic-method"},[e("span",{class:"token function"},"GetPlugin"),e("span",{class:"token generic class-name"},[e("span",{class:"token punctuation"},"<"),t("MetadataFeature"),e("span",{class:"token punctuation"},">")])]),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),t(`
    `),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"AddDebugLink"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"?debug=requestinfo"'),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token string"},'"Request Info"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),X=e("p",null,[e("code",null,"AddPluginLink"),t(" adds links under the "),e("strong",null,"Plugin Links"),t(" section and should be used if your plugin is publicly visible, otherwise use "),e("code",null,"AddDebugLink"),t(" for plugins only available during debugging or development.")],-1),J=e("h2",{id:"startup-errors",tabindex:"-1"},[t("Startup Errors "),e("a",{class:"header-anchor",href:"#startup-errors","aria-hidden":"true"},"#")],-1),K=e("p",null,[t("When plugins are registered their Exceptions are swallowed and captured in "),e("code",null,"AppHost.StartupErrors"),t(" so an individual Rogue plugin won't prevent your ServiceStack AppHost from starting. But when a plugin doesn't work properly it can be hard to determine the cause was due to an Exception occuring at Startup.")],-1),Q=e("p",null,[t("Alternatively enable "),e("a",{href:"#strictmode"},"StrictMode"),t(" to have StartUp Exceptions thrown on StartUp.")],-1),Z=e("h2",{id:"debug-inspector",tabindex:"-1"},[t("Debug Inspector "),e("a",{class:"header-anchor",href:"#debug-inspector","aria-hidden":"true"},"#")],-1),ee=e("p",null,[e("a",{href:"https://sharpscript.net/metadata/debug",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:"https://sharpscript.net/assets/img/screenshots/metadata-debug.png",alt:""})])],-1),te=e("p",null,[t("All ServiceStack Apps have access to rich introspection and queryability for inspecting remote ServiceStack instances with the new "),e("a",{href:"https://sharpscript.net/docs/servicestack-scripts#debug-template",target:"_blank",rel:"noopener noreferrer"},"Debug Inspector"),t(".")],-1),ne=e("p",null,[t("The Debug Template is a Service in "),e("code",null,"SharpPagesFeature"),t(" that's pre-registered in "),e("a",{href:"#debugmode"},"DebugMode"),t(". The Service can also be available when not in "),e("strong",null,"DebugMode"),t(" by enabling it with:")],-1),se=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"SharpPagesFeature"),t(),e("span",{class:"token punctuation"},"{"),t(` 
    MetadataDebugAdminRole `),e("span",{class:"token operator"},"="),t(" RoleNames"),e("span",{class:"token punctuation"},"."),t("Admin"),e("span",{class:"token punctuation"},","),t("        "),e("span",{class:"token comment"},"// Only allow Admin users"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),ae=e("p",null,[t("This registers the Service but limits it to Users with the "),e("code",null,"Admin"),t(" role, alternatively you configure an "),e("a",{href:"https://docs.servicestack.net/debugging#authsecret",target:"_blank",rel:"noopener noreferrer"},"Admin Secret"),t(":")],-1),oe=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"SetConfig"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"HostConfig"),t(),e("span",{class:"token punctuation"},"{"),t(" AdminAuthSecret "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token string"},'"secret"'),t(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),re=e("p",null,[t("Which will let you access it by appending the authsecret to the querystring: "),e("code",null,"/metadata/debug?authsecret=secret")],-1),ie=e("p",null,"Alternatively if preferred you can make the Debug Template Service available to:",-1),ce=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"SharpPagesFeature"),t(),e("span",{class:"token punctuation"},"{"),t(` 
    MetadataDebugAdminRole `),e("span",{class:"token operator"},"="),t(" RoleNames"),e("span",{class:"token punctuation"},"."),t("AllowAnyUser"),e("span",{class:"token punctuation"},","),t("  "),e("span",{class:"token comment"},"// Allow Authenticated Users"),t(`
    MetadataDebugAdminRole `),e("span",{class:"token operator"},"="),t(" RoleNames"),e("span",{class:"token punctuation"},"."),t("AllowAnon"),e("span",{class:"token punctuation"},","),t("     "),e("span",{class:"token comment"},"// Allow anyone"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),t(`
`)])])],-1),le=e("p",null,[t("Which is the configuration that allows "),e("a",{href:"https://sharpscript.net/metadata/debug",target:"_blank",rel:"noopener noreferrer"},"sharpscript.net/metadata/debug"),t(" to be accessible to anyone.")],-1),ue=e("h2",{id:"lisp-tcp-repl-server",tabindex:"-1"},[t("Lisp TCP Repl Server "),e("a",{class:"header-anchor",href:"#lisp-tcp-repl-server","aria-hidden":"true"},"#")],-1),pe=e("p",null,[t("A even greater way to get deeper insights into a Live running remote ServiceStack App is to open a "),e("a",{href:"/lisp-tcp-repl-server"},"Lisp TCP REPL Server"),t(" into the server to open a "),e("strong",null,'"programmable gateway"'),t(" into any ServiceStack App where you're able to perform live queries, access IOC dependencies, invoke internal Server functions and query the state of a running Server to provide invaluable insight when diagnosing issues on a remote server.")],-1),de=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"YouTube"),e("p",null,[e("a",{href:"https://youtu.be/HO523cFkDfk",target:"_blank",rel:"noopener noreferrer"},"youtu.be/HO523cFkDfk")])],-1),he=e("p",null,[e("a",{href:"https://youtu.be/HO523cFkDfk",target:"_blank",rel:"noopener noreferrer"},[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/sharpscript/lisp-tcp-repl.gif",alt:""})])],-1),ge=e("h3",{id:"request-info",tabindex:"-1"},[t("Request Info "),e("a",{class:"header-anchor",href:"#request-info","aria-hidden":"true"},"#")],-1),ke=e("p",null,[t("ServiceStack's Request Info feature is useful for debugging requests. Just add "),e("strong",null,"?debug=requestinfo"),t(" in your "),e("code",null,"/pathinfo"),t(" and ServiceStack will return a dump of all the HTTP Request parameters to help with debugging interoperability issues. The RequestInfoFeature is only enabled in "),e("a",{href:"/debugging#debugmode"},"DebugMode"),t(".")],-1),be=e("p",null,[t("To better highlight the presence of Startup Errors a red warning banner will also appear in "),e("code",null,"/metadata"),t(" pages when in "),e("a",{href:"/debugging#debugmode"},"DebugMode"),t(", e.g:")],-1),fe=e("p",null,[e("img",{src:n,alt:""})],-1),_e=e("p",null,[t("The number of Startup Errors is also added to the "),e("code",null,"X-Startup-Errors: n"),t(" Global HTTP Header so you'll be able to notice it when debugging HTTP Traffic.")],-1),Se=e("p",null,[t("If you prefer that any Plugin Exception is immediately visible you can register this callback in your "),e("code",null,"AppHost"),t(" to throw a YSOD with your first Startup Error:")],-1),ve=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("AfterInitCallbacks"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),t("host "),e("span",{class:"token operator"},"=>"),t(),e("span",{class:"token punctuation"},"{"),t(`
    `),e("span",{class:"token class-name"},[e("span",{class:"token keyword"},"var")]),t(" appHost "),e("span",{class:"token operator"},"="),t(),e("span",{class:"token punctuation"},"("),t("ServiceStackHost"),e("span",{class:"token punctuation"},")"),t("host"),e("span",{class:"token punctuation"},";"),t(`
    `),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("appHost"),e("span",{class:"token punctuation"},"."),t("StartUpErrors"),e("span",{class:"token punctuation"},"."),t("Count "),e("span",{class:"token operator"},">"),t(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},")"),t(`
        `),e("span",{class:"token keyword"},"throw"),t(),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"Exception"),e("span",{class:"token punctuation"},"("),t("appHost"),e("span",{class:"token punctuation"},"."),t("StartUpErrors"),e("span",{class:"token punctuation"},"["),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),t("Message"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),me=e("h2",{id:"plugins",tabindex:"-1"},[t("Plugins "),e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#")],-1),we=e("p",null,"There are a number of plugins that can help with debugging:",-1),ye=e("h3",{id:"request-logger",tabindex:"-1"},[e("a",{href:"/request-logger"},"Request Logger"),t(),e("a",{class:"header-anchor",href:"#request-logger","aria-hidden":"true"},"#")],-1),Ae=e("p",null,[t("Add an In-Memory "),e("code",null,"IRequestLogger"),t(" and service with the default route at "),e("code",null,"/requestlogs"),t(" which maintains a live log of the most recent requests (and their responses). Supports multiple config options incl. Rolling-size capacity, error and session tracking, hidden request bodies for sensitive services, etc.")],-1),Te=e("div",{class:"language-cs"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RequestLogsFeature"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),xe=e("p",null,[t("The "),e("code",null,"IRequestLogger"),t(" is a great way to introspect and analyze your service requests in real-time. Here's a screenshot from the "),e("a",{href:"http://bootstrapapi.servicestack.net",target:"_blank",rel:"noopener noreferrer"},"http://bootstrapapi.servicestack.net"),t(" website:")],-1),qe=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/request-logs-01.png",alt:"Live Screenshot"})],-1),De=e("p",null,"It supports multiple queryString filters and switches so you filter out related requests for better analysis and debuggability:",-1),Le=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/Assets/master/img/wikis/request-logs-02.png",alt:"Request Logs Usage"})],-1),Pe=e("p",null,[t("The "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Admin/RequestLogsService.cs",target:"_blank",rel:"noopener noreferrer"},"RequestLogsService"),t(" is just a simple C# service under-the-hood but is a good example of how a little bit of code can provide a lot of value in ServiceStack's by leveraging its generic, built-in features.")],-1),He=[i,c,l,u,p,d,h,g,k,b,f,_,S,v,m,w,y,A,T,x,q,D,L,P,H,C,R,E,I,M,j,G,N,O,U,F,z,W,B,V,Y,$,X,J,K,Q,Z,ee,te,ne,se,ae,oe,re,ie,ce,le,ue,pe,de,he,ge,ke,be,fe,_e,Se,ve,me,we,ye,Ae,Te,xe,qe,De,Le,Pe];function Ce(Re,Ee,Ie,Me,je,Ge){return o(),a("div",null,He)}var Fe=s(r,[["render",Ce]]);export{Ue as __pageData,Fe as default};
