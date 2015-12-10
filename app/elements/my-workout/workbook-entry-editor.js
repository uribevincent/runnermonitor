
  Polymer({
    is: 'workbook-entry-editor',
    properties:{
      md_text: String,
      entry:{
        type: Object,
        observer: 'loadData',
        notify:true
      },
      entryRaces:{
        type: String,
        notify: true,
        computed: '_getRacesUrl(entry.date)'
      }
    },
   loadData: function(){
    this.$.ajax.url = '../rm/api/index.php/athletes/races/' + this.entry.date;
    this.$.ajax.generateRequest();
   },
   _hideRaces: function(occupation){
    return occupation != 'race';
   },
   _getRacesUrl: function(date){
    return '../rm/api/index.php/athletes/races/' + date;
   },
      _setId: function(e){
        this.entry.uid = JSON.parse(e.detail.response);
      },
 save: function(e,s,d) {
        if(this.entry != null){
        this.entry.hasActivity = true;
        this.entry.athlete_uid = getCookie('athlete_uid');
        var ajax = this.$.postAjax;      
        ajax.body  = JSON.stringify(this.entry);
        ajax.generateRequest();
        this.fire('iron-signal', {name:'saved', data: 'Entrée enregistrée.'});
        this.fire('editor-closed');
        //scope.closeTapped();
        }
      }
  });