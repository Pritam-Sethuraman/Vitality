"use client";

import { Button } from "./ui/button";

function SensorData() {
  function handleMotionEvent(event: DeviceMotionEvent) {
    const x_accl = event.accelerationIncludingGravity?.x;
    const y_accl = event.accelerationIncludingGravity?.y;
    const z_accl = event.accelerationIncludingGravity?.z;

    console.log("Acceleration X: ", x_accl);
    console.log("Acceleration Y: ", y_accl);
    console.log("Acceleration Z: ", z_accl);
  }

  function startDeviceMotionListener() {
    window.addEventListener("devicemotion", handleMotionEvent);
  }

  function stopDeviceMotionListener() {
    window.removeEventListener("devicemotion", handleMotionEvent);
  }

  return (
    <div>
      <h1>Device Motion</h1>
      <Button variant="outline" onClick={startDeviceMotionListener}>
        Start Listening
      </Button>
      <Button variant="outline" onClick={stopDeviceMotionListener}>
        Stop Listening
      </Button>
    </div>
  );
}

export default SensorData;
