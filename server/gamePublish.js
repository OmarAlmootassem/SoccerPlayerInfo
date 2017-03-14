/**
 * Created by Omar on 2017-03-13.
 */

import {GameStats} from '/collections/gameStats';

/**
 * upon request, publish the game stats
 */
Meteor.publish('gameStats', function() {
	// there's no filtering here, so all records in the collection will be returned.
	// the 2nd argument to find() can limit the fields. here, we're specifying all the
	// fields, so there's no practical difference from omitting it entirely.
	return GameStats.find({});
});
