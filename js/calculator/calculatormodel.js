CalculatorApp.CalculatorModel = DS.Model.extend({
    defaultValue : DS.attr('number'),
    type : DS.attr('string'),
    value : 0,
    resetValue : function () {
        this.value = 0;
    }
});