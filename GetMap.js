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
      let pt_left_Wall = { x: 20, y: 0, h: 740, w: 10 };
      let pt_right_Wall = { x: 1510, y: 0, h: 740, w: 10 };
      let pt_right_Ceiling = { x: 20, y: 10, h: 10, w: 520 };
      let pt_left_Ceiling = { x: 930, y: 10, h: 10, w: 590 };
      let pt_t_Block_Right_Wall = { x: 510, y: -2, h: 300, w: 10 };
      let pt_t_Block_Ceiling = { x: 515, y: 285, h: 12, w: 420 };
      let pt_t_Block_Left_Wall = { x: 930, y: 5, h: 290, w: 10 };
      let pt_right_Floor = { x: 940, y: 730, h: 10, w: 580 };
      let pt_b_Block_Right_Wall = { x: 935, y: 480, h: 260, w: 10 };
      let pt_b_Block_Left_Wall = { x: 510, y: 480, h: 260, w: 10 };
      let pt_b_Block_Floor = { x: 510, y: 480, h: 10, w: 430 };
      let pt_left_Floor = { x: 200, y: 730, h: 10, w: 320 };
      map = [pt_left_Wall, pt_right_Wall, pt_right_Ceiling, pt_t_Block_Right_Wall, pt_t_Block_Ceiling,
        pt_t_Block_Left_Wall, pt_left_Ceiling, pt_right_Floor, pt_b_Block_Right_Wall, pt_b_Block_Left_Wall,
        pt_b_Block_Floor, pt_left_Floor,
      ];
      return map
    case "map3":
      //outer box
      let m3_right_wall = { x: 1510, y: 0, h: 620, w: 10 };
      let m3_right_inner_wall = { x: 1400, y: 610, h: 140, w: 10 };
      let m3_right_floor = { x: 1400, y: 610, h: 10, w: 120 };
      let m3_top_left_wall = { x: 20, y: 10, h: 262, w: 10 };
      let m3_left_ceiling = { x: 20, y: 10, h: 10, w: 205 };
      let m3_left_middle_wall = { x: 20, y: 300, h: 145, w: 10 };

      //top left platform
      let m3_left_top_platform_top = { x: 20, y: 270, h: 10, w: 215 };
      let m3_left_top_platform_side = { x: 230, y: 270, h: 40, w: 10 };
      let m3_left_top_platform_bottom = { x: 20, y: 302, h: 10, w: 220 };

      //lower left platform
      let m3_left_lower_platform_top = { x: 20, y: 435, h: 10, w: 215 };
      let m3_left_lower_platform_side = { x: 230, y: 435, h: 40, w: 10 };
      let m3_left_lower_platform_bottom = { x: 0, y: 465, h: 10, w: 230 };

      //asteriod Belt
      let asteriod_Belt_platform = { x: 960, y: 300 + mapScroll, h: 10, w: 400 };


      map = [m3_right_wall, m3_top_left_wall, m3_left_ceiling,
        m3_right_inner_wall, asteriod_Belt_platform, m3_left_top_platform_top,
        m3_left_top_platform_side, m3_left_top_platform_bottom, m3_left_middle_wall,
        m3_right_floor, m3_left_lower_platform_top, m3_left_lower_platform_side,
        m3_left_lower_platform_bottom,
      ];
      return map;
  }
}
