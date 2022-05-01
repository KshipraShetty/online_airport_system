const db = require('../database/mysql_db');

// newTea function for post tea route
const details = (req, res) => {
    db.query_db(['123456785'])
    .then((result) => res.json({message: result}))
    .catch(() => res.json({status: 401, message:''}));
     // dummy function for now
};

module.exports = {details};