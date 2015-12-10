
(function() {
    'use strict';

    Polymer({
      is:'workout-book-calendar',
      properties:{
        currentYear: String,
        currentMonth: String,
        selectedEntry: {
          type:Object,
          notify:true
        },
        fullDate: String,
        currentDate: String,
        selectedDate: {
          type: Object,
          observe: 'refreshView'
        },
        workbookUrl:{
          type: String,
          computed: '_getUrl(currentMonth,currentYear)'
        }
      },
      _getUrl: function(month, year){
        return '../rm/api/index.php/athletes/workbook/' + year + '/' + month;
      },
      previousMonth: function(){
        this.selectedDate.subtract(1, 'M');
            this.refreshView();
             this.$.ajax.generateRequest();
      },
      nextMonth: function(){
        this.selectedDate.add(1, 'M');
            this.refreshView();
             this.$.ajax.generateRequest();
      },
      refreshView: function(){
            this.currentYear = this.selectedDate.format("YYYY");
            this.currentMonth = this.selectedDate.format("MM");
            this.currentDate = this.selectedDate.format('MMMM YYYY');

          },
      _getIconPath: function(picture){
        if(picture == '') return '';
        return 'elements/rm-workout/img/' + picture + '.svg';
      },
      _hasIndex: function(index){
        return index != null;
      },
      refresh: function(){
        this.$.ajax.generateRequest();
      },
      ready: function(){

        var scope = this;
        moment.locale('fr');
        scope.selectedDate  = moment();
        scope.refreshView();

        this.$.editor.addEventListener('editor-closed', function(){scope.back();});

        scope.selectView = function(e) {
        	//alert(e.target.templateInstance.model.day.index);
          if(e.model.day.index != ""){
          scope.$.content.selected = 1;
          scope.$.editor.entry = e.model.day;
          scope.fullDate = moment(e.model.day.date, "YYYY-MM-DD", 'fr').format('LL');
          }
        };

        scope.back = function(e){
          //Find out why the entry does not refresh itself. Meanwhile the workaround is to refresh the data.
          this.$.ajax.generateRequest();
          scope.$.content.selected = 0;
        };
      }
    });
 })();
