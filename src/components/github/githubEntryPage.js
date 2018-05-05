"use strict";

var React = require('react');
var GitHubApi = require('../../api/gitHubApi');
var GitHubEntryList = require('./gitHubEntryList');

var GitHubEntryPage = React.createClass({
	getInitialState: function() {
		return {
			entries: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ entries: GitHubApi.getAllEntries() });
		}
	},

	render: function() {
		return (
			<div>
				<h1>entries</h1>
				<GitHubEntryList entries={this.state.entries} />				
			</div>
		);
	}
});

module.exports = GitHubEntryPage;