CalculatorApp.ButtonController = Em.Controller.extend({
    init : function () {
        this._super();
        this.set('model', CalculatorApp.buttonData);
    },
    actions : {
        addEventListeners : function (eventType, handler, context) {
            this.trigger('addEventListener', eventType, handler, context);
        }
    }
});