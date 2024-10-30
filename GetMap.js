let asteriodBeltWidth = 180;
let asteriodBeltHeight = 100;

let map = [];

var platform1;
var platform2;

function GetMap(level) {

  switch (level) {
    case "map1":
      platform1 = { x: windowWidth * 0.2, y: (windowHeight * 0.75) + mapScroll, w: asteriodBeltWidth, h: asteriodBeltHeight };
      platform2 = { x: windowWidth * 0.45, y: windowHeight * 0.6 + mapScroll, w: asteriodBeltWidth, h: asteriodBeltHeight };
      map = [platform1, platform2];
      return map;
  }
}
