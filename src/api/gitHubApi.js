"use strict";

//This file is mocking a web API by hitting hard coded data.
var entries = require('./gitHubData').entries;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(entry) {
	return entry.published.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var GitHubApi = {
	getAllEntries: function() {
		return _clone(entries); 
	},

	getEntryById: function(id) {
		var entry = _.find(entries, {id: id});
		return _clone(entry);
	},
	
	saveEntry: function(entry) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');
		
		if (entry.id) {
			var existingAuthorIndex = _.indexOf(entries, _.find(entries, {id: author.id})); 
			entries.splice(existingAuthorIndex, 1, author);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new entries in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			entry.id = _generateId(entry);
			entries.push(_clone(author));
		}

		return author;
	},

	deleteEntry: function(id) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(entries, { id: id});
	}
};

module.exports = GitHubApi;