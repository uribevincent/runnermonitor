WeekWorkoutsTimeline = Polymer({
	is: 'week-workouts-timeline',
	properties:{
		athlete_uid: String
	},
	refresh: function(){
	  this.$.ajax.generateRequest();
	}
  });  
