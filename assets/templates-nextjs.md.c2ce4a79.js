import{_ as n}from"./next-black.4e3daae2.js";import{_ as a,c as o,o as s,b as e,e as t}from"./app.25a431af.js";var l="/assets/jamstack-logo.ed938cc2.svg",i="/assets/nextjs-local-dev.cf9d62a6.svg",r="/assets/nextjs-hosted.445fa9f9.svg",c="/assets/gh-action-adhoc-workflow.dbcf135a.png";const re='{"title":"NextJS JAMStack Template","description":"","frontmatter":{"slug":"templates-nextjs","title":"NextJS JAMStack Template"},"headers":[{"level":2,"title":"NextJS and JAMStack","slug":"nextjs-and-jamstack"},{"level":2,"title":"NextJS and Edge Functions","slug":"nextjs-and-edge-functions"},{"level":2,"title":"Project Structure","slug":"project-structure"},{"level":2,"title":"UI project","slug":"ui-project"},{"level":2,"title":"API project","slug":"api-project"},{"level":2,"title":"Development vs Production","slug":"development-vs-production"},{"level":2,"title":"Deployment process","slug":"deployment-process"},{"level":3,"title":"Ways to deploy","slug":"ways-to-deploy"},{"level":2,"title":"Hosting","slug":"hosting"}],"relativePath":"templates-nextjs.md","lastUpdated":1644680220423}',p={},u=e("div",{class:"flex flex-wrap justify-center"},[e("img",{src:n}),e("img",{src:l,style:{display:"block"}})],-1),d=e("p",null,[e("a",{href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer"},"NextJS"),t(" is a framework built on top of "),e("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),t(" that aims to solve a lot of the pain points related to rapidly developing a React application. NextJS takes care of setting up common patterns for development, and built-in features like "),e("a",{href:"https://nextjs.org/docs/routing/introduction",target:"_blank",rel:"noopener noreferrer"},"routing"),t(", "),e("a",{href:"https://nextjs.org/docs/basic-features/built-in-css-support",target:"_blank",rel:"noopener noreferrer"},"CSS/Sass support"),t(", "),e("a",{href:"https://nextjs.org/docs/basic-features/fast-refresh",target:"_blank",rel:"noopener noreferrer"},"Fast Refresh"),t(", any many more, making it a very attractive way to build React applications.")],-1),h=e("h2",{id:"nextjs-and-jamstack",tabindex:"-1"},[t("NextJS and JAMStack "),e("a",{class:"header-anchor",href:"#nextjs-and-jamstack","aria-hidden":"true"},"#")],-1),k=e("p",null,[t("NextJS enables the building of a static site through the use of the "),e("a",{href:"https://nextjs.org/docs/advanced-features/static-html-export",target:"_blank",rel:"noopener noreferrer"},[e("code",null,"next export")]),t(" command. This allows us to host the generated static site anywhere we like and have a clean separation between the generated static site and a well-defined webservice API provided by ServiceStack. The "),e("a",{href:"https://jamstack.org/",target:"_blank",rel:"noopener noreferrer"},"JAMStack"),t(" pattern promotes this separation of JavaScript, API and Markup (JAM) as the architecture of websites and applications that deliver great performance but also flexibility. It is common to have content heavy sites, using statically generated "),e("em",null,"Markup"),t(", that utilize modern frontend libraries and "),e("em",null,"JavaScript"),t(" combined with data from an "),e("em",null,"API"),t(" to make content compelling and interactive.")],-1),g=e("h2",{id:"nextjs-and-edge-functions",tabindex:"-1"},[t("NextJS and Edge Functions "),e("a",{class:"header-anchor",href:"#nextjs-and-edge-functions","aria-hidden":"true"},"#")],-1),f=e("p",null,[t("NextJS creators, Vercel, also offer a way to host "),e("a",{href:"https://vercel.com/docs/concepts/functions/edge-functions",target:"_blank",rel:"noopener noreferrer"},[e("em",null,"Edge Functions")]),t(" using JavaScript can integrate with their other hosting services. This provides a convenient and fast way to provide custom server functionality without worrying about the hosting.")],-1),m=e("p",null,[t("However, as convenient as they are, these don't produce "),e("a",{href:"./why-servicestack"},"well-defined webservice APIs"),t(" for easy reuse outside your web application. This is where ServiceStack can offer a developer experience that will not only enable fast integration for your NextJS application, but for "),e("a",{href:"/add-servicestack-reference"},"any additional client applications in most languages and platforms"),t(".")],-1),y=e("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/Vae0ALalIP0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""},null,-1),w=e("h2",{id:"project-structure",tabindex:"-1"},[t("Project Structure "),e("a",{class:"header-anchor",href:"#project-structure","aria-hidden":"true"},"#")],-1),v=e("p",null,[t("Following this JAMStack pattern, the "),e("code",null,"nextjs"),t(" template has a separate folder for the "),e("code",null,"ui"),t(" NextJS application, and the "),e("code",null,"api"),t(" ServiceStack application.")],-1),_=e("ul",null,[e("li",null,[e("code",null,".deploy"),t(" - Files used for built-in GitHub Actions deployment.")]),e("li",null,[e("code",null,".github"),t(" - GitHub Actions workflows for deployment to GitHub Pages and a Linux server with "),e("code",null,"docker compose"),t(".")]),e("li",null,[e("code",null,"ui"),t(" - NextJS application used to generate your static site.")]),e("li",null,[e("code",null,"api"),t(" - ServiceStack application hosting your well-defined web service APIs.")]),e("li",null,[e("code",null,"Dockerfile"),t(" - Dockerfile for your ServiceStack application.")])],-1),b=e("h2",{id:"ui-project",tabindex:"-1"},[t("UI project "),e("a",{class:"header-anchor",href:"#ui-project","aria-hidden":"true"},"#")],-1),S=e("p",null,[t("The UI project is based off the NextJS "),e("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript",target:"_blank",rel:"noopener noreferrer"},"Blog Starter TypeScript"),t(" template, providing a familiar NextJS developer workflow. This project has support for statically generated pages from both Markdown files and TSX files.")],-1),x=e("p",null,[t("This template has been extended with authentication coming from the ServiceStack "),e("code",null,"api"),t(" application enabled with the IdentityAuth provider and JWT. Admin, profile, sign-in and signup pages have been added with example integration to get you started.")],-1),j=e("p",null,[t("This provides a pattern for content heavy Markdown in the "),e("code",null,"_posts"),t(" directory that perform well for SEO since they output static HTML pages.")],-1),A=e("p",null,[t("Tailwind is also incorporated into this template as well, enabling you to take advantage of "),e("a",{href:"https://tailwindui.com/",target:"_blank",rel:"noopener noreferrer"},"Tailwind component providers"),t(" that can be dropped straight into your TSX pages.")],-1),P=e("h2",{id:"api-project",tabindex:"-1"},[t("API project "),e("a",{class:"header-anchor",href:"#api-project","aria-hidden":"true"},"#")],-1),T=e("p",null,[t("The ServiceStack application is in the root "),e("code",null,"api"),t(" directory and by default will be hosted on "),e("code",null,"http://localhost:5000"),t(" for local development. The AppHost project has been configured with several features built-in to the template")],-1),I=e("ul",null,[e("li",null,"Auth - IdentityAuth + JWT"),e("li",null,"AuthRepository - Custom AppUser, EntityFramework with Identity roles"),e("li",null,"AppHost - CORS and SharpPages Plugins"),e("li",null,"Database - EntityFramework using SQLite")],-1),H=e("h2",{id:"development-vs-production",tabindex:"-1"},[t("Development vs Production "),e("a",{class:"header-anchor",href:"#development-vs-production","aria-hidden":"true"},"#")],-1),J=e("p",null,[t("During local development, the template utilizes "),e("code",null,"next.config.js"),t(" to handle rewrites from the localhost:3000 domain to our locally running ServiceStack API.")],-1),N=e("p",null,[e("img",{src:i,alt:""})],-1),D=e("p",null,[t("This allows us to use the ServiceStack API and the ServiceStack client to take advantage of typed end to end development, just like building any other client for a ServiceStack service. However, we can also leverage the "),e("a",{href:"https://swr.vercel.app/",target:"_blank",rel:"noopener noreferrer"},[e("code",null,"stale-while-revalidate")]),t(" library built into the NextJS framework to apply conditional fetching and local cache.")],-1),R=e("div",{class:"language-typescript"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),t(),e("span",{class:"token punctuation"},"{"),t(" client "),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token keyword"},"from"),t(),e("span",{class:"token string"},"'../lib/gateway'"),t(`
`),e("span",{class:"token keyword"},"import"),t(),e("span",{class:"token punctuation"},"{"),t(" Hello "),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token keyword"},"from"),t(),e("span",{class:"token string"},"'../lib/dtos'"),t(`
`),e("span",{class:"token keyword"},"import"),t(" useSWR "),e("span",{class:"token keyword"},"from"),t(),e("span",{class:"token string"},"'swr'"),e("span",{class:"token punctuation"},";"),t(`

`),e("span",{class:"token keyword"},"const"),t(),e("span",{class:"token function-variable function"},"HelloApi"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),t(" name "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token operator"},":"),e("span",{class:"token builtin"},"any"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token operator"},"=>"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token keyword"},"const"),t(),e("span",{class:"token punctuation"},"{"),t(" data"),e("span",{class:"token punctuation"},","),t(" error "),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"useSWR"),e("span",{class:"token punctuation"},"("),e("span",{class:"token template-string"},[e("span",{class:"token template-punctuation string"},"`"),e("span",{class:"token string"},"Hello:"),e("span",{class:"token interpolation"},[e("span",{class:"token interpolation-punctuation punctuation"},"${"),t("name"),e("span",{class:"token interpolation-punctuation punctuation"},"}")]),e("span",{class:"token template-punctuation string"},"`")]),e("span",{class:"token punctuation"},","),t(" key "),e("span",{class:"token operator"},"=>"),t(" client"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"get"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token class-name"},"Hello"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),t(" name "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),t(`
  `),e("span",{class:"token keyword"},"if"),t(),e("span",{class:"token punctuation"},"("),t("error"),e("span",{class:"token punctuation"},")"),t(),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token operator"},"<"),t("div className"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"ml-2 text-red-500"'),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},"{"),t("error"),e("span",{class:"token punctuation"},"."),t("message"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token operator"},"<"),e("span",{class:"token operator"},"/"),t("div"),e("span",{class:"token operator"},">"),t(`
  `),e("span",{class:"token keyword"},"return"),t(),e("span",{class:"token operator"},"<"),t("div className"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},'"ml-3 text-2xl"'),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},"{"),t("data "),e("span",{class:"token operator"},"?"),t(" data"),e("span",{class:"token punctuation"},"."),t("result "),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'loading...'"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token operator"},"<"),e("span",{class:"token operator"},"/"),t("div"),e("span",{class:"token operator"},">"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),C=e("p",null,[t("Once deployed, the hosted statically generated site will call the API at the "),e("code",null,"PROD_API"),t(" configured address. If you are hosting across multiple domains, you will need to configure your ServiceStack application to support CORS for the domain where you host the output from the "),e("code",null,"ui"),t(" project.")],-1),G=e("div",{class:"language-csharp"},[e("pre",null,[e("code",null,[t("Plugins"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"Add"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),t(),e("span",{class:"token constructor-invocation class-name"},"CorsFeature"),e("span",{class:"token punctuation"},"("),e("span",{class:"token named-parameter punctuation"},"allowOriginWhitelist"),e("span",{class:"token punctuation"},":"),e("span",{class:"token keyword"},"new"),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"{"),t(` 
    `),e("span",{class:"token string"},'"https://localhost:5001"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token string"},'"http://localhost:5000"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token string"},'"http://localhost:3000"'),e("span",{class:"token punctuation"},","),t(`
    `),e("span",{class:"token string"},'"https://nextjs-gh.web-templates.io"'),t(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),t(),e("span",{class:"token named-parameter punctuation"},"allowCredentials"),e("span",{class:"token punctuation"},":"),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),t(`
`)])])],-1),M=e("p",null,[t("By default, the GitHub Actions provided with the template will deploy to GitHub Pages. GitHub Pages can be configured using a "),e("code",null,"CNAME"),t(" file to use a custom domain. The above use of the "),e("code",null,"CorsFeature"),t(" plugin in "),e("code",null,"Configure.AppHost.cs"),t(" shows we are adding the "),e("code",null,"nextjs-gh.web-templates.io"),t(" domain to the "),e("code",null,"allowOriginWhitelist"),t(" so the server will accept requests from our GitHub Pages domain of "),e("code",null,"https://nextjs-gh.web-templates.io"),t(".")],-1),F=e("p",null,[e("img",{src:r,alt:""})],-1),O=e("h2",{id:"deployment-process",tabindex:"-1"},[t("Deployment process "),e("a",{class:"header-anchor",href:"#deployment-process","aria-hidden":"true"},"#")],-1),U=e("p",null,"JAMStack deployments are extremely flexible since the UI and API are logically separated. They can be hosted together with the API also serving the statically generated site files, or using separate hosts with a variety of different setups.",-1),W=e("p",null,[t("This template utilizes "),e("a",{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},"GitHub Actions"),t(" to support 2 different hosting setups. Deployed together in a Docker image, hosting the static site under "),e("code",null,"wwwroot"),t(". Or separately on two different domains utilizing "),e("a",{href:"/corsfeature"},"CORS configuration"),t(" to communicate across domains. The UI project is hosted directly on "),e("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub Pages"),t(" while the API is bundled into a Docker image and can be hosted on any "),e("a",{href:"/do-github-action-mix-deployment"},"Linux server with SSH access and Docker Compose"),t(".")],-1),E=e("p",null,[t("To support both, the "),e("code",null,"npm publish"),t(" command copies the statically generated site and copies the output to the "),e("code",null,"wwwroot"),t(" folder within the API before it is bundled into a docker image. Additionally, the "),e("code",null,"release.yml"),t(" GitHub Actions workflow pushes the UI to the "),e("code",null,"gh-pages"),t(" branch of your repository to enable GitHub Pages deployment.")],-1),q=e("h3",{id:"ways-to-deploy",tabindex:"-1"},[t("Ways to deploy "),e("a",{class:"header-anchor",href:"#ways-to-deploy","aria-hidden":"true"},"#")],-1),B=e("p",null,[t("By default, the template is configured to trigger a deployment on every push or Release to the GitHub repository. It can also be deployed manually providing the "),e("em",null,"tag"),t(" you want to redeploy.")],-1),L=e("p",null,[e("img",{src:c,alt:""})],-1),$=e("p",null,[t("This adhoc method can work with the default "),e("code",null,"latest"),t(" as well as any previous "),e("em",null,"tagged Releases"),t(" you have created. This provides a basic rollback mechanism. If you have been uses "),e("code",null,"Releases"),t("to tag your application, you can specify a tag, eg "),e("code",null,"v2"),t(" and the GitHub Action will do the following.")],-1),z=e("ul",null,[e("li",null,"Checkout your code at the specified tag"),e("li",null,[t("Rebuild and deploy your "),e("code",null,"ui")]),e("li",null,[t("Use the specified tag to change which version is running via "),e("code",null,"docker compose"),t(" on the remote server")])],-1),V=e("blockquote",null,[e("p",null,"By default, the remote server will assume the tagged Docker image exists and does not need to be rebuilt when using a specific tag for an adhoc release.")],-1),X=e("blockquote",null,[e("p",null,"The provided GitHub Actions are just a starting point for how to deploy your application. When your hosting requirements change you'll need to update your GitHub Actions to suit.")],-1),Q=e("h2",{id:"hosting",tabindex:"-1"},[t("Hosting "),e("a",{class:"header-anchor",href:"#hosting","aria-hidden":"true"},"#")],-1),K=e("p",null,[t("The template provides a "),e("em",null,"starting"),t(" point for hosting your ServiceStack application using a basic Linux host with Docker + "),e("code",null,"docker compose"),t(". How your ServiceStack server is hosted will depend on your needs and requirements. For example, to avoid CORS a CDN provider could also rewrite requests to different origins which would also free up your API to be hosted anyway you need without paying the overhead for additional CORS related requests.")],-1),Y=[u,d,h,k,g,f,m,y,w,v,_,b,S,x,j,A,P,T,I,H,J,N,D,R,C,G,M,F,O,U,W,E,q,B,L,$,z,V,X,Q,K];function Z(ee,te,ne,ae,oe,se){return s(),o("div",null,Y)}var ce=a(p,[["render",Z]]);export{re as __pageData,ce as default};
