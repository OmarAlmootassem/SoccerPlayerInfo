import {Template} from 'meteor/templating';
// import {BandMembers} from '/collections/bandMembers';
import {Players} from '/collections/players';

import './main.html';

Template.Players.onCreated(function(){
	this.subscribe('players');
});

Template.Players.helpers({

	players(){
		return Players.find({});
	},

	getCollection(){
		return Players;
	}
});

// Template.BandMembers.onCreated(function() {
// 	this.subscribe('bandMembers');
// });

// Template.BandMembers.helpers({
// 	/**
// 	 * returns all the published band members
// 	 */
// 	members() {
// 		return BandMembers.find({});
// 	},

// 	/**
// 	 * simply gets the name of the collection for inserting new members
// 	 */
// 	getCollection() {
// 		return BandMembers;
// 	}
// });


