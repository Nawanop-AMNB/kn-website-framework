// import connect from "connect";
// import { writeFile } from "fs";
// import { createServer } from "http";
// import next from "next";
// import path from "path";
// import { parse } from "url";

// const port = parseInt(process.env.PORT || "3000", 10);
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const connectInstance = connect();
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   connectInstance.use((req, res) => {
//     handle(req, res, parse(req.url!, true));
//   });

//   const server = createServer(connectInstance).listen(3000);
//   const getLogPath = path.resolve("error.log");
//   server.on("error", (error) => writeFile(getLogPath, error.stack, () => {}));

//   console.log(
//     `> Server listening at http://localhost:${port} as ${
//       dev ? "development" : process.env.NODE_ENV
//     }`
//   );
// });

import connect from "connect";
import http from "http";

const app = connect();

app.use(function (req, res) {
  res.end("Hello from Node.js/io.js + Connect.js!\n");
});

http.createServer(app).listen(3000);
