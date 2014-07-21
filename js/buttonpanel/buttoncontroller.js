App.ButtonController = Em.Controller.extend({
    init : function () {
        this._super();
        this.set('model', App.buttonData);
    },
    addEventListeners : function (eventType, handler, context) {
        this.trigger('addEventListener', eventType, handler, context);
    }
});