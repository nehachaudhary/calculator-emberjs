CalculatorApp.DisplayController = Em.Controller.extend({
    init : function () {
        // pass options in create method
        this._super();
        var displayPanelModel = CalculatorApp.DisplayPanelModel.create({
            defaultValue : 0    // Have to come from Calculator
        });
        this.set('model', displayPanelModel);
    },
    setValue : function (value) {
        this.trigger('setValue', value);
    }
});