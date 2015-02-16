var Timer = require("../public/js/gameTimer.js");
var gameTimer = Timer.gameTimer;

beforeEach(function() {
  jasmine.Clock.useMock();
})

describe("timeStamp", function() {
  var timeFunc = gameTimer.timeStamp();
  
  it("returns a function", function() {
    expect(typeof(timeFunc)).toBe("function");
  });

  it("its returned function takes a time value ", function() {
    expect(typeof(timeFunc())).toBe("number");
  });

  it("correctly calculates passage of time", function() {
    var timer = gameTimer.timeStamp();
    jasmine.Clock.tick(1000);
    var timer = timer();
    expect(timer < 2/60 ).toBe(true);
  });
});

describe("getWPM", function() {
  it("returns the words per minute", function() {
    var timer = gameTimer.timeStamp();
    jasmine.Clock.tick(1000);
    var WRM = gameTimer.getWPM(2);
    expect(WRM).toBe("number");
    expect(WRM).toBe(2/100/6);
  });
});