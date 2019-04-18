const util = require("util");

const isProd = process.env.NODE_ENV === "production ";

export { isProd };

export default function() {
  console.log("Hi");
}
