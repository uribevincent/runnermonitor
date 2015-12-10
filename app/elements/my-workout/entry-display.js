
  Polymer({
  	is: 'entry-display',
  	properties:{
  		entry: {
  			type: Object,
  			observer: '_refreshData'
  		},
	  	entryDate: {
	  		type: String,
	  		notify: true
	  	},
	  	weatherIcon: {
	  		type: String,
	  		computed: '_getIcon(entry.weather)'
	  	},
	  	occupationIcon: {
	  		type: String,
	  		computed: '_getIcon(entry.occupation)'
	  	},
	  	feelingIcon: {
	  		type: String,
	  		computed: '_getIcon(entry.feeling)'
	  	}
  	},
    _getFormattedDate: function(){
      return moment(this.entry.date).format('DD/MM/YYYY');
    },
  	_refreshData: function(){
  		this.entryDate = moment(this.entry.date).format('DD/MM/YYYY');
  	},
    _getIcon: function(icon){
    	return 'elements/rm-workout/img/' + icon + '.svg';
    }
  });  