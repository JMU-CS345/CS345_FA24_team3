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
      let asteriod_Belt_platform = { x: windowWidth * 0.62, y: windowHeight * 0.4 + mapScroll, h: windowHeight * 0.05, w: windowWidth * 0.27 };


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
        x: windowWidth * 0.0005, y: windowHeight * 0.88, w: windowWidth * 0.142, h: windowHeight * 0.07, type: "platform"
      };

      //Wall next to player blocking projectiles
      let l4_p2 = {
        x: windowWidth * 0.1076, y: windowHeight * 0.5 + mapScroll, w: windowWidth * 0.0349, h: windowHeight * 0.3734, type: "platform"
      };

      //Bottom left platform
      let l4_p3_left_bottom = {
        x: windowWidth * 0.1076, y: (windowHeight * 0.5) + mapScroll, w: windowWidth * 0.125, h: windowHeight * 0.07, type: "platform"
      };

      //Upper left platform
      let l4_p4_left_up = {
        x: windowWidth * 0.15, y: windowHeight * 0.001, w: windowWidth * 0.08, h: windowHeight * 0.07, type: "platform"
      };

      //Bottom middle platform
      let l4_p5_middle_bottom = {
        x: windowWidth * 0.5, y: (windowHeight * 0.5) + mapScroll, w: windowWidth * 0.08, h: windowHeight * 0.07, type: "platform"
      };

      //Upper middle platform
      let l4_p6_middle_up = {
        x: windowWidth * 0.5, y: windowHeight * 0.001, w: windowWidth * 0.08, h: windowHeight * 0.07, type: "platform"
      };

      //Bottom middle platform
      let l4_p7_right_bottom = {
        x: windowWidth * 0.85, y: (windowHeight * 0.5) + mapScroll, w: windowWidth * 0.08, h: windowHeight * 0.07, type: "platform"
      };

      //Upper middle platform
      let l4_p8_right_up = {
        x: windowWidth * 0.85, y: windowHeight * 0.001, w: windowWidth * 0.08, h: windowHeight * 0.07, type: "platform"
      };

      map = [l4_p1, l4_p2, l4_p3_left_bottom, l4_p4_left_up, l4_p5_middle_bottom,
        l4_p6_middle_up, l4_p7_right_bottom, l4_p8_right_up];
      return map;

    case "map5":
      //Starting square player stands on
      let l5_p1 = {
        x: windowWidth * 0.0005, y: windowHeight * 0.95, w: windowWidth * 1, h: windowHeight * 0.05, type: "platform"
      };
      let l5_p2 = {
        x: windowWidth * 0.161, y: windowHeight * 0.88, w: windowWidth * 0.023, h: windowHeight * 0.25, type: "platform"
      };
      let l5_p3 = {
        x: windowWidth * 0.161, y: windowHeight * 0.72, w: windowWidth * 0.323, h: windowHeight * 0.06, type: "platform"
      };
      let l5_p4 = {
        x: windowWidth * 0.461, y: windowHeight * 0.52, w: windowWidth * 0.023, h: windowHeight * 0.2, type: "platform"
      };
      let l5_p5 = {
        x: windowWidth * 0.4838, y: windowHeight * 0.52, w: windowWidth * 0.18, h: windowHeight * 0.05, type: "platform"
      };
      let l5_p6 = {
        x: windowWidth * 0.6637, y: windowHeight * 0.52, w: windowWidth * 0.023, h: windowHeight * 0.2, type: "platform"
      };
      let l5_p7 = {
        x: windowWidth * 0.6637, y: windowHeight * 0.72, w: windowWidth * 0.343, h: windowHeight * 0.06, type: "platform"
      };
      let l5_p8 = {
        x: windowWidth * 0.5637, y: windowHeight * 0.69, w: windowWidth * 0.023, h: windowHeight * 0.26, type: "platform"
      };

      // JAIL
      let jail1 = {
        x: windowWidth * 0.025, y: windowHeight * 0.4, w: windowWidth * 0.162, h: windowHeight * 0.05, type: "platform"
      };
      let jail2 = {
        x: windowWidth * 0.002, y: windowHeight * 0.1884, w: windowWidth * 0.023, h: windowHeight * 0.262, type: "platform"
      };
      let jail3 = {
        x: windowWidth * 0.187, y: windowHeight * 0.1884, w: windowWidth * 0.023, h: windowHeight * 0.262, type: "platform"
      };
      let jail4 = {
        x: windowWidth * 0.048, y: windowHeight * 0.01, w: windowWidth * 0.132, h: windowHeight * 0.05, type: "platform"
      };

      map = [l5_p1, l5_p2, l5_p3, l5_p4, l5_p5, l5_p6, l5_p7, l5_p8, jail1, jail2, jail3, jail4];
      return map;

    case "map6":
      let l6_p1 = {
        x: windowWidth * 0, y: windowHeight * 0.15, w: windowWidth * 0.162, h: windowHeight * 0.05, type: "platform"
      };
      let l6_p2 = {
        x: windowWidth * 0.162, y: windowHeight * 0.15, w: windowWidth * 0.023, h: windowHeight * 0.662, type: "platform"
      };
      let l6_p3 = {
        x: windowWidth * 0.162, y: windowHeight * 0.812, w: windowWidth * 0.38, h: windowHeight * 0.05, type: "platform"
      };
      let l6_p4 = {
        x: windowWidth * 0.262, y: (windowHeight * 0) - (windowHeight * 0.3), w: windowWidth * 0.15, h: windowHeight * 0.93, type: "platform"
      };
      let l6_p9 = {
        x: windowWidth * 0.519, y: windowHeight * 0.521, w: windowWidth * 0.023, h: windowHeight * 0.29, type: "platform"
      };
      let l6_p10 = {
        x: windowWidth * 0.519, y: windowHeight * 0.47, w: windowWidth * 0.5, h: windowHeight * 0.05, type: "platform"
      };
      map = [l6_p1, l6_p2, l6_p3, l6_p4, l6_p9, l6_p10];
      return map;

    case "map7":
      //the top platform
      let l7_top_p1 = { x: 0, y: windowHeight * 0.2, w: windowWidth * 0.2, h: windowHeight * 0.05 };
      let l7_top_p2 = { x: windowWidth * 0.3, y: windowHeight * 0.2, w: windowWidth, h: windowHeight * 0.05 };


      //middle platform
      let l7_mid_p1 = { x: windowWidth * 0.2, y: windowHeight * 0.45, w: windowWidth * 0.2, h: windowHeight * 0.05 };


      //Bottom pieces
      let l7_bottom_right_piece = { x: 0, y: windowHeight * 0.75, w: windowWidth * 0.2, h: windowHeight * 0.05 };
      let l7_bottom_left_piece = { x: windowWidth * 0.75, y: windowHeight * 0.75, w: windowWidth * 0.3, h: windowHeight * 0.05 };

      //left platform wall
      let l7_left_wall = { x: windowWidth * 0.75, y: windowHeight * 0.35, w: windowWidth * 0.025, h: windowHeight * 0.8 };

      //right wall
      let l7_right_wall = { x: windowWidth * 0.99, y: windowHeight * 0.25, w: windowWidth * 0.025, h: windowHeight * 0.53 };

      map = [l7_top_p1, l7_top_p2, l7_mid_p1, l7_bottom_right_piece, l7_bottom_left_piece, l7_left_wall, l7_right_wall];
      return map;

    case "map8":

      // left wall
      let l8_left_wall = { x: windowWidth * 0.25, y: windowHeight * 0.85, w: windowWidth * 0.025, h: windowHeight * 0.15 };

      //left innner wall
      let l8_left_inner_wall = { x: windowWidth * 0.4, y: windowHeight * 0.75, w: windowWidth * 0.025, h: windowHeight * 0.25 };

      // right wall
      let l8_right_wall = { x: windowWidth * 0.75, y: windowHeight * 0.85, w: windowWidth * 0.025, h: windowHeight * 0.2 };

      //right innner walls
      let l8_right_inner_wall = { x: windowWidth * 0.6, y: windowHeight * 0.75, w: windowWidth * 0.025, h: windowHeight * 0.3 };

      //Roof
      let l8_roof = { x: 0, y: 0, w: windowWidth, h: windowHeight * 0.05 };

      //top left wall
      let l8_top_left_wall = { x: 0, y: 0, w: windowWidth * 0.025, h: windowHeight * 0.3 };

      //top right wall
      let l8_top_right_wall = { x: windowWidth * 0.98, y: 0, w: windowWidth * 0.025, h: windowHeight * 0.29 };

      //top left platform
      let l8_top_left_platform = { x: 0, y: windowHeight * 0.25, w: windowWidth * 0.2, h: windowHeight * 0.05 };

      //top middle platform
      let l8_top_middle_platform = { x: windowWidth * 0.4, y: windowHeight * 0.25, w: windowWidth * 0.2, h: windowHeight * 0.05 };

      //top right platform
      let l8_top_right_platform = { x: windowWidth * 0.8, y: windowHeight * 0.25, w: windowWidth * 0.2, h: windowHeight * 0.05 };


      map = [l8_left_wall, l8_left_inner_wall, l8_right_wall, l8_right_inner_wall, l8_roof,
        l8_top_left_wall, l8_top_left_platform, l8_top_middle_platform, l8_top_right_wall,
        l8_top_right_platform
      ];
      return map;

    case "boss":

      //left wall
      let boss_left_wall = { x: 0, y: 0, w: windowWidth * 0.025, h: windowHeight };

      //right wall
      let boss_right_wall = { x: windowWidth * 0.98, y: 0, w: windowWidth * 0.025, h: windowHeight };

      //floor

      let boss_floor = { x: windowWidth * 0.01, y: windowHeight * 0.98, w: windowWidth * 0.98, h: windowHeight * 0.05 };

      //roof
      let boss_roof = { x: 0, y: 0, w: windowWidth, h: windowHeight * 0.05 };

      //left platform

      let boss_left_platform = { x: windowWidth * 0.13, y: windowHeight * 0.73, w: windowWidth * 0.2, h: windowHeight * 0.05 };

      //right platform

      let boss_right_platform = { x: windowWidth * 0.67, y: windowHeight * 0.73, w: windowWidth * 0.2, h: windowHeight * 0.05 };


      map = [boss_right_wall, boss_left_wall, boss_floor, boss_roof, boss_left_platform, boss_right_platform];
      return map;

  }
}
