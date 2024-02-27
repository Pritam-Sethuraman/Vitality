import { useEffect, useState } from "react";

const AccelerometerComponent = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    // Check if the Accelerometer API is supported
    if ("Accelerometer" in window) {
      const accelerometer = new Accelerometer({ frequency: 60 });

      accelerometer.addEventListener("reading", () => {
        // Update state with the latest acceleration data
        setAcceleration({
          x: accelerometer.x || 0,
          y: accelerometer.y || 0,
          z: accelerometer.z || 0,
        });
      });

      accelerometer.start();

      return () => {
        // Clean up by stopping the sensor when the component unmounts
        accelerometer.stop();
      };
    } else {
      console.warn("Accelerometer API not supported");
    }
  }, []);

  return (
    <div>
      <h1>Accelerometr Data</h1>
      <p>X: {acceleration.x}</p>
      <p>Y: {acceleration.y}</p>
      <p>Z: {acceleration.z}</p>
    </div>
  );
};
