var mongodb = require('mongodb');

exports.up = function(db, next) {
  db.createCollection('locations');
  let locations = db.collection('locations');
  locations.insert({ name: 'Optus Stadium' });
  locations.insert({ name: 'Giants Stadium' });
  locations.insert({ name: 'Marvel Stadium' }, next);
};

exports.down = function(db, next) {
  next();
};
