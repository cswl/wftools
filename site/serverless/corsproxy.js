import fetch from 'node-fetch'

const whitelist = ["https://wftools.cf", "https://wftools.netlify.com", "http://localhost"];

const TargetHeader = "Target-URL".toLowerCase()

// Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
exports.handler = async (event, context) => {
  const { httpMethod, headers } = event;
  console.log(headers)
  var targetURL = headers[TargetHeader];
  if (!targetURL) {
   return {
    statusCode: 500,
    body : "There is no Target-Endpoint header in the request"
   }  
  }
  
  console.log(targetURL)

  const resp = await fetch(targetURL);
  const body = await resp.text()
  
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, PATCH, POST, DELETE"
    },
    statusCode: 200,
    body: body
  };
};
 
