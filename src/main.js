var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;

var API = require("./api");
var SpitStore = require("./stores/spits");

var routes = (<Route handler={require("./components/App")}> </Route>);

API.fetchSpits();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Root){
	React.render(<Root />, document.getElementById('app'));
});

