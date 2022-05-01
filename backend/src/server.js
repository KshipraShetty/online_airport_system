'use strict';
const   express     = require('express'),
        Promise     = require('bluebird'),
        bodyParser  = require("body-parser"),
        
        config      = require('../config/config'),
        {connection_db} = require('./database/mysql_db');

//         bodyParser  = require("body-parser"),
//         logger      = require('./logger/logger'),
//         app         = express(),
//         port        = 3070,

//         config      = require('../config/config');


var app = express();
app.use(bodyParser.json());

let handleDisconnect = () => {
    let connection = connection_db();
    connection.connect((err) => {
    if (!err) {
        console.log('DB Connected!');
        app.listen(config.dev.server.port, function(err) {
            console.log('Started Server on PORT: ', config.dev.server.port);
        });
        config.dev.mysql_database.db_connection = connection;
        app.use("/api", require("./routes/employees.routes"));

        // request to handle undefined or all other routes
        app.get("*", function(req, res) {
            res.send("Wrong route!!!");
        });
    }
    else {
        console.log('Error Connecting DB!', err);
        setTimeout(handleDisconnect, 2000); 
    }
});};

handleDisconnect();

//

//const connection = Promise.all(initialization());
//console.log(connection);
  
// app.use(bodyParser.json());

// app.get("/", function(req, res) {
//       logger.info("default route");
//       res.send("App works!!!!!");
// });
  
// app.use("/api", require("./routes/routes"));
  
// // request to handle undefined or all other routes
// app.get("*", function(req, res) {
//     logger.info("users route");
//     res.send("App works!!!!!");
// })
  
// app.listen(port, function(err) {
//     logger.info("running server on from port:::::::" + port);
// });


module.exports = app;


