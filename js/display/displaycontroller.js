Calc.DisplayController = Ember.Controller.extend(Ember.Evented,{    // Ember.Evented that's why line 12 compiled
    init : function () {
        this._super();
        this.set('model', Calc.DisplayModel);
    },
    setValue : function (value) {
        this.trigger('setValue', value);
    }
});
