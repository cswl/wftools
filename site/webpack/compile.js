// Compile files on PROD or launch DEV server
if (process.env.NODE_ENV === "production") {
  require("./prod.js");
} else {
  process.env.DEV = true;
  require("./dev.js");
}
