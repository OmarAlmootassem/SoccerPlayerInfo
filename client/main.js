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

	/**
	 * Returns the full data about each player
	 */
	fullStats(){
		//Variables for players, playerStats and gameStats collections
		var players = Players.find({});
		var stats = PlayerStats.find({});
		var games = GameStats.find({});
		//Array to hold the final information
		var finalInfo = []
		//Loop through each player and calculate the goals scored, and the percentages
		players.forEach(function(player){
			player.goals = 0;
			player.wins = 0;
			player.losses = 0;
			stats.forEach(function(stat){
				if (stat.player == player.name){
					player.goals += stat.goals;	//Add the goals to the players Stats
					games.forEach(function(game){
						if (game.id == stat.game){
							//If the game finished as a win, then add the goals to the win object, otherwise
							//add the goals to the losses object
							if (game.result == "win"){
								player.wins += stat.goals
							} else {
								player.losses += stat.goals
							}
						}
					});
				}
			});
			//Calculate the percentages
			if (player.goals > 0){
				player.wins = (player.wins / player.goals * 100).toFixed(2);
				player.losses = (player.losses / player.goals * 100).toFixed(2);
			}
			//Put the player info in the final array
			finalInfo.push(player);
		});

		// console.log(finalInfo);
		return finalInfo;
	}
});


