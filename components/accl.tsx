import React, { Component } from "react";

interface AccelerometerData {
  x: number;
  y: number;
  z: number;
}

class AccelerometerComponent extends Component<{}, AccelerometerData> {
  private acl: Accelerometer;

  constructor(props: {}) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      z: 0,
    };

    this.acl = new Accelerometer({ frequency: 60 });
  }

  componentDidMount() {
    this.acl.addEventListener("reading", this.handleAccelerometerReading);
    this.acl.start();
  }

  componentWillUnmount() {
    this.acl.removeEventListener("reading", this.handleAccelerometerReading);
    this.acl.stop();
  }

  handleAccelerometerReading = () => {
    this.setState({
      x: this.acl.x,
      y: this.acl.y,
      z: this.acl.z,
    });
  };

  render() {
    const { x, y, z } = this.state;

    return (
      <div>
        <h1>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</h1>
        <p>
          x: {this.round(x)} y: {this.round(y)} z: {this.round(z)}
        </p>
      </div>
    );
  }

  private round(value: number) {
    // You can add your own logic for rounding if needed
    return Math.round(value * 100) / 100;
  }
}

export default AccelerometerComponent;
