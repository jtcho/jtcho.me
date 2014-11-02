'use strict';

/*
 *
 */
 angular.module('Keyboard', [])
 .service('KeyboardService', function($document) {

 	var RIGHT = 'right',
     	LEFT  = 'left';

    var keyboardMap = {
	    37: LEFT,
	    39: RIGHT
  	};

 	this.init = function() {
 		var self = this;
 		this.keyEventHandlers = [];
 		$document.bind('keydown', function(evt) {
 			var key = keyboardMap[evt.which];

 			if (key) {
 				//
 				evt.preventDefault();
 				self._handleKeyEvent(key, evt);
 			}
 		});
 	};

 	this.on = function(cb) {
 		this.keyEventHandlers.push(cb);
 	};

 	this._handleKeyEvent = function(key, evt) {
 		var callbacks = this.keyEventHandlers;
 		if (! callbacks) {	return;	}

 		evt.preventDefault();

 		if (callbacks) {
 			for (var x = 0; x < callbacks.length; x++) {
 				var cb = callbacks[x];
 				cb(key, evt);
 			}
 		}
 	};
 });