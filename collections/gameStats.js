/**
 * Created by Omar on 2017-03-05.
 */

const GameStats = new Mongo.Collection('gameStats');

// though it's not necessary to specify a schema for no-sql databases, it does help
// in large project. you can choose to do so or omit it.
//
// the "label" and "autoform" fields are for the use of aldeed:autoform. for prototyping
// purposes, it's very handy for quickly making forms. those fields are not necessary if
// you don't want a form.
const GamesSchema = new SimpleSchema({
	date: {
		type: String,
		label: 'Date of Match'
	},
	opponent: {
		type: String,
		label: 'Opponent'
	},
	result: {
		type: String,
		label: 'Result'
	},
	score: {
		type: String,
		label: 'Score'
	},
	id: {
		type: Number,
		label: 'ID'
	}
});

GameStats.attachSchema(GamesSchema);

export {GameStats};
