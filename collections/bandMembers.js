/**
 * Created by szimmers on 2017-02-07.
 */

const BandMembers = new Mongo.Collection('bandMembers');

// though it's not necessary to specify a schema for no-sql databases, it does help
// in large project. you can choose to do so or omit it.
//
// the "label" and "autoform" fields are for the use of aldeed:autoform. for prototyping
// purposes, it's very handy for quickly making forms. those fields are not necessary if
// you don't want a form.
const BandMembersSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	instrument: {
		type: String,
		allowedValues: ['VOX', 'GTR', 'BGTR', 'DRUMS', 'KEYS', 'BKVOX', 'COWB'],
		label: "Instrument",
		autoform: {
			options: {
				VOX: "Vocals",
				GTR: "Guitar",
				BGTR: "Bass Guitar",
				DRUMS: "Drums",
				KEYS: "Keyboards",
				BKVOX: "Backing Vox",
				COWB: "Moar Cowbell"
			}
		}
	}
});

BandMembers.attachSchema(BandMembersSchema);

export {BandMembers};
