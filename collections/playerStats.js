/**
 * Created by Omar on 2017-03-05.
 */

const PlayerStats = new Mongo.Collection('playerStats');

// though it's not necessary to specify a schema for no-sql databases, it does help
// in large project. you can choose to do so or omit it.
//
// the "label" and "autoform" fields are for the use of aldeed:autoform. for prototyping
// purposes, it's very handy for quickly making forms. those fields are not necessary if
// you don't want a form.
const PlayersSchema = new SimpleSchema({
	player: {
		type: String,
		label: 'Player Name'
	},
	game: {
		type: Number,
		label: 'Game ID'
	},
	goals: {
		type: Number,
		label: 'Number of Goals'
	}
});

PlayerStats.attachSchema(PlayersSchema);

export {PlayerStats};
