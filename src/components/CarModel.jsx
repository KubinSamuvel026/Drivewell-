import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CarModel(props) {
  const { nodes, materials } = useGLTF('/2021_tata_safari.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 110.451, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group position={[0.905, 1.737, -0.678]}>
            <group position={[0.001, 0, 0]}>
              <mesh castShadow receiveShadow geometry={nodes.wheel_fr_chassis1_0.geometry} material={materials['chassis.1']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fr_chassis4_0.geometry} material={materials['chassis.4']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fr_chassis0_0.geometry} material={materials['chassis.0']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fr_primary_0.geometry} material={materials.primary} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fr_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fr_wheel_rf5_0.geometry} material={materials['wheel_rf.5']} />
            </group>
            <group position={[0.001, -3.108, 0]}>
              <mesh castShadow receiveShadow geometry={nodes.wheel_rr_chassis0_0.geometry} material={materials['chassis.0']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_rr_chassis1_0.geometry} material={materials['chassis.1']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_rr_primary_0.geometry} material={materials.primary} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_rr_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            </group>
            <group position={[-1.81, -3.108, 0]} scale={[-1, 1, 1]}>
              <mesh castShadow receiveShadow geometry={nodes.wheel_rl_chassis0_0.geometry} material={materials['chassis.0']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_rl_chassis1_0.geometry} material={materials['chassis.1']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_rl_primary_0.geometry} material={materials.primary} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_rl_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            </group>
            <group position={[-1.81, 0, 0]} scale={[-1, 1, 1]}>
              <mesh castShadow receiveShadow geometry={nodes.wheel_fl_chassis1_0.geometry} material={materials['chassis.1']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fl_chassis4_0.geometry} material={materials['chassis.4']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fl_chassis0_0.geometry} material={materials['chassis.0']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fl_primary_0.geometry} material={materials.primary} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fl_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
              <mesh castShadow receiveShadow geometry={nodes.wheel_fl_wheel_rf5_0.geometry} material={materials['wheel_rf.5']} />
            </group>
          </group>
          <group position={[0, 3.675, -1.138]}>
            <mesh castShadow receiveShadow geometry={nodes.hub_lb_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.hub_lb_chassis4_0.geometry} material={materials['chassis.4']} />
          </group>
          <group position={[0, 3.675, -1.138]}>
            <mesh castShadow receiveShadow geometry={nodes.hub_rb_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.hub_rb_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.hub_rb_wheel_rf5_0.geometry} material={materials['wheel_rf.5']} />
          </group>
          <group position={[0, 3.675, -1.138]}>
            <mesh castShadow receiveShadow geometry={nodes.chassis_chassis5_0.geometry} material={materials['chassis.5']} />
            <mesh castShadow receiveShadow geometry={nodes.chassis_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.chassis_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.chassis_chassis3_0.geometry} material={materials['chassis.3']} />
            <mesh castShadow receiveShadow geometry={nodes.chassis_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.chassis_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.bodyshell_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_01_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_01_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_01_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_02_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_02_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_03_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_03_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_03_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_03_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_04_safari_b_040_0.geometry} material={materials['safari_b_04.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_06_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_06_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_06_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_06_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_06_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_07_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_07_safari_b_072_0.geometry} material={materials['safari_b_07.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_07_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_07_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_07_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_07_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_08_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_08_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_08_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_08_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_08_safari_b_080_0.geometry} material={materials['safari_b_08.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_08_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_safari_b_114_0.geometry} material={materials['safari_b_11.4']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_09_safari_b_090_0.geometry} material={materials['safari_b_09.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_safari_b_100_0.geometry} material={materials['safari_b_10.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_safari_b_101_0.geometry} material={materials['safari_b_10.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_10_safari_b_106_0.geometry} material={materials['safari_b_10.6']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_safari_b_114_0.geometry} material={materials['safari_b_11.4']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_safari_b_106_0.geometry} material={materials['safari_b_10.6']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_11_safari_b_090_0.geometry} material={materials['safari_b_09.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_12_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_12_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_12_safari_b_122_0.geometry} material={materials['safari_b_12.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_b_12_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_safari_b_114_0.geometry} material={materials['safari_b_11.4']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_dashboard6_0.geometry} material={materials['dashboard.6']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_dashboard7_0.geometry} material={materials['dashboard.7']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_back_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard_back_safari_b_101_0.geometry} material={materials['safari_b_10.1']} />
            <mesh castShadow receiveShadow geometry={nodes.dashboard001_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.steeringwheel_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.steeringwheel_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.steeringwheel_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.steeringwheel_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.steeringwheel_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.indicator_lights_safari_b_122_0.geometry} material={materials['safari_b_12.2']} />
            <mesh castShadow receiveShadow geometry={nodes.tailight_right_rear_light_0.geometry} material={materials.right_rear_light} />
            <mesh castShadow receiveShadow geometry={nodes.taillight_b_glass_glass001_0.geometry} material={materials['glass.001']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_chassis3_0.geometry} material={materials['chassis.3']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_safari_b_122_0.geometry} material={materials['safari_b_12.2']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_safari_b_114_0.geometry} material={materials['safari_b_11.4']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_backseats_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_backseats_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_backseats_safari_b_106_0.geometry} material={materials['safari_b_10.6']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_backseats_safari_b_090_0.geometry} material={materials['safari_b_09.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_chassis5_0.geometry} material={materials['chassis.5']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_chassis3_0.geometry} material={materials['chassis.3']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_i_middleseats_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.headlights_led_right_front_light_0.geometry} material={materials.right_front_light} />
            <mesh castShadow receiveShadow geometry={nodes.headlight_glass_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.safari_t_sunroof_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_t_sunroof_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_t_sunroof_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_glass_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.sunroof_glass_glass002_0.geometry} material={materials['glass.002']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_led_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_led_right_front_light_0.geometry} material={materials.right_front_light} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_bo_lights_glass_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.lights_1_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.windscreen_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.window_rm_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.window_lm_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.tailight_glass_glass001_0.geometry} material={materials['glass.001']} />
          </group>
          <group position={[-0.983, 1.154, 0.027]}>
            <mesh castShadow receiveShadow geometry={nodes.door_lf_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_dashboard7_0.geometry} material={materials['dashboard.7']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lf_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.window_lf_glass_0.geometry} material={materials.glass} />
          </group>
          <group position={[0.984, 1.155, 0.028]}>
            <mesh castShadow receiveShadow geometry={nodes.door_rf_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_dashboard7_0.geometry} material={materials['dashboard.7']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rf_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.window_rf_glass_0.geometry} material={materials.glass} />
          </group>
          <group position={[-1.011, -0.081, 0.027]}>
            <mesh castShadow receiveShadow geometry={nodes.door_lr_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_lr_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.window_lr_glass_0.geometry} material={materials.glass} />
          </group>
          <group position={[0, -1.883, 0.896]}>
            <mesh castShadow receiveShadow geometry={nodes.boot_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.boot_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.boot_safari_b_114_0.geometry} material={materials['safari_b_11.4']} />
            <mesh castShadow receiveShadow geometry={nodes.boot_boot0_0.geometry} material={materials['boot.0']} />
            <mesh castShadow receiveShadow geometry={nodes.boot_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.boot_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.boot_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.boot_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_boot_grills_safari_boot_grills0_0.geometry} material={materials['safari_boot_grills.0']} />
            <mesh castShadow receiveShadow geometry={nodes.safari_boot_lights_led_right_rear_light_0.geometry} material={materials.right_rear_light} />
            <mesh castShadow receiveShadow geometry={nodes.safari_boot_windowscreen_glass_0.geometry} material={materials.glass} />
            <mesh castShadow receiveShadow geometry={nodes.boot_light_glass_glass001_0.geometry} material={materials['glass.001']} />
          </group>
          <group position={[1.011, -0.082, 0.028]}>
            <mesh castShadow receiveShadow geometry={nodes.door_rr_chassis4_0.geometry} material={materials['chassis.4']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_chassis0_0.geometry} material={materials['chassis.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_chassis2_0.geometry} material={materials['chassis.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_primary_0.geometry} material={materials.primary} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_safari_b_032_0.geometry} material={materials['safari_b_03.2']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_safari_b_070_0.geometry} material={materials['safari_b_07.0']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_chassis1_0.geometry} material={materials['chassis.1']} />
            <mesh castShadow receiveShadow geometry={nodes.door_rr_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
            <mesh castShadow receiveShadow geometry={nodes.window_rr_glass_0.geometry} material={materials.glass} />
          </group>
          <group position={[0, 3.675, -1.138]}>
            <mesh castShadow receiveShadow geometry={nodes.chassis001_safari_b_031_0.geometry} material={materials['safari_b_03.1']} />
            <mesh castShadow receiveShadow geometry={nodes.chassis001_safari_b_102_0.geometry} material={materials['safari_b_10.2']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/2021_tata_safari.glb')
