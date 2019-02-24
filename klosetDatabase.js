var async = require('async');
var fs = require('fs');
var pg = require('pg');

// Connect to the "kloset" database.
var config = {
    user: 'klo',
    host: 'localhost',
    database: 'kloset',
    port: 6969
};

// Create a pool.
var pool = new pg.Pool(config);

pool.connect(function (err, client, done) {

    // Close communication with the database and exit.
    var finish = function () {
        done();
        process.exit();
    };

    if (err) {
        console.error('could not connect to cockroachdb', err);
        finish();
    }
    async.waterfall([
            function (next) {
                // Create the 'accounts' table.
                client.query('CREATE TABLE IF NOT EXISTS clothes (id INT PRIMARY KEY, garmentType ENUM(\'top\',\'bottom\'), color STRING);', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from kloset: ', err);
                finish();
            }
        });
});
