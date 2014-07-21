CalculatorApp.DisplayPanelView = Em.View.extend({
    templateName : 'displaypanel',
    init : function () {
        this._super();
        this.set('controller', CalculatorApp.DisplayPanelController);
    },
    didInsertElement : function(){
        var displayController = this.get('controller');
        displayController.on('setValue', this.setValue());
    },
    setValue : function (value) {
        this.$().find('js-display-band').val(value);
    }
});