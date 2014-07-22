Calc.DisplayView = Em.View.extend({
    templateName : 'display',
    defaultValue : '0',
    didInsertElement : function(){
        var displayController = Calc.__container__.lookup('controller:display');
        displayController.on('setValue', this, this.setValue);
    },
    setValue : function (value) {
        this.$().find('.js-display-band').val(value);
    }
});