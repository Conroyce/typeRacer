var gameTimer = (function() {
  var timeStamp = function() {
    // sets the game start time, and returns a function
    var timeStart = new Date();
    timeStart = timeStart.getTime();

    return function() {
      var timeEnd = new Date();
      timeEnd = timeEnd.getTime();      
      var timeSpent = timeEnd - timeStart;
      var timeInMinutes = timeSpent / 1000 / 60;
      return timeInMinutes;
    }
  }

  var getWPM = function(wordsTyped, initialize) {
    // returns words per minute
    var
    if(initialize) {
      var timeStampHolder = timeStamp();
    }

    var timeInMinutes = timeChecker();
    return Math.ceil(wordsTyped/timeInMinutes);
  };

  var timeChecker = function() {
    return timeStampHolder();
  };

  return {
    timeStamp: timeStamp,
    getWPM: getWPM
  }
  
})();

exports.gameTimer = gameTimer;