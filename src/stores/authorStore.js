"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(ActionTypes.CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback){
		this.removeListener(ActionTypes.CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(ActionTypes.CHANGE_EVENT);
	},

	getAllAuthors: function () {
		return _authors;
	},

	getAuthorById: function(id) {
		return _.find(_authors, {id : id });
	}
});

Dispatcher.register(function(action) {
	switch(action.actionType){
		case ActionTypes.CREATE_AUTHOR:
			_authors.push(action.author);
			AuthorStore.emitChange();
			break; 
		case ActionTypes.SAVE_AUTHOR:
			var existingAuthorIndex = _.indexOf(_authors, _.find(authors, {id: action.author.id})); 
			_authors.splice(existingAuthorIndex, 1, action.author);
			AuthorStore.emitChange();
			break;
		case ActionTypes.DELETE_AUTHOR:
			debugger;
			_.remove(_authors, function(author) {
				return action.id === author.id;
			});
			AuthorStore.emitChange();
			break; 
		case ActionTypes.INITIALIZE:
			_authors = action.initialData.authors;
			AuthorStore.emitChange();
			break;
		default:
			// no op
			break;
	}
});

module.exports = AuthorStore;