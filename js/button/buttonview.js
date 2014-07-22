Calc.ButtonView = Ember.View.extend({
    init : function () {
        this._super();
        this.set('controller', Calc.ButtonController.create());
    },
    templateName :'button',
    click : function (event) {
        var controller = this.get('controller');
        controller.send('eventListener', event);
    }
});
