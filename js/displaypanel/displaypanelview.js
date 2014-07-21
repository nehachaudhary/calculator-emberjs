CalculatorApp.DisplayView = Em.View.extend({
    templateName : 'display',
    defaultValue : '0',
    init : function () {
        this._super();
        this.set('controller', CalculatorApp.DisplayController);
    },
    didInsertElement : function(){
        var displayController = this.get('controller');
        displayController.on('setValue', this.setValue());
    },
    setValue : function (value) {
        this.$().find('js-display-band').val(value);
    }
});