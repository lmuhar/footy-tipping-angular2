
var mongodb = require('mongodb');

exports.up = function(db, next){
    db.createCollection('locations');
    let locations = db.collection('locations');
    locations.insert({ name: 'MCG'});
    locations.insert({ name: 'Etihad Stadium' });
    locations.insert({ name: 'Adelaide Oval' });
    locations.insert({ name: 'Cazalys Stadium' });
    locations.insert({ name: 'UNSW Canberra Oval' });
    locations.insert({ name: 'Perth Stadium' });
    locations.insert({ name: 'The Gabba' });
    locations.insert({ name: 'SCG' });
    locations.insert({ name: 'Blundstone Arena' });
    locations.insert({ name: 'GMHBA Stadium' });
    locations.insert({ name: 'Adelaide Arena' });
    locations.insert({ name: 'Spotless Stadium' });
    locations.insert({ name: 'Tio Traeger Park' });
    locations.insert({ name: 'University of Tasmania Stadium' });
    locations.insert({ name: 'Metricon Stadium' });
    locations.insert({ name: 'TIO Stadium' });
    locations.insert({ name: 'Mars Stadium' });
};

exports.down = function(db, next){
    next();
};
