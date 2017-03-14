/**
 * Created by Omar on 2017-03-13.
 */

import {Players} from '/collections/players';

/**
 * upon request, publish the players
 */
Meteor.publish('players', function() {
	// there's no filtering here, so all records in the collection will be returned.
	// the 2nd argument to find() can limit the fields. here, we're specifying all the
	// fields, so there's no practical difference from omitting it entirely.
	return Players.find({});
});
