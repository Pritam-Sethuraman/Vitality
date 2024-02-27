"use client";

import { useEffect, useState } from "react";

interface SensorDataState {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}

function SensorData() {
  const [sensorData, setSensorData] = useState<SensorDataState>({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleDeviceMotion = (eventData: DeviceMotionEvent) => {
      console.log("Device Motion Event:", eventData);

      setSensorData({
        alpha: eventData.rotationRate?.alpha || null,
        beta: eventData.rotationRate?.beta || null,
        gamma: eventData.rotationRate?.gamma || null,
      });
    };

    if (typeof window !== "undefined" && window.DeviceMotionEvent) {
      console.log("Supported");
      window.addEventListener("devicemotion", handleDeviceMotion, false);

      return () => {
        console.log("Removing Event Listener");
        window.removeEventListener("devicemotion", handleDeviceMotion);
      };
    } else {
      console.log("Not Supported");
    }
  }, []);

  return (
    <div>
      {isClient ? (
        <div>
          <div>Alpha: {sensorData.alpha}</div>
          <div>Beta: {sensorData.beta}</div>
          <div>Gamma: {sensorData.gamma}</div>
        </div>
      ) : (
        <div>Not Client</div>
      )}
    </div>
  );
}

export default SensorData;
