/**
 * Created by Omar on 2017-03-05.
 */

const Players = new Mongo.Collection('players');

// though it's not necessary to specify a schema for no-sql databases, it does help
// in large project. you can choose to do so or omit it.
//
// the "label" and "autoform" fields are for the use of aldeed:autoform. for prototyping
// purposes, it's very handy for quickly making forms. those fields are not necessary if
// you don't want a form.
const PlayersSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name'
	},
	position: {
		type: String,
		label: 'Position'
	},
	number: {
		type: Number,
		label: 'Jersey Number'
	}
});

Players.attachSchema(PlayersSchema);

export {Players};
