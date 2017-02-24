/**
 * Created by szimmers on 2017-02-07.
 */

import {Meteor} from 'meteor/meteor';
import {BandMembers} from '/collections/bandMembers';
import {BandMemberData} from '/server/bandMemberData';

/**
 * this ensures the in-app band member data is persisted to the database. it matches on name, doing
 * an insert if it doesn't exist, or an update if it does.
 */
Meteor.startup(() => {
	// note that the addition of the underscore package is necessary to do it like this.
	// you can use a for loop to accomplish the same.
	_.each(BandMemberData.members, function(m) {
		BandMembers.upsert({
			name: m.name
		}, {
			$set: {
				name: m.name,
				instrument: m.instrument
			}
		}, function(error, result) {
			if (error) {
				let errMsg = 'Error while writing band member data';
				console.error(errMsg, error);
				throw new Meteor.Error('500', errMsg);
			}
		});
	});
});
