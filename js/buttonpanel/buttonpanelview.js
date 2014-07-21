CalculatorApp.ButtonView = Em.View.extend({
    templateName : 'button',
    init : function () {
        this._super();
        this.set('controller', CalculatorApp.ButtonController);
    },
    addEventListener : function (eventType, handler, context) {
        function onClickHandler(event) {
            handler.call(context, event || window.event);
        }

        if(typeof eventType === 'string'){

            if(eventType === 'numbersOperatorsClicked'){
                var elements = document.getElementsByClassName('js-input-key'); // TODO: Use element.querySelector
                for(var i = 0 ; i < elements.length; i++){
                    elements[i].addEventListener('click', onClickHandler, false);
                }

            }else if(eventType === 'answerKeyClicked'){
                var element =  document.getElementsByClassName('js-ans-key')[0]; // TODO: Use element.querySelector
                element.addEventListener('click', onClickHandler, false);

            }else if(eventType === 'clearKeyClicked'){
                var element = document.getElementsByClassName('js-clear-key')[0];  // TODO: Use element.querySelector
                element.addEventListener('click', onClickHandler, false);

            }else if(eventType === 'backKeyClicked'){
                var element = document.getElementsByClassName('js-back-key')[0];  // TODO: Use element.querySelector
                element.addEventListener('click', onClickHandler, false);
            }
        }
    }
});