import {Template} from 'meteor/templating';
import {GameStats} from '/collections/gameStats';
import {PlayerStats} from '/collections/playerStats';
import {Players} from '/collections/players';

import './main.html';

Template.Players.onCreated(function(){
	this.subscribe('players');
	this.subscribe('gameStats');
	this.subscribe('playerStats');
});

Template.Players.helpers({

	fullStats(){
		var players = Players.find({});
		var stats = PlayerStats.find({});
		var games = GameStats.find({});
		var finalInfo = []
		players.forEach(function(player){
			player.goals = 0;
			player.wins = 0;
			player.losses = 0;
			stats.forEach(function(stat){
				if (stat.player == player.name){
					player.goals += stat.goals;
					games.forEach(function(game){
						if (game.id == stat.game){
							if (game.result == "win"){
								player.wins += stat.goals
							} else {
								player.losses += stat.goals
							}
						}
					});
				}
			});
			if (player.goals > 0){
				player.wins = (player.wins / player.goals * 100).toFixed(2);
				player.losses = (player.losses / player.goals * 100).toFixed(2);
			}
			
			finalInfo.push(player);
		});

		console.log(finalInfo);

		return finalInfo;
	}
});


