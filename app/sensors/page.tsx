import SensorData from "@/components/sensor-data";

function SensorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sensors Page</h1>
      <SensorData />
    </main>
  );
}

export default SensorPage;
