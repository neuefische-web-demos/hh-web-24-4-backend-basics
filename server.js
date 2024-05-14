import { createServer } from "node:http";

// req and res are shorthand for request and response
// const server = createServer((req, res) => {})
export const server = createServer((request, response) => {
  // this function will run when a request comes in

  console.log("A request came in");
  console.log(request.url);
  console.log(request.method);

  if (request.url === "/sponges") {
    response.statusCode = 200;
    response.end("Sponges are great");
    return;
  } else if (request.url === "/pete") {
    response.statusCode = 200;
    response.end("It's too hot in here...");
    return;
  }

  // we can send back a response
  // if we make it here, then we can send back a 404

  response.statusCode = 404;
  response.end("Not Found :(");
});
