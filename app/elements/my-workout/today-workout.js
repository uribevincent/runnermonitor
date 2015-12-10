TodayWorkout = Polymer({
  is: 'today-workout',
  properties:{
    hasNoAthletes: {
      type: Boolean,
      notify: true
    }
  },
  	loadAthletes: function(){
  		if(this.workout.details[0].training){
  		  this.$.workoutAthletes.generateRequest();
  		}
  		else{
  			this.athletes = [];
  		}
      this.hasNoAthletes = this.athletes.length == 0;
  	},
toggleAthletes: function(){
      this.$.athletes.toggle();
    },

  refresh: function(){
    this.$.workoutAjax.generateRequest();
  },
  path2picture: function(picture){
    return 'img/avatar/' + picture;   
  }
}); 
