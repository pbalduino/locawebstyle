var locastyle = locastyle || {};

locastyle.eventDispatcher = (function() {
  'use strict';

  // Where we put the events subscribed in events
  var subscribers = {};

  // Subscribe a function to an event
  function eventSubscribe(eventName, functionCallback) {
    // If subscribe is undefined, create and empty array
    if(typeof subscribers[eventName] === 'undefined') {
      subscribers[eventName] = [];
    }

    // Subscribe function callback in array
    subscribers[eventName].push(functionCallback);
  }


  // Call the functions related with event is triggered
  function trigger(eventName) {

    // Only if have subscribers
    if (typeof subscribers[eventName] !== 'undefined') {
      for(var i = 0, subsCount = subscribers[eventName].length; i < subsCount; i++) {
        subscribers[eventName][i].call(eventName);
      }
    } else {
      console.info('[Event Dispatcher] no eventSubscribers for event "' + eventName + '"');
    }

  }

  return {
    eventSubscribe: eventSubscribe,
    trigger: trigger
  };

}());
