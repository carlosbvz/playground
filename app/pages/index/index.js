'use strict';

var APP = window.APP = window.APP || {};

APP.index = (function(){

    var bindEventsToUI = function() {
        // ...
    };

     var inputValFunc = $('.input-field').keyup(function(e) {
        var inputVal = $(this).val();
        return inputVal;
      });

    var init = function() {
        console.log('APP.index');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init,
        inputValFunc: inputValFunc
    };

}());
