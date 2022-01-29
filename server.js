const http = require("http")

const fs = require("fs")

const args = require("minimist")(process.argv.slice(2))//reads what we put in and split it up after 2
args["port"] //giving it a name
// Use minimist to process one argument `--port=` on the command line after `node server.js`.

// Define allowed argument name 'port'.

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const port = args.port || process.env.PORT || 3000 //This is saying we want port to be the arguments from port, then if not, the args from env, if not that 3000


fs.readFile("./www/index.html", "utf8" , (err, data) => {
  if (err) {
    console.error(err)
    return
    process.exit(1)
//How to exit wit a -1 exit code? 
// If there is an error, put it on the console error, return, and exit with error code 1. 
// Do not be nice about exiting.
  }
  //important line 1
  //important line 2 -> previously console.log(data)

// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./www/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.







// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./www/index.html.

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
})



// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 
server.listen(port, () => {
    console.log('Server running at port ${port}')
})



// That's it! You're all done!
})
