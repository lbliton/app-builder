"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[1607],{27999:function(e,n,s){s.r(n),s.d(n,{_frontmatter:function(){return c},default:function(){return p}});var r=s(87462),o=s(63366),t=(s(15007),s(64983)),a=s(91515),i=["components"],c={},l={_frontmatter:c},u=a.Z;function p(e){var n=e.components,s=(0,o.Z)(e,i);return(0,t.mdx)(u,(0,r.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"io-events-handler"},"I/O Events handler"),(0,t.mdx)("p",null,"Demonstrating how to write an event handler for webhook calls. This action is expose as a web action, you can use its URL to register as a webhook for I/O Events."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Demonstrating how to write an event handler for webhook calls\n *\n * This action is expose as a web action, you can use its URL to register as a webhook for I/O Events\n */\nconst { Core } = require('@adobe/aio-sdk')\nconst fetch = require('node-fetch')\nconst { errorResponse, stringParameters, checkMissingRequestInputs } = require('../utils')\n\n// Set up an Incoming Webhooks for your team: https://api.slack.com/incoming-webhooks\n// Then update the following variables with your slack config values\nconst slackWebhook = 'https://hooks.slack.com/services/AAA/BBB/CCC'\nconst slackChannel = 'general'\n\n// main function that will be executed by Adobe I/O Runtime\nasync function main (params) {\n  // create a Logger\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n\n  try {\n    // 'info' is the default level if not set\n    logger.info('Calling the main action')\n\n    // log parameters, only if params.LOG_LEVEL === 'debug'\n    logger.debug(stringParameters(params))\n\n    if (params.challenge) {\n      return { body: { challenge: params.challenge } }\n    }\n\n    // check for missing request input parameters and headers\n    const requiredParams = ['event']\n    const requiredHeaders = []\n    const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)\n    if (errorMessage) {\n      // return and log client errors\n      return errorResponse(400, errorMessage, logger)\n    }\n\n    // NOTE: please customize the following lines based on the event object data type you receive from I/O Events\n    const eventDetail = params.event['activitystreams:object']\n     \n    const slackMessage = params.event['@type'] + \" Event for: \" + eventDetail['xdmAsset:asset_name'] + \" at \" + eventDetail['xdmAsset:path']\n      \n    const payload = {\n      channel: slackChannel,\n      username: 'incoming-webhook',\n      text: slackMessage,\n      mrkdwn: true\n    }\n      \n    var slackOpts = {\n      method: 'POST',\n      headers: {\n        'Cache-Control': 'no-cache',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(payload)\n    }\n\n    await fetch(slackWebhook, slackOpts)\n\n    const response = {\n      statusCode: 200,\n      body: { message: 'posted to slack' }\n    }\n\n    // log the response status code\n    logger.info(`${response.statusCode}: successful request`)\n    return response\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n\nexports.main = main\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-sample-apps-code-snippets-events-md-3f35659e526895312817.js.map