/**
 * Created by Ashutosh on 12/6/16.
 */
var db = require('./db.js');
function w3dInsert(col1, col2, col3, col4){
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
    this.col4 = col4;
    new db(this);
}

module.exports = w3dInsert;
