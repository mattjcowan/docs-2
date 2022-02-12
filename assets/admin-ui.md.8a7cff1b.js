import{_ as a,a as t,b as e}from"./users-edit-custom.a95552f3.js";import{_ as o,c,o as p,b as n,e as s}from"./app.25a431af.js";const j='{"title":"Admin UI","description":"","frontmatter":{"slug":"admin-ui","title":"Admin UI"},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Managing Users","slug":"managing-users"},{"level":2,"title":"Customization","slug":"customization"}],"relativePath":"admin-ui.md","lastUpdated":1644680219599}',u={},l=n("p",null,[s("Admin UI provides user management functionality at "),n("code",null,"/admin-ui"),s(" path when the "),n("code",null,"AdminUsersFeature"),s(" plugin is added to your application.")],-1),i=n("h2",{id:"installation",tabindex:"-1"},[s("Installation "),n("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#")],-1),k=n("div",{class:"language-csharp"},[n("pre",null,[n("code",null,[s("Plugins"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},"AdminUsersFeature"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),r=n("a",{href:"https://blazor-wasm-api.jamstacks.net/admin-ui"},[n("h3",{class:"text-center font-medium text-3xl mb-3"},"/admin-ui"),n("div",{class:"block p-4 rounded shadow hover:shadow-lg"},[n("img",{src:a})])],-1),d=n("p",null,[s("By default, it also shows some simple API stats on your Admin UI dashboard, linked to the "),n("a",{href:"./api-explorer.html"},"API Explorer"),s(".")],-1),m=n("p",null,[s("The Admin UI was designed with room to grow. You can let us know what features you would find most valuable on our "),n("a",{href:"https://github.com/ServiceStack/Discuss/discussions/2",target:"_blank",rel:"noopener noreferrer"},"GitHub Discussions"),s(".")],-1),h=n("div",{class:"info custom-block"},[n("p",{class:"custom-block-title"},"INFO"),n("p",null,[s("An "),n("code",null,"IAuthRepository"),s(" is required to be a registered dependency to use the "),n("code",null,"AdminUsersFeature"),s(" plugin.")])],-1),y=n("h2",{id:"managing-users",tabindex:"-1"},[s("Managing Users "),n("a",{class:"header-anchor",href:"#managing-users","aria-hidden":"true"},"#")],-1),w=n("p",null,[s("By default, the Add and Edit Users forms contains the default layout of common properties in "),n("a",{href:"https://github.com/ServiceStack/ServiceStack/blob/master/src/ServiceStack/Auth/UserAuth.cs",target:"_blank",rel:"noopener noreferrer"},"UserAuth.cs")],-1),g=n("div",{class:"flex justify-center py-8"},[n("a",{href:"https://blazor-wasm-api.jamstacks.net/admin-ui/users?edit=2"},[n("img",{src:t,style:{"max-width":"800px"}})])],-1),f=n("h2",{id:"customization",tabindex:"-1"},[s("Customization "),n("a",{class:"header-anchor",href:"#customization","aria-hidden":"true"},"#")],-1),_=n("p",null,[s("To customize this user interface to accommodate custom properties, the "),n("code",null,"UserFormLayout"),s(" needs to be overridden.")],-1),A=n("p",null,[s("For example, below we have a custom "),n("code",null,"UserAuth"),s(" called "),n("code",null,"AppUser"),s(" with additional properties.")],-1),U=n("div",{class:"language-csharp"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// Custom User Table with extended Metadata properties"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AppUser"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token type-list"},[n("span",{class:"token class-name"},"UserAuth")]),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},"Department"),s(" Department "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"?")]),s(" ProfileUrl "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"string"),n("span",{class:"token punctuation"},"?")]),s(" LastLoginIp "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[n("span",{class:"token keyword"},"bool")]),s(" IsArchived "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[s("DateTime"),n("span",{class:"token punctuation"},"?")]),s(" ArchivedDate "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token return-type class-name"},[s("DateTime"),n("span",{class:"token punctuation"},"?")]),s(" LastLoginDate "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"get"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"set"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"enum"),s(),n("span",{class:"token class-name"},"Department"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    None`),n("span",{class:"token punctuation"},","),s(`
    Marketing`),n("span",{class:"token punctuation"},","),s(`
    Accounts`),n("span",{class:"token punctuation"},","),s(`
    Legal`),n("span",{class:"token punctuation"},","),s(`
    HumanResources`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),x=n("p",null,[s("The "),n("code",null,"AdminUsersFeature"),s(" has multiple fiends that can be used to customize the UI including.")],-1),b=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"Property Name"),n("th",null,"Description")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("code",null,"QueryUserAuthProperties")]),n("td",null,"Columns visible in query results for users.")]),n("tr",null,[n("td",null,[n("code",null,"QueryMediaRules")]),n("td",null,[s("Which columns "),n("em",null,"start"),s(" appearing at different screen sizes.")])]),n("tr",null,[n("td",null,[n("code",null,"UserFormLayout")]),n("td",null,"Control which fields are used for Create/Edit and their placement.")])])],-1),v=n("p",null,[s("Similar to the "),n("a",{href:"./api-explorer.html#formlayout"},"API Explorer"),s(),n("code",null,"FormLayout"),s(" customization, "),n("code",null,"UserFormLayout"),s(" is used to control placement and details about individual fields.")],-1),I=n("div",{class:"language-csharp"},[n("pre",null,[n("code",null,[s("appHost"),n("span",{class:"token punctuation"},"."),s("Plugins"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token constructor-invocation class-name"},[s("ServiceStack"),n("span",{class:"token punctuation"},"."),s("Admin"),n("span",{class:"token punctuation"},"."),s("AdminUsersFeature")]),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Show custom fields in Search Results"),s(`
    QueryUserAuthProperties `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"nameof"),n("span",{class:"token punctuation"},"("),s("AppUser"),n("span",{class:"token punctuation"},"."),s("Id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"nameof"),n("span",{class:"token punctuation"},"("),s("AppUser"),n("span",{class:"token punctuation"},"."),s("Email"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"nameof"),n("span",{class:"token punctuation"},"("),s("AppUser"),n("span",{class:"token punctuation"},"."),s("DisplayName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"nameof"),n("span",{class:"token punctuation"},"("),s("AppUser"),n("span",{class:"token punctuation"},"."),s("Department"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"nameof"),n("span",{class:"token punctuation"},"("),s("AppUser"),n("span",{class:"token punctuation"},"."),s("CreatedDate"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"nameof"),n("span",{class:"token punctuation"},"("),s("AppUser"),n("span",{class:"token punctuation"},"."),s("LastLoginDate"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    QueryMediaRules `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        MediaRules`),n("span",{class:"token punctuation"},"."),s("ExtraSmall"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"Show"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token punctuation"},"{"),s(" x"),n("span",{class:"token punctuation"},"."),s("Id"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},"."),s("Email"),n("span",{class:"token punctuation"},","),s(" x"),n("span",{class:"token punctuation"},"."),s("DisplayName "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        MediaRules`),n("span",{class:"token punctuation"},"."),s("Small"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"Show"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("Department"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// Add Custom Fields to Create/Edit User Forms"),s(`
    UserFormLayout `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("Email"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("DisplayName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("Company"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("Department"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("PhoneNumber"),n("span",{class:"token punctuation"},","),s(" c "),n("span",{class:"token operator"},"=>"),s(" c"),n("span",{class:"token punctuation"},"."),s("Type "),n("span",{class:"token operator"},"="),s(" Input"),n("span",{class:"token punctuation"},"."),s("Types"),n("span",{class:"token punctuation"},"."),s("Tel"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("Nickname"),n("span",{class:"token punctuation"},","),s(" c "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
                c`),n("span",{class:"token punctuation"},"."),s("Help "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"Public alias (3-12 lower alpha numeric chars)"'),n("span",{class:"token punctuation"},";"),s(`
                c`),n("span",{class:"token punctuation"},"."),s("Pattern "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"^[a-z][a-z0-9_.-]{3,12}$"'),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token comment"},"//c.Required = true;"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("ProfileUrl"),n("span",{class:"token punctuation"},","),s(" c "),n("span",{class:"token operator"},"=>"),s(" c"),n("span",{class:"token punctuation"},"."),s("Type "),n("span",{class:"token operator"},"="),s(" Input"),n("span",{class:"token punctuation"},"."),s("Types"),n("span",{class:"token punctuation"},"."),s("Url"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token keyword"},"new"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            Input`),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("IsArchived"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" Input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token generic-method"},[n("span",{class:"token function"},"For"),n("span",{class:"token generic class-name"},[n("span",{class:"token punctuation"},"<"),s("AppUser"),n("span",{class:"token punctuation"},">")])]),n("span",{class:"token punctuation"},"("),s("x "),n("span",{class:"token operator"},"=>"),s(" x"),n("span",{class:"token punctuation"},"."),s("ArchivedDate"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])])],-1),F=n("p",null,[s("Enabling the use of custom properties as well as formatting for ease of use. "),n("code",null,"UserFormLayout"),s(" updates the "),n("code",null,"Create"),s(" and "),n("code",null,"Edit"),s(" screens in the Admin UI.")],-1),D=n("div",{class:"flex justify-center py-8"},[n("a",{href:"https://blazor-wasm-api.jamstacks.net/admin-ui/users?edit=2"},[n("img",{src:e,style:{"max-width":"800px"}})])],-1),S=[l,i,k,r,d,m,h,y,w,g,f,_,A,U,x,b,v,I,F,D];function z(P,L,E,T,C,N){return p(),c("div",null,S)}var B=o(u,[["render",z]]);export{j as __pageData,B as default};
