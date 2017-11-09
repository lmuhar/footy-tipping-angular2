
var mongodb = require('mongodb');

exports.up = function (db, next) {
    db.createCollection('teams');
    let teams = db.collection('teams');
    teams.insert({ name: 'Richmond', value: 'richmond' }, next);
};

exports.down = function (db, next) {
    next();
};
