let asteriodBeltWidth = 200;
let asteriodBeltHeight = 50;

let map = [];


function GetMap(level) {

  switch (level) {
    case "map1":
      let platform1 = {
        x: (windowWidth * 0.2) * windowWidth / 1600, y: (windowHeight * 0.9) * windowHeight / 900 + mapScroll, w: asteriodBeltWidth * 1.5, h: asteriodBeltHeight, type: "platform"
      };
      let platform2 = { x: windowWidth * 0.45 * windowWidth / 1600, y: windowHeight * 0.6 * windowHeight / 900 + mapScroll, w: asteriodBeltWidth * 1.5, h: asteriodBeltHeight, type: "platform" };
      map = [platform1, platform2];
      return map;

    case "portals_tutorial":
      let pt_left_Wall = {
        x: 0, y: windowHeight * 0.027, h: windowHeight - 25, w: 30
      };
      let pt_right_Wall = {
        x: windowWidth - 25, y: windowHeight * 0.015, h: windowHeight - 10, w: 30
      };
      let pt_right_Ceiling = {
        x: windowWidth * 0.012, y: 0, h: 20, w: windowWidth * 0.34 * windowWidth / 1600
      };
      let pt_left_Ceiling = {
        x: windowWidth * 0.61, y: 0, h: 20, w: windowWidth * 0.4 * windowWidth / 1600
      };
      let pt_t_Block_Right_Wall = {
        x: windowWidth * 0.345 * windowWidth / 1600, y: windowHeight * 0.015 * windowHeight / 900, h: 290, w: 30
      };
      let pt_t_Block_Ceiling = {
        x: windowWidth * 0.345 * windowWidth / 1600, y: windowHeight * 0.43 * windowHeight / 900, h: 30, w: windowWidth * 0.29 * windowWidth / 1600
      };
      let pt_t_Block_Left_Wall = {
        x: windowWidth * 0.619 * windowWidth / 1600, y: windowHeight * 0.015 * windowHeight / 900, h: windowHeight * 0.45 * windowHeight / 900, w: 30
      };
      let pt_right_Floor = {
        x: windowWidth * 0.635 * windowWidth / 1600, y: windowHeight - 15, h: 30, w: windowWidth * 0.4 * windowWidth / 1600
      };
      let pt_b_Block_Right_Wall = {
        x: windowWidth * 0.62 * windowWidth / 1600, y: windowHeight * 0.79 * windowHeight / 900, h: windowHeight * 0.4 * windowHeight / 900, w: 30
      };
      let pt_b_Block_Left_Wall = {
        x: windowWidth * 0.345 * windowWidth / 1600, y: windowHeight * 0.79 * windowHeight / 900, h: windowHeight * 0.4 * windowHeight / 900, w: 30
      };
      let pt_b_Block_Floor = {
        x: windowWidth * 0.35 * windowWidth / 1600, y: windowHeight * 0.775 * windowHeight / 900, h: 30, w: windowWidth * 0.285 * windowWidth / 1600
      };
      let pt_left_Floor = {
        x: windowWidth * 0.015 * windowWidth / 1600, y: windowHeight - 15, h: 30, w: windowWidth * 0.34 * windowWidth / 1600
      };
      map = [pt_left_Wall, pt_right_Wall, pt_right_Ceiling, pt_t_Block_Right_Wall, pt_t_Block_Ceiling,
        pt_t_Block_Left_Wall, pt_left_Ceiling, pt_right_Floor, pt_b_Block_Right_Wall, pt_b_Block_Left_Wall,
        pt_b_Block_Floor, pt_left_Floor,
      ];
      return map
    case "map3":
      //outer box
      let m3_right_wall = { x: 1510, y: 0, h: 620, w: 30 };
      let m3_right_inner_wall = { x: 1400, y: 610, h: 140, w: 30 };
      let m3_right_floor = { x: 1400, y: 610, h: 30, w: 120 };
      let m3_top_left_wall = { x: 20, y: 10, h: 262, w: 30 };
      let m3_left_ceiling = { x: 20, y: 10, h: 30, w: 205 };
      let m3_left_middle_wall = { x: 20, y: 300, h: 145, w: 30 };

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
