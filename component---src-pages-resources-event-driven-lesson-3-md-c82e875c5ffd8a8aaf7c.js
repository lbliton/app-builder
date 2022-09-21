"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[6580],{40796:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return m}});var t=a(87462),i=a(63366),o=(a(15007),a(64983)),s=a(91515),r=["components"],p={},d={_frontmatter:p},l=s.Z;function m(e){var n=e.components,a=(0,i.Z)(e,r);return(0,o.mdx)(l,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"lesson-3-fire-an-event"},"Lesson 3: Fire an Event"),(0,o.mdx)("h2",{id:"fire-event"},"Fire Event"),(0,o.mdx)("p",null,"Once you set up the app and register the event provider, now you can make user click ",(0,o.mdx)("inlineCode",{parentName:"p"},"invoke")," button as fire event, this lesson will walk through the code in ",(0,o.mdx)("inlineCode",{parentName:"p"},"publish-event"),' template, test it on the UI with "invoke" button and see the success response (in this lession using webhook)'),(0,o.mdx)("p",null,"You can choose to use this template code at ",(0,o.mdx)("inlineCode",{parentName:"p"},"/actions/publish-events/index.js")," or create your own code.\nWithin the newly created app, Firstly, set up ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," with the lists of dependencies, version, etc.\nThen ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.yml")," lists the declaration of serverless actions including name, source files, runtime kind, default params, annotations, and so on. In this lesson, we will choose to use this template to modify the code to our need."),(0,o.mdx)("p",null,"Note: here put in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"providerId"),",",(0,o.mdx)("inlineCode",{parentName:"p"},"apiKey")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventCode"),"from lesson 2 in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.yml")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"orgId"),",",(0,o.mdx)("inlineCode",{parentName:"p"},"accessToken"),"can be passed through ",(0,o.mdx)("inlineCode",{parentName:"p"},"headers")),(0,o.mdx)("p",null,"Below is a sample ",(0,o.mdx)("inlineCode",{parentName:"p"},"app.config.yaml")," "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"application:\n  actions: actions\n  web: web-src\n  runtimeManifest:\n    packages:\n      my-app:\n        license: Apache-2.0\n        actions:\n          generic:\n            function: actions/generic/index.js\n            web: 'yes'\n            runtime: 'nodejs:14'\n            inputs:\n              LOG_LEVEL: debug\n            annotations:\n              require-adobe-auth: true\n              final: true\n      publish-events:\n        function: actions/publish-events/index.js\n        web: 'yes'\n        runtime: 'nodejs:14'\n        inputs:\n          LOG_LEVEL: debug\n          apiKey: <Your-SERVICE_API_KEY>\n          providerId: <YOUR-PROVIDER_ID>\n          eventCode: <YOUR-EVENT_CODE>\n        annotations:\n          final: true\n")),(0,o.mdx)("p",null,"Now let's start to take a deeper look the template code: "),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Source code is at ",(0,o.mdx)("inlineCode",{parentName:"li"},"actions/publish-events/index.js")),(0,o.mdx)("li",{parentName:"ul"},"It is a ",(0,o.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#invoking-actions"},"web action")),(0,o.mdx)("li",{parentName:"ul"},"The action will be run in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"nodejs:12")," ",(0,o.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/reference/runtimes.md"},"runtime container on I/O Runtime")),(0,o.mdx)("li",{parentName:"ul"},"It has some ",(0,o.mdx)("a",{parentName:"li",href:"/app-builder/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/guides/creating_actions.md#working-with-parameters"},"default params")," such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"LOG_LEVEL"),", you can pass in your ",(0,o.mdx)("inlineCode",{parentName:"li"},"params")," like ",(0,o.mdx)("inlineCode",{parentName:"li"},"apiKey"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"provideId")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"eventCode"),"from ",(0,o.mdx)("inlineCode",{parentName:"li"},"manifest.yml"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Core, Events } = require('@adobe/aio-sdk')\nconst uuid = require('uuid')\nconst cloudEventV1 = require('cloudevents-sdk/v1')\nconst { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['apiKey', 'providerId', 'eventCode', 'payload']\n    const requiredHeaders = ['Authorization', 'x-gw-ims-org-id']\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    // extract the user Bearer token from the Authorization header\n    const token = getBearerToken(params)\n\n    \n    // initialize the client\n    const orgId = params.__ow_headers['x-gw-ims-org-id']\n    const eventsClient = await Events.init(orgId, params.apiKey, token)\n\n    // Create cloud event for the given payload\n    const cloudEvent = createCloudEvent(params.providerId, params.eventCode, params.payload)\n\n    // Publish to I/O Events\n    const published = await eventsClient.publishEvent(cloudEvent)\n    let statusCode = 200\n    if (published === 'OK') {\n      logger.info('Published successfully to I/O Events')\n    } else if (published === undefined) {\n      logger.info('Published to I/O Events but there were not interested registrations')\n      statusCode = 204\n    }\n    const response = {\n      statusCode: statusCode,\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nfunction createCloudEvent(providerId, eventCode, payload) {\n  let cloudevent = cloudEventV1.event()\n    .data(payload)\n    .source('urn:uuid:' + providerId)\n    .type(eventCode)\n    .id(uuid.v4())\n  return cloudevent.format()\n}\nexports.main = main\n\n")),(0,o.mdx)("p",null,"What happens here is that the action exposes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"main")," function, which accepts a list of params from the client. It checks the required params for using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"cloudevents-sdk"),". "),(0,o.mdx)("p",null,"You can run the App Builder app locally by execute the below command with AIO CLI:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app run\n")),(0,o.mdx)("p",null,"This command will deploy the ",(0,o.mdx)("inlineCode",{parentName:"p"},"publish-event")," action into I/O Runtime, and spins up a local instance for the UI. When the app is up and running, it can be seen at ",(0,o.mdx)("inlineCode",{parentName:"p"},"https://localhost:9080"),". You should be able to see the UI of the app and it is also possible to access the app from ExC Shell: ",(0,o.mdx)("inlineCode",{parentName:"p"},"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080"),". You might be asked to log in using your Adobe ID.  When the website is opened, the UI is almost similar to what you see when deployed on localhost, except the ExC Shell on top of the UI."),(0,o.mdx)("p",null,"Once you are satisfied with your app, you can deploy your app by run below command:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app deploy\n")),(0,o.mdx)("p",null,"This command will deploy the app to your namespace, you will get the URL like\n",(0,o.mdx)("inlineCode",{parentName:"p"},"https://<Runtime-namespace>.adobeio-static.net/<project-name>-0.0.1/index.html"),"\nand you will see your deployed link in the terminal"),(0,o.mdx)("p",null,"Next, let's see how the web UI communicates with the backend. In ",(0,o.mdx)("inlineCode",{parentName:"p"},"web-src/src/components")," we already provide a template of UI.\nAfter you select the actions to ",(0,o.mdx)("inlineCode",{parentName:"p"},"publish-events")," and then click the ",(0,o.mdx)("inlineCode",{parentName:"p"},"invoke")," button, it will invoke the action. In the action, it will send out the event. When you invoke, you could also add actual params, in this example, we add ",(0,o.mdx)("inlineCode",{parentName:"p"},'{"payload": "you got a like"}'),", in the webhook result, you will see the payload showed in ",(0,o.mdx)("inlineCode",{parentName:"p"},'{"data": "you got a like"}'),"."),(0,o.mdx)("p",null,"Note: Here I use the webhook tool ",(0,o.mdx)("a",{parentName:"p",href:"https://io-webhook.herokuapp.com/"},"here")," to generate a webhook link and put this webhook to the console integration. You can use other webhook tool as discussed in lession 4. "),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"859px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/5530d/template-ui.webp 320w","/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/0c8fb/template-ui.webp 640w","/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/56b7d/template-ui.webp 859w"],sizes:"(max-width: 859px) 100vw, 859px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/dd4a7/template-ui.png 320w","/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/0f09e/template-ui.png 640w","/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/757fa/template-ui.png 859w"],sizes:"(max-width: 859px) 100vw, 859px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/8ea42fdde5505baa31fd8567f1de86f6/757fa/template-ui.png",alt:"templateui",title:"templateui",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1227px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/5530d/event-webhook-result.webp 320w","/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/0c8fb/event-webhook-result.webp 640w","/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/4c2fa/event-webhook-result.webp 1227w"],sizes:"(max-width: 1227px) 100vw, 1227px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/dd4a7/event-webhook-result.png 320w","/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/0f09e/event-webhook-result.png 640w","/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/b00dd/event-webhook-result.png 1227w"],sizes:"(max-width: 1227px) 100vw, 1227px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/9aa637622ca2f5a894adc08479ce48d9/b00dd/event-webhook-result.png",alt:"eventresult",title:"eventresult",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-event-driven-lesson-3-md-c82e875c5ffd8a8aaf7c.js.map