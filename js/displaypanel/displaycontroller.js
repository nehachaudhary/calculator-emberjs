App.DisplayController = Em.Controller.extend({
    init : function () {
        // pass options in create method
        this._super();
        this.set('model', App.DisplayModel);
    },
    setValue : function (value) {
        this.trigger('setValue', value);
    }
});