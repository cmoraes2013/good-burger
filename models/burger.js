// Require ORM
var orm = require("../config/orm.js");

// Create the burger object
var burger = {
 // Select all burger table data
all: function(cb) {
    orm.all("burgers", function(res) {
    cb(res);
    });
},
// Adds the columns and their values
create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
    cb(res);
    });
},

update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
    });
},
//
delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
        cb(res);
    });
}
};

// Export the database functions (burgersController.js).
module.exports = burger;