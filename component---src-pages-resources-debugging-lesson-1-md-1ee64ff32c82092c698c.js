"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[582],{90061:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return s}});var i=t(87462),p=t(63366),n=(t(15007),t(64983)),d=t(91515),b=["components"],c={},r={_frontmatter:c},o=d.Z;function s(e){var a=e.components,t=(0,p.Z)(e,b);return(0,n.mdx)(o,(0,i.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"lesson-1-getting-familiar-with-debugger"},"Lesson 1: Getting familiar with Debugger"),(0,n.mdx)("p",null,"First of all, you need a new app created with AIO CLI."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/5530d/app-init.webp 320w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/0c8fb/app-init.webp 640w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/94b1e/app-init.webp 1280w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/0b34d/app-init.webp 1920w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/432f7/app-init.webp 2204w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/dd4a7/app-init.png 320w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/0f09e/app-init.png 640w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/bbbf7/app-init.png 1280w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/ac7a9/app-init.png 1920w","/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/22952/app-init.png 2204w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/1b342e2afac84a3ab2fb902fb11dfe54/bbbf7/app-init.png",alt:"app-init",title:"app-init",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Then, open the app in VSCode, and execute ",(0,n.mdx)("inlineCode",{parentName:"p"},"aio app run")," in the terminal. Optionally, you can add ",(0,n.mdx)("inlineCode",{parentName:"p"},"--local")," flag to make your actions run in the local OpenWhisk environment, as well as ",(0,n.mdx)("inlineCode",{parentName:"p"},"--verbose")," flag to see more inspection details of your deployment."),(0,n.mdx)("p",null,"You will see the VSCode launch profile automatically generated in ",(0,n.mdx)("inlineCode",{parentName:"p"},".vscode/launch.json"),", with a few available configurations:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"Action:test-app-debug-0.0.1/hello"),": for debugging the ",(0,n.mdx)("inlineCode",{parentName:"li"},"hello")," action"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"Web"),": for debugging the UI components"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"Actions")," (compound): for debugging all actions"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"WebAndActions")," (compound): for debugging all actions and UI components (end to end)")),(0,n.mdx)("p",null,'Let\'s navigate to the "Run" mode.'),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/5530d/debug-config.webp 320w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/0c8fb/debug-config.webp 640w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/94b1e/debug-config.webp 1280w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/0b34d/debug-config.webp 1920w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/d5269/debug-config.webp 2560w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/53dbb/debug-config.webp 3360w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/dd4a7/debug-config.png 320w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/0f09e/debug-config.png 640w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/bbbf7/debug-config.png 1280w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/ac7a9/debug-config.png 1920w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/c7a69/debug-config.png 2560w","/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/20759/debug-config.png 3360w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/e0b8088c595cd2d1025dbc8949dff346/bbbf7/debug-config.png",alt:"debug-config",title:"debug-config",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Select the ",(0,n.mdx)("inlineCode",{parentName:"p"},"WebAndActions")," profile, and click the Start Debugging button."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/5530d/run-debug.webp 320w","/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/0c8fb/run-debug.webp 640w","/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/94b1e/run-debug.webp 1280w","/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/21196/run-debug.webp 1741w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/dd4a7/run-debug.png 320w","/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/0f09e/run-debug.png 640w","/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/bbbf7/run-debug.png 1280w","/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/20b9f/run-debug.png 1741w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/4e2cb78e88281ae19a9db0cf67311f9d/bbbf7/run-debug.png",alt:"run-debug",title:"run-debug",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"You will see the web UI appearing immediately after that. However, the action launch would take some time (usually up to 10 seconds). You could verify that the action is ready in the Action view of Debug Console."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.312500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/83a84b01ea6b86b85c589c628873ee13/5530d/action-ready.webp 320w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/0c8fb/action-ready.webp 640w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/94b1e/action-ready.webp 1280w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/0b34d/action-ready.webp 1920w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/1caea/action-ready.webp 2471w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/83a84b01ea6b86b85c589c628873ee13/dd4a7/action-ready.png 320w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/0f09e/action-ready.png 640w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/bbbf7/action-ready.png 1280w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/ac7a9/action-ready.png 1920w","/app-builder/static/83a84b01ea6b86b85c589c628873ee13/8304c/action-ready.png 2471w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/83a84b01ea6b86b85c589c628873ee13/bbbf7/action-ready.png",alt:"action-ready",title:"action-ready",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"Try invoking the ",(0,n.mdx)("inlineCode",{parentName:"p"},"hello")," action from the user form on UI, you will see an error ",(0,n.mdx)("inlineCode",{parentName:"p"},"Failure! See the error in your browser console."),". That's all good for now."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.93750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/3738b1575a516ce6320988a005b4ed2c/5530d/try-invoke.webp 320w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/0c8fb/try-invoke.webp 640w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/94b1e/try-invoke.webp 1280w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/0b34d/try-invoke.webp 1920w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/82f9f/try-invoke.webp 2404w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/3738b1575a516ce6320988a005b4ed2c/dd4a7/try-invoke.png 320w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/0f09e/try-invoke.png 640w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/bbbf7/try-invoke.png 1280w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/ac7a9/try-invoke.png 1920w","/app-builder/static/3738b1575a516ce6320988a005b4ed2c/bef4b/try-invoke.png 2404w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/3738b1575a516ce6320988a005b4ed2c/bbbf7/try-invoke.png",alt:"try-invoke",title:"try-invoke",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-debugging-lesson-1-md-1ee64ff32c82092c698c.js.map