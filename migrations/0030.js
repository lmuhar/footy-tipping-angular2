
var mongodb = require('mongodb');

exports.up = function (db, next) {
    let teams = db.collection('teams');
    teams.insert({ name: 'Adelaide', value: 'adelaide' });
    teams.insert({ name: 'Geelong Cats', value: 'geelong' });
    teams.insert({ name: 'GWS Giants', value: 'gws' });
    teams.insert({ name: 'Port Adelaide', value: 'portAdelaide' });
    teams.insert({ name: 'Sydney Swans', value: 'sydney' });
    teams.insert({ name: 'Essendon', value: 'essendon' });
    teams.insert({ name: 'West Cost Eagles', value: 'westCost' });
    teams.insert({ name: 'Melbourne', value: 'Melbourne' });
    teams.insert({ name: 'Western Bulldogs', value: 'bulldogs' });
    teams.insert({ name: 'St Kilda', value: 'saints' });
    teams.insert({ name: 'Hawthorn', value: 'hawthorn' });
    teams.insert({ name: 'Collingwood', value: 'collingwood' });
    teams.insert({ name: 'Fremantle', value: 'fremantle' });
    teams.insert({ name: 'North Melbourne', value: 'northMelbourne' });
    teams.insert({ name: 'Carlton', value: 'carlton' });
    teams.insert({ name: 'Gold Cost Suns', value: 'suns' });
    teams.insert({ name: 'Brisbane Lions', value: 'lions' }, next);
};

exports.down = function (db, next) {
    next();
};
