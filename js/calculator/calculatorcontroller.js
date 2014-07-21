App.CalculatorController = Ember.Controller.extend({
    needs: ['display', 'button'],  // Calculator has dependency on Display and button
    init: function () {
        this._super();
        var calculatorModel = App.CalculatorModel.create({
            defaultValue: 0,
            type: 'basic',
            value: 0
        });
        this.set('model', calculatorModel);
    },
    addEventListener: function () {
        var buttonPanelController = this.get('controller.button');
        buttonPanelController.addEventListener('numbersOperatorsClicked', this.setValue, this);
        buttonPanelController.addEventListener('answerKeyClicked', this.calculate, this);
        buttonPanelController.addEventListener('clearKeyClicked', this.resetDisplay, this);
        buttonPanelController.addEventListener('backKeyClicked', this.editValue, this);
    },
    resetDisplay: function () {
        var displayPanelController = this.get('controller.display');
        var calculatorModel = this.get('model');
        displayPanelController.send('setValue', calculatorModel.get('defaultValue'));
    },
    calculate: function () {
        var calculatorModel = this.get('model');
        var value = calculatorModel.get('value');

        var displayPanelController = this.get('controller.display');

        if (value) {
            var dataToEvaluate = value;
            var operatorPrecedenceArray = ['/', '*', '+', '-'];
            var expression = dataToEvaluate.split(' ');
            var i = 0;
            while (i <= operatorPrecedenceArray.length) {
                for (var index = 0; index <= expression.length; ++index) {
                    var operator = operatorPrecedenceArray[i];
                    var operatorIndex = expression.indexOf(operator);
                    if (operatorIndex !== -1) {
                        var num1 = parseFloat(expression[operatorIndex - 1]);
                        var num2 = parseFloat(expression[operatorIndex + 1]);
                        var ans = evaluate(num1, expression[operatorIndex], num2);
                        var isSingleOccurrence = operatorIndex === expression.lastIndexOf(operator);
                        expression.splice(operatorIndex - 1, 3, ans);
                        if (isSingleOccurrence) {
                            ++i;
                            break;
                        }
                    } else {
                        ++i;
                        break;
                    }
                }
            }
            calculatorModel.resetValue();
            this.evaluatedValue = isFinite(expression[0]) ? parseFloat(expression[0]) : 'Error !';
            displayPanelController.send('setValue', this.evaluatedValue);
        } else {
            displayPanelController.send('setValue', this.evaluatedValue);    // refactor
        }
    },
    setValue: function (event) {
        var keyClickedValue = event.currentTarget.innerText;

        var calculatorModel = this.get('model');
        var value = calculatorModel.get('value');
        if (!value) {
            calculatorModel.set('value', keyClickedValue);
        } else {
            if (isFinite(keyClickedValue)) {
                if (value == '0' || value === 'Error !') {
                    calculatorModel.set('value', keyClickedValue);
                } else {
                    calculatorModel.set('value', value + keyClickedValue);
                }
            } else {
                if (keyClickedValue !== '.') {
                    if (keyClickedValue === '-' && value.lastIndexOf(' ') === value.length - 1) {
                        calculatorModel.set('value', value + keyClickedValue);
                    } else {
                        var v = value[value.length - 2];
                        if (v !== undefined) {
                            if (isFinite(v)) {
                                calculatorModel.set('value', value + " " + keyClickedValue + " ");
                            }
                        } else {
                            calculatorModel.set('value', value + " " + keyClickedValue + " ");
                        }
                    }
                } else {
                    calculatorModel.set('value', value + keyClickedValue);
                }
            }
        }

        var displayPanelController = this.get('controller.display');
        displayPanelController.send('setValue', calculatorModel.get('value'));
    },
    editValue: function () {
        var calculatorModel = this.get('model');
        var value = calculatorModel.get('value')
        if (value) {
            calculatorModel.set('value', value.substring(0, value.length - 1));
        } else {
            value = 0;
        }

        var displayPanelController = this.get('controller.display');
        displayPanelController.send('setValue', value);
    }
});

App.calcController = App.CalculatorController.create({
    container : App.__container__;
});