let asteriodBeltWidth = 200;
let asteriodBeltHeight = 50;

let map = [];


function GetMap(level) {

  switch (level) {
    case "map1":
      let platform1 = { x: windowWidth * 0.2, y: (windowHeight * 0.75) + mapScroll, w: asteriodBeltWidth, h: asteriodBeltHeight, type: "platform" };
      let platform2 = { x: windowWidth * 0.45, y: windowHeight * 0.6 + mapScroll, w: asteriodBeltWidth, h: asteriodBeltHeight, type: "platform" };
      let goal1 = { x: windowWidth * 0.72, y: windowHeight * 0.457 + mapScroll, w: 80, h: 80, type: "goal" };
      map = [platform1, platform2];
      return map;

    case "portals_tutorial":
      let left_Wall = { x: 20, y: 0, h: 740, w: 10 };
      let right_Wall = { x: 1510, y: 0, h: 740, w: 10 };
      let right_Ceiling = { x: 20, y: 10, h: 10, w: 520 };
      let left_Ceiling = { x: 930, y: 10, h: 10, w: 590 };
      let t_Block_Right_Wall = { x: 510, y: -2, h: 300, w: 10 };
      let t_Block_Ceiling = { x: 515, y: 285, h: 12, w: 420 };
      let t_Block_Left_Wall = { x: 930, y: 5, h: 290, w: 10 };
      let right_Floor = { x: 940, y: 730, h: 10, w: 580 };
      let b_Block_Right_Wall = { x: 935, y: 480, h: 260, w: 10 };
      let b_Block_Left_Wall = { x: 510, y: 480, h: 260, w: 10 };
      let b_Block_Floor = { x: 510, y: 480, h: 10, w: 430 };
      let left_Floor = { x: 200, y: 730, h: 10, w: 320 };
      map = [left_Wall, right_Wall, right_Ceiling, t_Block_Right_Wall, t_Block_Ceiling,
        t_Block_Left_Wall, left_Ceiling, right_Floor, b_Block_Right_Wall, b_Block_Left_Wall,
        b_Block_Floor, left_Floor,
      ];
      return map
  }
}
