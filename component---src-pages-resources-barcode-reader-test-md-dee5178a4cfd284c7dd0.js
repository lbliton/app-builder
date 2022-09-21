"use strict";(self.webpackChunkadobe_developer_app_builder=self.webpackChunkadobe_developer_app_builder||[]).push([[9322],{52148:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return l}});var n=a(87462),s=a(63366),r=(a(15007),a(64983)),i=a(91515),o=["components"],d={},p={_frontmatter:d},c=i.Z;function l(e){var t=e.components,a=(0,s.Z)(e,o);return(0,r.mdx)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"lesson-3-testing-a-serverless-action"},"Lesson 3: Testing a Serverless Action"),(0,r.mdx)("p",null,"An App Builder App created with ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio app init")," has a ",(0,r.mdx)("a",{parentName:"p",href:"https://jestjs.io/"},"jest")," test structure by default. We'll show how to take advantage of it."),(0,r.mdx)("h2",{id:"unit-tests"},"Unit Tests"),(0,r.mdx)("p",null,"Under ",(0,r.mdx)("inlineCode",{parentName:"p"},"test/actions"),", you should see a file named ",(0,r.mdx)("inlineCode",{parentName:"p"},"barcode.test.js"),". We'll add our barcode action unit tests in there.\nFirst we're adding required dependencies like the action itself, the logger and ",(0,r.mdx)("inlineCode",{parentName:"p"},"bwip-js")," that we'll mock using jest utilities.   "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Core } = require('@adobe/aio-sdk');\nconst bwipjs = require('bwip-js');\nconst action = require('./../../actions/barcode/index.js');\n\njest.mock('@adobe/aio-sdk', () => ({\n  Core: {\n    Logger: jest.fn()\n  }\n}));\n\nconst mockLoggerInstance = {\n  info: jest.fn(),\n  debug: jest.fn(),\n  error: jest.fn()\n};\nCore.Logger.mockReturnValue(mockLoggerInstance);\n\njest.mock('bwip-js');\n\nbeforeEach(() => {\n  Core.Logger.mockClear();\n  mockLoggerInstance.info.mockReset();\n  mockLoggerInstance.debug.mockReset();\n  mockLoggerInstance.error.mockReset();\n});\n\n// Test parameters\nconst params = {\n  value: 'test'\n};\n")),(0,r.mdx)("p",null,"The first test which is bootstrapped by default is testing that our action is exporting a main function which is a main requirement for all actions."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('main should be defined', () => {\n  expect(action.main).toBeInstanceOf(Function);\n});\n")),(0,r.mdx)("p",null,"The second test which is also bootstrapped is testing the log level defined in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"manifest.yml")," for our barcode action which is defined as ",(0,r.mdx)("inlineCode",{parentName:"p"},"LOG_LEVEL: debug")," by default."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('should set logger to use LOG_LEVEL param', async () => {\n  await action.main({\n    LOG_LEVEL: 'level'\n  });\n  expect(Core.Logger).toHaveBeenCalledWith(expect.any(String), { level: 'level' });\n});\n")),(0,r.mdx)("p",null,"Next we'll verify that a successful 200 http action response also returns the correct ",(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"body"),".\nFor that, we'll mock ",(0,r.mdx)("inlineCode",{parentName:"p"},"bwipjs.toBuffer")," to respond with fake data:   "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('should return a 200 http response', async () => {\n  bwipjs.toBuffer.mockResolvedValue('barcode');\n    \n  const response = await action.main(params);\n  expect(response.statusCode).toEqual(200);\n  expect(response.headers['Content-Type']).toEqual('image/png');\n  expect(response.body).toEqual('barcode');\n});\n")),(0,r.mdx)("p",null,"We'll use the same mechanism to verify a 500 http action response by mocking an error: "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('if there is an error should return a 500 and log the error', async () => {\n  const error = new Error('barcode error');\n  bwipjs.toBuffer.mockRejectedValue(error);\n    \n  const response = await action.main(params);\n  expect(response).toEqual({\n    error : {\n      statusCode: 500,\n      body: { error: 'barcode error' }\n    }\n  });\n  expect(mockLoggerInstance.error).toHaveBeenCalledWith(error);\n});\n")),(0,r.mdx)("p",null,"Finally, we'll end the test suite by testing the 400 http response if the ",(0,r.mdx)("inlineCode",{parentName:"p"},"value")," parameter is missing:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('missing input request parameters, should return 400', async () => {\n  const response = await action.main({});\n  expect(response).toEqual({\n    error: {\n      statusCode: 400,\n      body: { error: 'missing parameter(s) \\'value\\'' }\n    }\n  })\n});\n")),(0,r.mdx)("p",null,"To run the tests, we can use ",(0,r.mdx)("inlineCode",{parentName:"p"},"npm run test")," which is is a pre-defined npm script in ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," but before, we'll modify the script to add the code coverage in the output:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'"test": "jest --collectCoverage=true --testRegex ./test/actions"\n')),(0,r.mdx)("p",null,"Running the unit tests should output 100% coverage (which also includes the utils tests): "),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1168px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/5530d/unit-tests.webp 320w","/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/0c8fb/unit-tests.webp 640w","/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/ba85f/unit-tests.webp 1168w"],sizes:"(max-width: 1168px) 100vw, 1168px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/dd4a7/unit-tests.png 320w","/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/0f09e/unit-tests.png 640w","/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/b38ab/unit-tests.png 1168w"],sizes:"(max-width: 1168px) 100vw, 1168px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/5f99ad6be690d3777156c4d98dfed3fc/b38ab/unit-tests.png",alt:"unit-tests",title:"unit-tests",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")," "),(0,r.mdx)("h2",{id:"end-to-end-tests"},"End to End Tests"),(0,r.mdx)("p",null,"Similar to unit tests, we have a pre-defined structure for e2e tests but it's empty so let's add a test that will read our barcode.\nFor that we'll use ",(0,r.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/javascript-barcode-reader/"},"javascript-barcode-reader")," to read the code128 barcode output by our action. "),(0,r.mdx)("p",null,"First we're adding our dependencies like ",(0,r.mdx)("inlineCode",{parentName:"p"},"node-fetch")," to make an http request to fetch the action response and of course ",(0,r.mdx)("inlineCode",{parentName:"p"},"javascript-barcode-reader")," to read it."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const { Config } = require('@adobe/aio-sdk').Core;\nconst fs = require('fs');\nconst fetch = require('node-fetch');\nconst barcodeReader = require('javascript-barcode-reader');\n")),(0,r.mdx)("p",null,"By default, your deployed action is accessible at ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://<namespace>.adobeioruntime.net/api/v1/web/<app-name>-<version>/<action>"),".\nWe can construct the action url by following this pattern:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const namespace = Config.get('runtime.namespace');\nconst hostname = Config.get('cna.hostname') || 'adobeioruntime.net';\nconst packageJSON = JSON.parse(fs.readFileSync('package.json').toString());\nconst runtimePackage = `${packageJSON.name}-${packageJSON.version}`;\nconst actionUrl = `https://${namespace}.${hostname}/api/v1/web/${runtimePackage}/barcode`;\n")),(0,r.mdx)("p",null,"We'll create a first test to verify that the action will fail to render a barcode without the ",(0,r.mdx)("inlineCode",{parentName:"p"},"value")," parameter and respond accordingly. "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('returns a 400 when missing value parameter', async () => {\n  const res = await fetch(actionUrl);\n  expect(res).toEqual(expect.objectContaining({\n    status: 400\n  }));\n  const body = await res.json();\n  expect(body).toEqual(expect.objectContaining({\n    error: 'missing parameter(s) \\'value\\''\n  }));\n});\n")),(0,r.mdx)("p",null,"The second test will actually read the value of the barcode and test it against the provided ",(0,r.mdx)("inlineCode",{parentName:"p"},"value")," parameter.\nFor that, we'll temporary store the barcode as PNG image in order to pass it to the reader.    "),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"test('returns a barcode for the provided value parameter', async () => {\n  const param = 'value';\n  const res = await fetch(`${actionUrl}?value=${param}`);\n  expect(res).toEqual(expect.objectContaining({\n    status: 200\n  }));\n  expect(res.headers.get('content-type')).toEqual('image/png');\n  \n  const buffer = await res.buffer();\n  const barcode = `${__dirname}/barcode.png`;\n  fs.writeFile(barcode, buffer);\n  \n  const value = await barcodeReader({\n    image: barcode,\n    barcode: 'code-128'\n  });\n  \n  expect(value).toEqual(param);\n  \n  fs.unlinkSync(barcode);\n});\n")),(0,r.mdx)("p",null,"Similar to the unit tests, we'll use the npm script ",(0,r.mdx)("inlineCode",{parentName:"p"},"npm run e2e")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," to run the e2e tests which will output:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"884px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/5530d/e2e-tests.webp 320w","/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/0c8fb/e2e-tests.webp 640w","/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/d4c96/e2e-tests.webp 884w"],sizes:"(max-width: 884px) 100vw, 884px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/dd4a7/e2e-tests.png 320w","/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/0f09e/e2e-tests.png 640w","/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/2b3a9/e2e-tests.png 884w"],sizes:"(max-width: 884px) 100vw, 884px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/app-builder/static/edc0c1d978e4641d2a51fe6d853f2cd1/2b3a9/e2e-tests.png",alt:"e2e-tests",title:"e2e-tests",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-barcode-reader-test-md-dee5178a4cfd284c7dd0.js.map