Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log('Hello World!');
        this._loadData();
        console.log('what is this? ', this);
    },
    
    _loadData: function(){
        console.log('Inside data load.');
        var myDataStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success){
                    console.log('My Store is ', myStore);
                    console.log('My data is ', myData);
                    
                    this._loadDataGrid(myStore);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    },
    
    _loadDataGrid: function(myDataStore){
        var myGrid = Ext.create('Rally.ui.grid.Grid', {
            store: myDataStore,
            columnCfgs: ['FormattedID', 'Name', 'ScheduleState']
        });
        
        this.add(myGrid);
    }
});
