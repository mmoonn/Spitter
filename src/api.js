var actions = require('./actions');
var dispatcher = require('./dispatcher');
var constants = require('./constants');
console.log ("!");

var API = module.exports = {
    fetchSpits: function () {
    	get('/api/spits').then(actions.gotSpits.bind(actions));
    }
};
function get(url) {
    return fetch(url, {
        credentials: 'same-origin' 
    }).then(function (res) {
        return res.json(); 
    });
};