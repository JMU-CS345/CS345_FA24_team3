let asteriodBeltWidth = 200;
let asteriodBeltHeight = 50;

let map = [];


function GetMap(level) {

  let standard_platform_size = windowWidth * 0.02;

  switch (level) {
    case "map1":
      let platform1 = {
        x: (windowWidth * 0.2), y: (windowHeight * 0.75) + mapScroll, w: asteriodBeltWidth * 1.5, h: asteriodBeltHeight, type: "platform"
      };
      let platform2 = { x: windowWidth * 0.5, y: windowHeight * 0.6 + mapScroll, w: asteriodBeltWidth * 1.5, h: asteriodBeltHeight, type: "platform" };
      map = [platform1, platform2];
      return map;

    case "portals_tutorial":
      let pt_left_Wall = {
        x: 0, y: windowHeight * 0.025, h: windowHeight * 0.97, w: standard_platform_size
      };
      let pt_right_Wall = {
        x: windowWidth - 25, y: windowHeight * 0.027, h: windowHeight - 10, w: standard_platform_size
      };
      let pt_right_Ceiling = {
        x: windowWidth * 0.60, y: 0, h: standard_platform_size, w: windowWidth * 0.39
      };
      let pt_left_Ceiling = {
        x: windowWidth * 0.012, y: 0, h: standard_platform_size, w: windowWidth * 0.325
      };
      let pt_t_Block_Right_Wall = {
        x: windowWidth * 0.592, y: windowHeight * 0.014, h: windowHeight * 0.37, w: standard_platform_size
      };
      let pt_t_Block_Ceiling = {
        x: windowWidth * 0.34, y: windowHeight * 0.355, h: standard_platform_size, w: windowWidth * 0.265
      };
      let pt_t_Block_Left_Wall = {
        x: windowWidth * 0.332, y: windowHeight * 0.015, h: windowHeight * 0.37, w: standard_platform_size
      };
      let pt_right_Floor = {
        x: windowWidth * 0.61, y: windowHeight - 15, h: standard_platform_size, w: windowWidth * 0.38
      };
      let pt_b_Block_Right_Wall = {
        x: windowWidth * 0.595, y: windowHeight * 0.66, h: windowHeight * 0.33, w: standard_platform_size
      };
      let pt_b_Block_Left_Wall = {
        x: windowWidth * 0.331, y: windowHeight * 0.66, h: windowHeight * 0.4, w: standard_platform_size
      };
      let pt_b_Block_Floor = {
        x: windowWidth * 0.34, y: windowHeight * 0.645, h: standard_platform_size, w: windowWidth * 0.265
      };
      let pt_left_Floor = {
        x: windowWidth * 0.015, y: windowHeight - 15, h: standard_platform_size, w: windowWidth * 0.32
      };
      map = [pt_left_Wall, pt_right_Wall, pt_right_Ceiling, pt_t_Block_Right_Wall, pt_t_Block_Ceiling, //4
        pt_t_Block_Left_Wall, pt_left_Ceiling, pt_right_Floor, pt_b_Block_Right_Wall, pt_b_Block_Left_Wall,
        pt_b_Block_Floor, pt_left_Floor,
      ];
      return map
    case "map3":
      //outer box
      let m3_right_wall = { x: windowWidth * 0.984, y: 0, h: windowHeight * 0.85, w: standard_platform_size };
      let m3_right_floor = { x: windowWidth * 0.92, y: windowHeight * 0.815, h: standard_platform_size, w: windowWidth * 0.065 };
      let m3_right_inner_wall = { x: windowWidth * 0.911, y: windowHeight * 0.83, h: windowHeight * 0.19, w: standard_platform_size };
      let m3_top_left_wall = { x: 0, y: windowHeight * 0.03, h: windowHeight * 0.33, w: standard_platform_size }
      let m3_left_ceiling = { x: windowWidth * 0.02, y: 0, h: standard_platform_size, w: windowWidth * 0.126 };
      let m3_left_middle_wall = { x: 0, y: windowHeight * 0.415, h: windowHeight * 0.175, w: standard_platform_size };

      //top left platform
      let m3_left_top_platform_top = { x: windowWidth * 0.02, y: windowHeight * 0.36, h: standard_platform_size, w: windowWidth * 0.13 };
      let m3_left_top_platform_side = { x: windowWidth * 0.149, y: windowHeight * 0.365, h: windowWidth * 0.025, w: 15 };
      let m3_left_top_platform_bottom = { x: windowWidth * 0.02, y: windowHeight * 0.378, h: standard_platform_size, w: windowWidth * 0.13 };

      //lower left platform
      let m3_left_lower_platform_top = { x: windowWidth * 0.02, y: windowHeight * 0.58, h: standard_platform_size, w: windowWidth * 0.13 };
      let m3_left_lower_platform_side = { x: windowWidth * 0.149, y: windowHeight * 0.585, h: windowWidth * 0.023, w: 15 };
      let m3_left_lower_platform_bottom = { x: 0, y: windowHeight * 0.595, h: standard_platform_size, w: windowWidth * 0.15 };

      //asteriod Belt
      let asteriod_Belt_platform = { x: windowWidth * 0.62, y: windowHeight * 0.4 + mapScroll, h: 10, w: windowWidth * 0.27 };


      map = [m3_right_wall, m3_top_left_wall, m3_left_ceiling,
        m3_right_inner_wall, asteriod_Belt_platform, m3_left_top_platform_top,
        m3_left_top_platform_side, m3_left_top_platform_bottom, m3_left_middle_wall,
        m3_right_floor, m3_left_lower_platform_top, m3_left_lower_platform_side,
        m3_left_lower_platform_bottom,
      ];
      return map;

    case "map4":
      //Starting square player stands on
      let l4_p1 = {
        x: windowWidth * 0.0005, y: windowHeight * 0.88, w: asteriodBeltWidth * 1.0, h: asteriodBeltHeight, type: "platform"
      };

      //Wall next to player blocking projectiles
      let l4_p2 = {
        x: windowWidth * 0.1276, y: windowHeight * 0.5185, w: asteriodBeltWidth * 0.28, h: asteriodBeltHeight * 6.8, type: "platform"
      };

      //Bottom left platform
      let l4_p3_left_bottom = {
        x: windowWidth * 0.2, y: (windowHeight * 0.5) + mapScroll, w: asteriodBeltWidth * 0.7, h: asteriodBeltHeight, type: "platform"
      };

      //Upper left platform
      let l4_p4_left_up = {
        x: windowWidth * 0.2, y: windowHeight * 0.001, w: asteriodBeltWidth * 0.7, h: asteriodBeltHeight, type: "platform"
      };

      //Bottom middle platform
      let l4_p5_middle_bottom = {
        x: windowWidth * 0.5, y: (windowHeight * 0.5) + mapScroll, w: asteriodBeltWidth * 0.7, h: asteriodBeltHeight, type: "platform"
      };

      //Upper middle platform
      let l4_p6_middle_up = {
        x: windowWidth * 0.5, y: windowHeight * 0.001, w: asteriodBeltWidth * 0.7, h: asteriodBeltHeight, type: "platform"
      };

      //Bottom middle platform
      let l4_p7_right_bottom = {
        x: windowWidth * 0.8, y: (windowHeight * 0.5) + mapScroll, w: asteriodBeltWidth * 0.7, h: asteriodBeltHeight, type: "platform"
      };

      //Upper middle platform
      let l4_p8_right_up = {
        x: windowWidth * 0.8, y: windowHeight * 0.001, w: asteriodBeltWidth * 0.7, h: asteriodBeltHeight, type: "platform"
      };

      map = [l4_p1, l4_p2, l4_p3_left_bottom, l4_p4_left_up, l4_p5_middle_bottom,
        l4_p6_middle_up, l4_p7_right_bottom, l4_p8_right_up];
      return map;
  }
}
