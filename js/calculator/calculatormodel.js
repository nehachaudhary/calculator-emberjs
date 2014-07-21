App = Em.Object.create();

App.CalculatorModel = Em.Object.create({
    value : 0,
    resetValue : function () {
        this.value = 0;
    }
});