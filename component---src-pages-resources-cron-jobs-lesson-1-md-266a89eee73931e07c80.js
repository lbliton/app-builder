"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[1473],{70002:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return l}});var n=t(87462),i=t(63366),p=(t(15007),t(64983)),d=t(91515),o=["components"],r={},s={_frontmatter:r},c=d.Z;function l(e){var a=e.components,t=(0,i.Z)(e,o);return(0,p.mdx)(c,(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"lesson-1-bootstrap-a-headless-app"},"Lesson 1: Bootstrap a Headless App"),(0,p.mdx)("p",null,"First of all, you need a new headless app created with AIO CLI. This app only needs a simple action to test the cron job, so all other components are deselected.\nFollow this ",(0,p.mdx)("a",{parentName:"p",href:"../../getting_started/first_app.md"},"Creating your First App Builder Application")),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/5530d/app-init.webp 320w","/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/0c8fb/app-init.webp 640w","/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/94b1e/app-init.webp 1280w","/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/fee8c/app-init.webp 1362w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/dd4a7/app-init.png 320w","/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/0f09e/app-init.png 640w","/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/bbbf7/app-init.png 1280w","/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/7046d/app-init.png 1362w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/c7dc1c4419d73d908aa0d4836f16fcdf/bbbf7/app-init.png",alt:"app-init",title:"app-init",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("p",null,"Now let's go to the action code at ",(0,p.mdx)("inlineCode",{parentName:"p"},"actions/generic/index.js")," to simplify what it does. We make it print the current execution time to logs and return it in the result."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Core } = require('@adobe/aio-sdk')\n\nasync function main (params) {\n  const logger = Core.Logger('main', { level: 'info' })\n\n  try {\n    logger.info('Calling the main action')\n    const currentTime = new Date()\n    logger.info(`Current time is ${currentTime.toLocaleString()}.`)\n\n    return {\n      timeInMilliseconds: currentTime.getTime(),\n      timeInString: currentTime.toLocaleString()\n    }\n  } catch (error) {\n    logger.error(error)\n    return { error }\n  }\n}\n\nexports.main = main\n")),(0,p.mdx)("p",null,"Because the action is only invoked by the internal alarms, it does not need to be exposed as a web action. That would prevent the action to be accessed by unprivileged users. Your manifest file should look the same as below."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-yaml"},"application:\n  actions: actions\n  web: web-src\n  runtimeManifest:\n    packages:\n      my-app:\n        license: Apache-2.0\n        actions:\n          generic:\n            function: actions/generic/index.js\n            web: 'yes'\n            runtime: 'nodejs:14'\n")),(0,p.mdx)("p",null,"In order to test the action, you could execute ",(0,p.mdx)("inlineCode",{parentName:"p"},"aio app deploy")," in the VSCode terminal. Once the deployment is finished, run ",(0,p.mdx)("inlineCode",{parentName:"p"},"aio rt action invoke your-app-name/generic"),", and then verify its result and logs using ",(0,p.mdx)("inlineCode",{parentName:"p"},"aio rt activation get ID")," and ",(0,p.mdx)("inlineCode",{parentName:"p"},"aio rt activation logs ID")," (",(0,p.mdx)("inlineCode",{parentName:"p"},"ID")," is available in the output of the invoke command earlier). Below is an extract of result from the activation info."),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/5530d/activation-get.webp 320w","/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/0c8fb/activation-get.webp 640w","/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/66151/activation-get.webp 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/dd4a7/activation-get.png 320w","/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/0f09e/activation-get.png 640w","/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/6535c/activation-get.png 802w"],sizes:"(max-width: 802px) 100vw, 802px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/f2d1c58d1690890a975960d3a0d1294d/6535c/activation-get.png",alt:"activation-get",title:"activation-get",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-cron-jobs-lesson-1-md-266a89eee73931e07c80.js.map