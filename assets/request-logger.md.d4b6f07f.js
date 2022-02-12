import{_ as n,a as s}from"./request-logs-02.0fb43f70.js";import{_ as o,c as a,o as l,b as e,e as t}from"./app.25a431af.js";const ee='{"title":"Request Loggers","description":"","frontmatter":{"title":"Request Loggers"},"headers":[{"level":3,"title":"CSV Request Logger","slug":"csv-request-logger"},{"level":3,"title":"Custom CSV AutoQuery Data implementation","slug":"custom-csv-autoquery-data-implementation"},{"level":2,"title":"Rollbar Request Logger","slug":"rollbar-request-logger"},{"level":3,"title":"Install","slug":"install"},{"level":2,"title":"Redis Request Logger","slug":"redis-request-logger"},{"level":3,"title":"Install","slug":"install-1"},{"level":3,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"request-logger.md","lastUpdated":1644680220419}',r={},i=e("p",null,[t("Add an In-Memory "),e("code",null,"IRequestLogger"),t(" and service with the default route at "),e("code",null,"/requestlogs"),t(" which maintains a live log of the most recent requests (and their responses). Supports multiple config options incl. Rolling-size capacity, error and session tracking, hidden request bodies for sensitive services, etc.")],-1),c=e("div",{class:"language-cs"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RequestLogsFeature"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),u=e("h3",{id:"csv-request-logger",tabindex:"-1"},[t("CSV Request Logger "),e("a",{class:"header-anchor",href:"#csv-request-logger","aria-hidden":"true"},"#")],-1),p=e("p",null,[t("One of the areas where ServiceStack's "),e("a",{href:"/csv-format"},"CSV Support"),t(" shines is being able to store daily Request Logs in a plain-text structured format, that way they could be immediately inspectable with a text editor or for even better inspection, opened in a spreadsheet and benefit from its filterable, movable, resizable and sortable columns.")],-1),d=e("p",null,[t("To enable CSV Request Logging you just need to register the "),e("code",null,"RequestLogsFeature"),t(" and configure it to use the "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/CsvRequestLogger.cs",target:"_blank",rel:"noopener noreferrer"},"CsvRequestLogger"),t(":")],-1),g=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RequestLogsFeature"),t(),e("span",{class:"token punctuation"},"{"),t(`
    RequestLogger `),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"CsvRequestLogger"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),h=e("p",null,"This will register the CSV Request logger with the following overridable defaults:",-1),k=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RequestLogsFeature"),t(),e("span",{class:"token punctuation"},"{"),t(`
    RequestLogger `),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"CsvRequestLogger"),e("span",{class:"token punctuation"},"("),t(`
        `),e("span",{class:"token named-parameter punctuation"},"files"),e("span",{class:"token punctuation"},":"),t(),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"FileSystemVirtualFiles"),e("span",{class:"token punctuation"},"("),t("HostContext"),e("span",{class:"token punctuation"},"."),t("Config"),e("span",{class:"token punctuation"},"."),t("WebHostPhysicalPath"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),t(`
        `),e("span",{class:"token named-parameter punctuation"},"requestLogsPattern"),e("span",{class:"token punctuation"},":"),t(),e("span",{class:"token string"},'"requestlogs/{year}-{month}/{year}-{month}-{day}.csv"'),e("span",{class:"token punctuation"},","),t(`
        `),e("span",{class:"token named-parameter punctuation"},"errorLogsPattern"),e("span",{class:"token punctuation"},":"),t(),e("span",{class:"token string"},'"requestlogs/{year}-{month}/{year}-{month}-{day}-errors.csv"'),e("span",{class:"token punctuation"},","),t(`
        `),e("span",{class:"token named-parameter punctuation"},"appendEvery"),e("span",{class:"token punctuation"},":"),t(" TimeSpan"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"FromSeconds"),e("span",{class:"token punctuation"},"("),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),t(`
    `),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),f=e("p",null,[t("Where Request Logs are flushed every "),e("strong",null,"1 second"),t(" using a background Timer to a daily log maintained in the logical date format structure above. As it would be useful to be able to inspect any errors in isolation, errors are also written to a separate "),e("code",null,"YYYY-MM-DD-errors.csv"),t(" format, in addition to the main Request logs.")],-1),v=e("h3",{id:"custom-csv-autoquery-data-implementation",tabindex:"-1"},[e("a",{href:"/autoquery-service#custom-autoquery-data-implementation"},"Custom CSV AutoQuery Data implementation"),t(),e("a",{class:"header-anchor",href:"#custom-csv-autoquery-data-implementation","aria-hidden":"true"},"#")],-1),m=e("p",null,[t("The AutoQuery Service example shows you can quickly create an AutoQuery Data Service that lets you inspect your CSV Request and Error Logs with AutoQuery, which in addition to the rich querying benefits also gives you access to an instant UI in "),e("a",{href:"https://github.com/ServiceStack/Admin",target:"_blank",rel:"noopener noreferrer"},"AutoQuery Viewer"),t(" to be able to "),e("a",{href:"/autoquery-service#view-request-logs-in-autoquery-viewerhttpsgithubcomservicestackadmin"},"View your Request Logs"),t(".")],-1),b=e("h2",{id:"rollbar-request-logger",tabindex:"-1"},[t("Rollbar Request Logger "),e("a",{class:"header-anchor",href:"#rollbar-request-logger","aria-hidden":"true"},"#")],-1),y=e("p",null,[t("The "),e("a",{href:"https://github.com/daleholborow/iayos.ServiceStack.RollbarPlugin",target:"_blank",rel:"noopener noreferrer"},"iayos.ServiceStack.RollbarPlugin"),t(" integrates with "),e("a",{href:"https://rollbar.com",target:"_blank",rel:"noopener noreferrer"},"Rollbar"),t(" real-time error monitoring solution which has a free tier to log up to 5,000 requests per month.")],-1),_=e("h3",{id:"install",tabindex:"-1"},[t("Install "),e("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#")],-1),q=e("p",null,[t("To use "),e("code",null,"RollbarLoggerPlugin"),t(" install the "),e("a",{href:"https://www.nuget.org/packages/iayos.ServiceStack.RollbarPlugin",target:"_blank",rel:"noopener noreferrer"},"iayos.ServiceStack.RollbarPlugin"),t(" NuGet package:")],-1),w=e("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-700"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[e("p",null,[e("code",null,'<PackageReference Include="iayos.ServiceStack.RollbarPlugin" Version="0.0.1" />')])])]),e("div",{class:"flex"},[e("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),R=e("p",null,[t("Sign Up for a new account on "),e("a",{href:"https://rollbar.com",target:"_blank",rel:"noopener noreferrer"},"Rollbar"),t(". Then register "),e("code",null,"RollbarLoggerPlugin"),t(" with the your API Key:")],-1),S=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RollbarLoggerPlugin"),t(`
`),e("span",{class:"token punctuation"},"{"),t(`
    ApiKey `),e("span",{class:"token operator"},"="),t(" rollbarApiKey"),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token comment"},"//.."),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),L=e("p",null,[t("Please see the "),e("a",{href:"https://github.com/daleholborow/iayos.ServiceStack.RollbarPlugin",target:"_blank",rel:"noopener noreferrer"},"iayos.ServiceStack.RollbarPlugin"),t(" project for additional customization options.")],-1),x=e("h2",{id:"redis-request-logger",tabindex:"-1"},[t("Redis Request Logger "),e("a",{class:"header-anchor",href:"#redis-request-logger","aria-hidden":"true"},"#")],-1),T=e("p",null,[t("The HTTP Request logs can also be configured to persist to a distributed "),e("a",{href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},"Redis"),t(" data store instead by configuring the "),e("code",null,"RequestLogsFeature"),t(" plugin to use the "),e("code",null,"RedisRequestLogger"),t(". Persisting logs in redis will allow them to survive and be view-able across App Domain restarts.")],-1),P=e("h3",{id:"install-1",tabindex:"-1"},[t("Install "),e("a",{class:"header-anchor",href:"#install-1","aria-hidden":"true"},"#")],-1),C=e("p",null,[t("To use "),e("code",null,"RedisRequestLogger"),t(" first install the "),e("strong",null,"ServiceStack.Server"),t(" NuGet package:")],-1),A=e("div",{class:"nuget-copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[e("div",{class:"flex-grow bg-gray-700"},[e("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[e("p",null,[e("code",null,'<PackageReference Include="ServiceStack.Server" Version="6.*" />')])])]),e("div",{class:"flex"},[e("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[e("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),e("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),V=e("p",null,[t("Then configure "),e("code",null,"RequestLogsFeature"),t(" to use the "),e("code",null,"RedisRequestLogger"),t(" which can make use of your existing "),e("code",null,"IRedisClientsManager"),t(" registered IOC dependency, e.g:")],-1),I=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RequestLogsFeature"),t(),e("span",{class:"token punctuation"},"{"),t(`
    RequestLogger `),e("span",{class:"token operator"},"="),t(),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"RedisRequestLogger"),e("span",{class:"token punctuation"},"("),t(`
	    container`),e("span",{class:"token punctuation"},"."),e("span",{class:"token generic-method"},[e("span",{class:"token function"},"Resolve"),e("span",{class:"token generic class-name"},[e("span",{class:"token punctuation"},"<"),t("IRedisClientsManager"),e("span",{class:"token punctuation"},">")])]),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token named-parameter punctuation"},"capacity"),e("span",{class:"token punctuation"},":"),e("span",{class:"token number"},"1000"),e("span",{class:"token punctuation"},")"),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),M=e("div",{class:"info custom-block"},[e("p",{class:"custom-block-title"},"Tip"),e("p",null,[t("The optional "),e("code",null,"capacity"),t(" configures Redis Request Logger as a rolling log where it will only keep the most recent 1000 entries")])],-1),D=e("h3",{id:"configuration",tabindex:"-1"},[t("Configuration "),e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#")],-1),B=e("p",null,[t("Like other ServiceStack "),e("a",{href:"/plugins"},"Plugins"),t(" the "),e("code",null,"RequestLogsFeature"),t(" has a number of configuration options that can be specified at registration to customize Request Logging:")],-1),F=e("table",{class:"table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Type"),e("th",null,"Description")])]),e("tr",null,[e("td",null,"AtRestPath"),e("td",null,"string"),e("td",null,"RequestLogs service Route, default is `/requestlogs`")]),e("tr",null,[e("td",null,"EnableSessionTracking"),e("td",null,"bool"),e("td",null,"Turn On/Off Session Tracking")]),e("tr",null,[e("td",null,"EnableRequestBodyTracking"),e("td",null,"bool"),e("td",null,"Turn On/Off Logging of Raw Request Body, default is Off")]),e("tr",null,[e("td",null,"EnableResponseTracking"),e("td",null,"bool"),e("td",null,"Turn On/Off Tracking of Responses")]),e("tr",null,[e("td",null,"EnableErrorTracking"),e("td",null,"bool"),e("td",null,"Turn On/Off Tracking of Exceptions")]),e("tr",null,[e("td",null,"Capacity"),e("td",null,"int?"),e("td",null,"Size of InMemoryRollingRequestLogger circular buffer")]),e("tr",null,[e("td",null,"RequiredRoles"),e("td",null,"string[]"),e("td",null,"Limit access to /requestlogs service to these roles")]),e("tr",null,[e("td",null,"RequestLogger"),e("td",null,"IRequest Logger"),e("td",null,"Change the RequestLogger provider. Default is InMemoryRollingRequestLogger")]),e("tr",null,[e("td",null,"ExcludeRequestDtoTypes"),e("td",null,"Type[]"),e("td",null,"Don't log requests of these types. By default RequestLog's are excluded")]),e("tr",null,[e("td",null,"HideRequestBody ForRequestDtoTypes"),e("td",null,"Type[]"),e("td",null,"Don't log request bodys for services with sensitive information. By default Auth and Registration requests are hidden.")])],-1),O=e("h3",{id:"usage",tabindex:"-1"},[t("Usage "),e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),E=e("p",null,[t("The "),e("code",null,"IRequestLogger"),t(" is a great way to introspect and analyze your service requests in real-time. Here's a screenshot from the "),e("a",{href:"http://bootstrapapi.servicestack.net",target:"_blank",rel:"noopener noreferrer"},"bootstrapapi.servicestack.net"),t(" website:")],-1),j=e("p",null,[e("img",{src:n,alt:"Live Screenshot"})],-1),H=e("p",null,"It supports multiple queryString filters and switches so you filter out related requests for better analysis and debuggability:",-1),z=e("p",null,[e("img",{src:s,alt:"Request Logs Usage"})],-1),Q=e("p",null,[t("The "),e("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Admin/RequestLogsService.cs",target:"_blank",rel:"noopener noreferrer"},"RequestLogsService"),t(" is just a simple C# service under-the-hood but is a good example of how a little bit of code can provide a lot of value in ServiceStack's by leveraging its generic, built-in features.")],-1),U=[i,c,u,p,d,g,h,k,f,v,m,b,y,_,q,w,R,S,L,x,T,P,C,A,V,I,M,D,B,F,O,E,j,H,z,Q];function N(Y,$,K,G,W,J){return l(),a("div",null,U)}var te=o(r,[["render",N]]);export{ee as __pageData,te as default};
