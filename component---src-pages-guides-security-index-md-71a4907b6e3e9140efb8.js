"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[8289],{46067:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return l}});var i=t(87462),n=t(63366),s=(t(15007),t(64983)),r=t(91515),d=["components"],p={},o={_frontmatter:p},c=r.Z;function l(e){var a=e.components,t=(0,n.Z)(e,d);return(0,s.mdx)(c,(0,i.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"security-overview"},"Security Overview"),(0,s.mdx)("h2",{id:"context"},"Context"),(0,s.mdx)("p",null,"Every application development project has its own security requirements. Even for seasoned developers, these critical requirements can lead to complex and time-consuming implementations with an inappropriate support at SDK and tools level."),(0,s.mdx)("p",null,"App Builder ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," are designed to expedite the implementation of the typical security requirements for cloud-native applications that deploy into Adobe's ecosystem."),(0,s.mdx)("p",null,"The following sections will focus on specific aspects of the security for App Builder Applications."),(0,s.mdx)("h2",{id:"securing-the-access-to-app-builder-applications"},"Securing the Access to App Builder Applications"),(0,s.mdx)("p",null,"Any interaction with ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product APIs")," needs to be authenticated against Adobe Identity Management Services (IMS).\nThe ",(0,s.mdx)("a",{parentName:"p",href:"understanding_authentication.md"},"Understanding Authentication")," guide is a good pre-read to get deeper preliminary insights on those services."),(0,s.mdx)("h3",{id:"adobe-ims-support-for-app-builder-applications"},"Adobe IMS Support for App Builder Applications"),(0,s.mdx)("p",null,"App Builder ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," help developers to ",(0,s.mdx)("a",{parentName:"p",href:"../../getting_started/index.md"},"bootstrap applications")," easily from application templates with ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app init"),".\nThese include templates for Runtime web actions, which integrate with the ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product APIs")," that can be extended with App Builder.\nAny generated action is initialized with boilerplate code based on App Builder ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK libraries"),". Out-of-the box, the following steps are implemented:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Validation that an Adobe IMS bearer token has been passed as Authorization header of the request which invoked this action"),(0,s.mdx)("li",{parentName:"ul"},"Extraction of this bearer token for further usage in the action"),(0,s.mdx)("li",{parentName:"ul"},"Instantiation of an API client, by using the appropriate product ",(0,s.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-sdk"},"SDK library")),(0,s.mdx)("li",{parentName:"ul"},"Pre-configured API call, passing the required credentials, by using the same product ",(0,s.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aio-sdk"},"SDK library"))),(0,s.mdx)("h3",{id:"securing-access-to-headless-app-builder-applications"},"Securing Access to Headless App Builder Applications"),(0,s.mdx)("p",null,"Headless applications (e.g. Runtime actions or sequences) are usually executed as a back-end service invoked by another service - another Adobe product or a 3rd party system. For example:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"A custom asset worker integrating with AEM Assets as a Cloud Service"),(0,s.mdx)("li",{parentName:"ul"},"An Adobe Campaign Standard Marketing Activity"),(0,s.mdx)("li",{parentName:"ul"},"A 3rd party CRM workflow")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/5530d/security-headless-access-sequence-diagram.webp 320w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/0c8fb/security-headless-access-sequence-diagram.webp 640w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/94b1e/security-headless-access-sequence-diagram.webp 1280w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/0b34d/security-headless-access-sequence-diagram.webp 1920w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/d5269/security-headless-access-sequence-diagram.webp 2560w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/956a7/security-headless-access-sequence-diagram.webp 2700w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/dd4a7/security-headless-access-sequence-diagram.png 320w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/0f09e/security-headless-access-sequence-diagram.png 640w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/bbbf7/security-headless-access-sequence-diagram.png 1280w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/ac7a9/security-headless-access-sequence-diagram.png 1920w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/c7a69/security-headless-access-sequence-diagram.png 2560w","/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/0b3fb/security-headless-access-sequence-diagram.png 2700w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/f474ec51fcf14806f5d677367d16f5b9/bbbf7/security-headless-access-sequence-diagram.png",alt:"Headless Access Sequence Diagram",title:"Headless Access Sequence Diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"A headless App Builder application requires to pass an Adobe IMS JWT access token in order to successfully call Adobe Product APIs. This token can be obtained within the ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/console"},"Developer Console"),", by accessing the corresponding App Builder project and workspace."),(0,s.mdx)("p",null,"However, its lifetime will be of 24 hours and it will expire afterwards. Consequently, developers have to manually refresh the token and update the application configuration every day. To automate this process, the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-ims"},"IMS SDK Library")," can be used to generate or renew the JWT access token directly from a custom Runtime action (which should not be a web-action so that no unauthorized user can access it)."),(0,s.mdx)("p",null,"This SDK library also uses the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"State SDK Library")," behind the scenes in order to persist the token in App Builder's cloud storage on behalf of the developer between two invocations of the Runtime action."),(0,s.mdx)("h3",{id:"securing-access-to-app-builder-spas"},"Securing Access to App Builder SPAs"),(0,s.mdx)("p",null,"These SPAs are business-to-employees custom applications that deploy into the ",(0,s.mdx)("a",{parentName:"p",href:"https://experience.adobe.com"},"Experience Cloud Shell")," for end-users of an Enterprise organization."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/1700f917ea589ed60705c8d7a99a7420/5530d/security-spa-access-sequence-diagram.webp 320w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/0c8fb/security-spa-access-sequence-diagram.webp 640w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/94b1e/security-spa-access-sequence-diagram.webp 1280w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/0b34d/security-spa-access-sequence-diagram.webp 1920w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/d5269/security-spa-access-sequence-diagram.webp 2560w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/7d067/security-spa-access-sequence-diagram.webp 3263w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/1700f917ea589ed60705c8d7a99a7420/dd4a7/security-spa-access-sequence-diagram.png 320w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/0f09e/security-spa-access-sequence-diagram.png 640w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/bbbf7/security-spa-access-sequence-diagram.png 1280w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/ac7a9/security-spa-access-sequence-diagram.png 1920w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/c7a69/security-spa-access-sequence-diagram.png 2560w","/app-builder/static/1700f917ea589ed60705c8d7a99a7420/397f6/security-spa-access-sequence-diagram.png 3263w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/1700f917ea589ed60705c8d7a99a7420/bbbf7/security-spa-access-sequence-diagram.png",alt:"SPA Access Sequence Diagram",title:"SPA Access Sequence Diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The SPA front-end interacts with Runtime web actions on specific events triggered at UI level.\nIn this scenario, the Experience Cloud Shell exposes a ",(0,s.mdx)("a",{parentName:"p",href:"../exc_app/index.md"},"client-side API"),", which can be used by the SPA to obtain the OAUth token generated for the logged-in Enterprise user.\nThis token will be used by back-end Runtime actions to call ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product APIs"),", which need to be integrated in this application."),(0,s.mdx)("p",null,"SPAs bootstrapped from the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," with ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app init")," automatically include a ",(0,s.mdx)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/"},"React-Spectrum")," based front-end that integrates with the Experience Cloud Shell ",(0,s.mdx)("a",{parentName:"p",href:"../exc_app/index.md"},"client-side API")," and sends the user OAuth token from the client to the invoked Runtime actions."),(0,s.mdx)("h3",{id:"authentication-and-authorization-handling"},"Authentication and Authorization Handling"),(0,s.mdx)("p",null,"Every App Builder Application gets integrated to an out-of-the-box Authentication and Authorization handling layer when deployed from the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," with ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),"."),(0,s.mdx)("p",null,"Whether the application is headless or an SPA, this extra-security layer will check that:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"There is a bearer token passed as Authorization header of the calling request"),(0,s.mdx)("li",{parentName:"ul"},"This token is validated successfully against Adobe IMS for authentication"),(0,s.mdx)("li",{parentName:"ul"},"This token is validated successfully against ",(0,s.mdx)("a",{parentName:"li",href:"https://exchange.adobe.com/"},"Adobe Exchange")," for authorization")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://exchange.adobe.com/"},"Adobe Exchange")," is the distribution platform for App Builder Applications. It will authorize a token if and only if:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The invoked back-end action belongs to the Enterprise organization for which the token has been emitted"),(0,s.mdx)("li",{parentName:"ul"},"The token is authorized to use the Adobe Product APIs, which are integrated in this App Builder Application")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/5530d/security-validator-architecture.webp 320w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/0c8fb/security-validator-architecture.webp 640w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/94b1e/security-validator-architecture.webp 1280w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/0b34d/security-validator-architecture.webp 1920w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/d5269/security-validator-architecture.webp 2560w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/eab66/security-validator-architecture.webp 2698w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/dd4a7/security-validator-architecture.png 320w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/0f09e/security-validator-architecture.png 640w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/bbbf7/security-validator-architecture.png 1280w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/ac7a9/security-validator-architecture.png 1920w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/c7a69/security-validator-architecture.png 2560w","/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/bda1b/security-validator-architecture.png 2698w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/026d35d8133fa1ce821be31ea09c3b8c/bbbf7/security-validator-architecture.png",alt:"Validator Architecture",title:"Validator Architecture",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The authentication and authorization validation is enabled by default for every Runtime action bootstrapped from the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," with ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app init")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app add action"),". This results in a specific ",(0,s.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," action annotation set to true in the application ",(0,s.mdx)("inlineCode",{parentName:"p"},"manifest.yml")," file:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"packages:\n  helloworld:\n    actions:\n      hello:\n        function: hello.js\n        web: 'yes'\n        annotations:\n          require-adobe-auth: true\n")),(0,s.mdx)("p",null,"Upon deployment with ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app deploy"),", the manifest will be dynamically rewritten and replace the custom Runtime actions by Runtime sequences. The action definition above will by seamlessly rewritten into:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"packages:\n  helloworld:\n    actions:\n      __secured_hello:\n        # non-web\n        function: hello.js\n    sequences:\n      hello: \n        actions: '/adobeio/shared-validators/<validator>,helloworld/__secured_hello'\n        web: 'yes'\n")),(0,s.mdx)("p",null,"The first action of the sequence is an out-of-the-box shared action. All data required to authenticate and authorize the calling client is extracted from the incoming request.\nThis data is passed to an out-of-the-box service, which performs the necessary validation against Adobe IMS and Adobe Exchange. The custom action invocation will be chained if and only if the validation is successful, as highlighted on the sequence diagram below:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/44ee4998c537958d24edff84502b46f9/5530d/security-validator-detailed-sequence-diagram.webp 320w","/app-builder/static/44ee4998c537958d24edff84502b46f9/0c8fb/security-validator-detailed-sequence-diagram.webp 640w","/app-builder/static/44ee4998c537958d24edff84502b46f9/94b1e/security-validator-detailed-sequence-diagram.webp 1280w","/app-builder/static/44ee4998c537958d24edff84502b46f9/0b34d/security-validator-detailed-sequence-diagram.webp 1920w","/app-builder/static/44ee4998c537958d24edff84502b46f9/d5269/security-validator-detailed-sequence-diagram.webp 2560w","/app-builder/static/44ee4998c537958d24edff84502b46f9/2b92c/security-validator-detailed-sequence-diagram.webp 3259w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/44ee4998c537958d24edff84502b46f9/dd4a7/security-validator-detailed-sequence-diagram.png 320w","/app-builder/static/44ee4998c537958d24edff84502b46f9/0f09e/security-validator-detailed-sequence-diagram.png 640w","/app-builder/static/44ee4998c537958d24edff84502b46f9/bbbf7/security-validator-detailed-sequence-diagram.png 1280w","/app-builder/static/44ee4998c537958d24edff84502b46f9/ac7a9/security-validator-detailed-sequence-diagram.png 1920w","/app-builder/static/44ee4998c537958d24edff84502b46f9/c7a69/security-validator-detailed-sequence-diagram.png 2560w","/app-builder/static/44ee4998c537958d24edff84502b46f9/6c285/security-validator-detailed-sequence-diagram.png 3259w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/44ee4998c537958d24edff84502b46f9/bbbf7/security-validator-detailed-sequence-diagram.png",alt:"Validator Architecture",title:"Validator Architecture",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"A developer can still choose to unprotect a specific action by setting the ",(0,s.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," annotation to ",(0,s.mdx)("inlineCode",{parentName:"p"},"false")," or by deleting it and redeploying the application with ",(0,s.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," afterwards.\nHowever, we strongly recommend to validate these changes against the application security requirements, and to keep the ",(0,s.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," annotation value to ",(0,s.mdx)("inlineCode",{parentName:"p"},"true")," for any action integrating with one or several ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/apis"},"Adobe Product APIs"),"."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Note:")," App Builder doesn't offer 3rd party API management at this stage, and similar authentication/authorization handling against 3rd party services should be managed by developers within their custom action codes for the time being."),(0,s.mdx)("h4",{id:"known-issue-final-and-web-annotations"},"Known Issue: Final and Web Annotations"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," annotation is not compatible with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"final")," annotation, which is protecting default parameters in web actions. More precisely, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"final")," annotation won't have any effect when the ",(0,s.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth")," annotation is set.\nThis also impacts other web action annotations such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"web-custom-options"),".\nSee ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli-plugin-runtime/issues/150"},"https://github.com/adobe/aio-cli-plugin-runtime/issues/150")," for more details."),(0,s.mdx)("p",null,"A workaround for supporting final parameters without relying on the ",(0,s.mdx)("inlineCode",{parentName:"p"},"final")," annotation is to set them using the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"State")," SDK. Parameters set in State will be shared among actions running within the same namespace. You can set a permanent value in State from outside an Adobe I/O Runtime action by calling this endpoint: "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -u <owAuth> https://adobeio.adobeioruntime.net/api/v1/web/state/put \\\n-H \'Content-Type: application/json\' \\\n--data \'{"namespace":"<owNamespace>","key":"<stateKey>","value":"<stateValue>","ttl":"-1"}\'\n')),(0,s.mdx)("p",null,"However, note that we ",(0,s.mdx)("strong",{parentName:"p"},"strongly discourage")," using the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"State")," SDK in order to store secrets that could be reused within Adobe I/O Runtime actions. For this, developers should use an appropriate Secret Vault to fulfil their custom application requirements."),(0,s.mdx)("h4",{id:"known-issue-2-additional-scope-for-jwt-access-token-validation"},"Known Issue 2: Additional scope for JWT access token validation"),(0,s.mdx)("p",null,"The validator action enabled by ",(0,s.mdx)("inlineCode",{parentName:"p"},"require-adobe-auth: true")," annotation requires the provided IMS access token to have the ",(0,s.mdx)("inlineCode",{parentName:"p"},"read_organizations")," scope. While it is always the case for user tokens used in SPAs, the JWT access tokens used in headless applicationss may not have this scope. This will be the case if it is generated to integrate with the following services:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Adobe Analytics"),(0,s.mdx)("li",{parentName:"ul"},"Adobe Campaign Standard"),(0,s.mdx)("li",{parentName:"ul"},"No API Service enabled")),(0,s.mdx)("p",null,'In these cases, the "I/O Management API" service must be added to the appropriate App Builder workspace. This will add the required scope to the JWT access token used by the headless application.'),(0,s.mdx)("h2",{id:"securing-app-builder-applications"},"Securing App Builder Applications"),(0,s.mdx)("h3",{id:"io-runtime-specific-guidelines"},"I/O Runtime Specific guidelines"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/runtime/docs/guides/using/security_general/"},"security guidelines for I/O Runtime")," generally apply for the back-end actions of an App Builder application."),(0,s.mdx)("p",null,"The guidelines below are specific to App Builder applications."),(0,s.mdx)("h3",{id:"transport-security"},"Transport Security"),(0,s.mdx)("p",null,"Developers building App Builder Applications on top of the out-of-the-box infrastructure will benefit from HTTPS connections between all the components that are part of this infrastructure."),(0,s.mdx)("p",null,"We strongly recommend to ensure that every 3rd party system or service integrating with an App Builder Application supports HTTPS connections as well."),(0,s.mdx)("h3",{id:"tenant-isolation"},"Tenant Isolation"),(0,s.mdx)("p",null,"App Builder Applications and Services provide tenant isolation by default.\nAn App Builder Application gets deployed into an App Builder Workspace defined within the ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/console"},"Developer Console")," for a give App Builder project.\nEach App Builder Workspace owns its own Runtime namespace."),(0,s.mdx)("p",null,"This combination of ",(0,s.mdx)("inlineCode",{parentName:"p"},"Enterprise Organization"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"Project"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"Workspace")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"Runtime Namespace")," define a granular tenant isolation for each deployed App Builder Application."),(0,s.mdx)("h4",{id:"runtime-actions"},"Runtime Actions"),(0,s.mdx)("p",null,"The back-end Runtime actions used by an App Builder Application respect the ",(0,s.mdx)("a",{parentName:"p",href:"/app-builder/apis/experienceplatform/runtime/docs#!adobedocs/adobeio-runtime/master/quickstart.md#security-considerations"},"tenant isolation model")," implemented by I/O Runtime."),(0,s.mdx)("h4",{id:"cloud-storage-and-cdn-for-spa-static-files"},"Cloud Storage and CDN for SPA Static Files"),(0,s.mdx)("p",null,"If an App Builder Application is an SPA that deploys into the ",(0,s.mdx)("a",{parentName:"p",href:"https://experience.adobe.com"},"Experience Cloud Shell"),", the static assets of the SPA get deployed from the  or from a ",(0,s.mdx)("a",{parentName:"p",href:"../deployment/ci_cd_for_firefly_apps.md"},"CI/CD pipeline")," to App Builder's Cloud Storage and CDN."),(0,s.mdx)("p",null,"Both of them have a strict isolation per Runtime namespace. It is only possible to access the Cloud Storage container hosting an App Builder SPA by configuring the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," with the appropriate workspace credentials."),(0,s.mdx)("p",null,"The CDN serves these static assets from a sub-domain exclusively dedicated to the Runtime namespace associated to the App Builder Application workspace to which the SPA is deployed."),(0,s.mdx)("h4",{id:"files--state-services"},"Files & State Services"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-files"},"Files")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-state"},"State")," SDK libraries from the App Builder SDK provide an abstraction to interact with App Builder Cloud Storage and Key-Value Store from a Runtime action.\nThe access to the data stored in these underlying services is restricted to the Runtime namespace in which the action is executed."),(0,s.mdx)("h4",{id:"app-builder-apps-service"},"App Builder Apps Service"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"App Builder Apps")," application available to each Enterprise Organization within the Experience Cloud Shell is nothing more than an App Builder Application that is deployed following the access and isolation paradigms documented in this guide."),(0,s.mdx)("h2",{id:"summary"},"Summary"),(0,s.mdx)("p",null,"App Builder ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-sdk"},"SDK")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"CLI")," provide out-of-the-box support for developers to implement secure Adobe-native applications that deploy into App Builder serverless infrastructure and integrate with Adobe Product APIs."),(0,s.mdx)("p",null,"Developers are able to build serverless processes and user-context aware applications with minimal knowledge of Adobe's authentication and authorization mechanisms for the Enterprise while not having to worry about other key concepts such as tenant isolation."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-security-index-md-71a4907b6e3e9140efb8.js.map