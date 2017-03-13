/**
 * Created by szimmers on 2017-02-07.
 */

import {Meteor} from 'meteor/meteor';
import {GameStats} from '/collections/gameStats';
import {GameData} from '/server/gameData';

/**
 * this ensures the in-app band member data is persisted to the database. it matches on name, doing
 * an insert if it doesn't exist, or an update if it does.
 */
Meteor.startup(() => {
	// note that the addition of the underscore package is necessary to do it like this.
	// you can use a for loop to accomplish the same.
	_.each(GameData.games, function(m) {
		GameStats.upsert({
			id: m.id
		}, {
			$set: {
				date: m.date,
				opponent: m.opponent,
				result: m.result,
				score: m.score,
				id: m.id
			}
		}, function(error, result) {
			if (error) {
				let errMsg = 'Error while writing player data';
				console.error(errMsg, error);
				throw new Meteor.Error('500', errMsg);
			}
		});
	});
});
