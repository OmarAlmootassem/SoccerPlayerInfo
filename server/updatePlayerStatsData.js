/**
 * Created by Omar on 2017-03-13.
 */

import {Meteor} from 'meteor/meteor';
import {PlayerStats} from '/collections/playerStats';
import {PlayerStatsData} from '/server/playerStatsData';

/**
 * this ensures the in-app player stats data is persisted to the database. it matches on name, doing
 * an insert if it doesn't exist, or an update if it does.
 */
Meteor.startup(() => {
	// note that the addition of the underscore package is necessary to do it like this.
	// you can use a for loop to accomplish the same.
	_.each(PlayerStatsData.stats, function(m) {
		PlayerStats.upsert({
			player: m.player,
			game: m.game,
			goals: m.goals
		}, {
			$set: {
				player: m.player,
				game: m.game,
				goals: m.goals
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
