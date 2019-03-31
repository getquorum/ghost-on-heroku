const path = require("path");
const express = require("express");
const ghost = require("ghost");

const compress = require("compression");
const helmet = require("helmet");
const logger = require("morgan");

let app = express();

app.use(helmet());
app.use(logger("combined"));
app.use(compress());

// Serve the main static website
app.use("/", express.static(path.join(__dirname, "www")));

// Run a single Ghost process
ghost()
  .then(ghostServer => {
    // Serve the blog on a sub directory
    const subdir = process.env.BLOG_DIR || "/blog";
    console.log(subdir);
    app.use(subdir, ghostServer.rootApp);
    ghostServer.start(app);
  })
  .catch(error => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`);
    process.exit(1);
  });
