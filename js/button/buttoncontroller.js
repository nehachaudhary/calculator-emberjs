Calc.ButtonController = Ember.Controller.extend({
    init: function () {
        this._super();
        this.set('model', Calc.buttonData);
    },
    actions :{
        eventListener: function (event) {
            var calculatorController = Calc.__container__.lookup('controller:index');

            var targetElement = $(event.target);

            if(targetElement.hasClass('js-input-key')){
                calculatorController.send('setValue', event);

            }else if(targetElement.hasClass('js-clear-key')){
                calculatorController.send('resetDisplay', event);

            }else if(targetElement.hasClass('js-ans-key')){
                calculatorController.send('calculate', event);

            }else if(targetElement.hasClass('js-back-key')){
                calculatorController.send('editValue', event);
            }
        }
    }
});