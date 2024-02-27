"use client";

import { useState } from "react";
import { Button } from "./ui/button";

function SensorData() {
  const [motionData, setMotionData] = useState<DeviceMotionEvent | null>(null);

  function handleMotionEvent(event: DeviceMotionEvent) {
    setMotionData(event);
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

      {motionData && (
        <div>
          <h2>Motion Data:</h2>
          <p>Acceleration X: {motionData.accelerationIncludingGravity?.x}</p>
          <p>Acceleration Y: {motionData.accelerationIncludingGravity?.y}</p>
          <p>Acceleration Z: {motionData.accelerationIncludingGravity?.z}</p>
        </div>
      )}
    </div>
  );
}

export default SensorData;
