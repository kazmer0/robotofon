import { BluetoothService } from './bluetooth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataSender {
  constructor(private bluetoothService:BluetoothService) { }

  async  C4_hang(){
     if (this.bluetoothService.isDeviceConnected() == false) {
         alert("Please connect to the ESP32 first.");
         return;
       }
       const dataC4 = new TextEncoder().encode("C4");
       if(this.bluetoothService.bluetoothWriter != null ){
        await this.bluetoothService.bluetoothWriter.writeValue(dataC4);
     }
       console.log("Servo moved to C4.");

  }

  async  D_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataD = new TextEncoder().encode("D");
    if(this.bluetoothService.bluetoothWriter != null ){
      await this.bluetoothService.bluetoothWriter.writeValue(dataD);
  }
     console.log("Servo moved to D.");
  }

  async E_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataE = new TextEncoder().encode("E");
    if(this.bluetoothService.bluetoothWriter != null ){
      await  this.bluetoothService.bluetoothWriter.writeValue(dataE);
  }
    console.log("Servo moved to E.");
  }

  async F_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
         alert("Please connect to the ESP32 first.");
         return;
       }
       const dataF = new TextEncoder().encode("F");
       if(this.bluetoothService.bluetoothWriter != null ){
        await  this.bluetoothService.bluetoothWriter.writeValue(dataF);
     }
       console.log("Servo moved to F.");
  }

  async G_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataG = new TextEncoder().encode("G");
    if(this.bluetoothService.bluetoothWriter != null ){
      await this.bluetoothService.bluetoothWriter.writeValue(dataG);
  }
    console.log("Servo moved to G.");
  }

  async  A_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
         alert("Please connect to the ESP32 first.");
         return;
       }
       const dataA = new TextEncoder().encode("A");
       if(this.bluetoothService.bluetoothWriter != null ){
        await  this.bluetoothService.bluetoothWriter.writeValue(dataA);
     }
       console.log("Servo moved to A.");
  }

  async B_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataB = new TextEncoder().encode("B");
    if(this.bluetoothService.bluetoothWriter != null ){
      await this.bluetoothService.bluetoothWriter.writeValue(dataB);
  }
    console.log("Servo moved to B.");
  }

  async C5_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataC5 = new TextEncoder().encode("C5");
    if(this.bluetoothService.bluetoothWriter != null ){
      await this.bluetoothService.bluetoothWriter.writeValue(dataC5);
  }
    console.log("Servo moved to C5.");
  }
  async sendHighFrequencyData() {
    for (let i = 0; i < 100; i++) {
      if(this.bluetoothService.bluetoothWriter != null ){
      await this.bluetoothService.bluetoothWriter.writeValue(new TextEncoder().encode(`${i}`));
      // Test with minimal delay
      await new Promise((resolve) => setTimeout(resolve, 2));
      } // 10ms
    }
  }
}
