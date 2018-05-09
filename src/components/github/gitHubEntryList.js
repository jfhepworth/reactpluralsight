"use strict";

var React = require('react');

var GitHubEntryList = React.createClass({
	propTypes: {
		entries: React.PropTypes.array.isRequired
	},

	render: function() {
		var createEntryRow = function(entry) {
			return (
				<tr key={entry.id}>
					<td><a href={"/#githubentries/" + entry.id}>{entry.published}</a></td>
					<td>{entry.title.text} {entry.link.href}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.entries.map(createEntryRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = GitHubEntryList;