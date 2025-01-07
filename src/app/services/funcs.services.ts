import { BluetoothService } from './bluetooth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataSender {
  constructor(private bluetoothService:BluetoothService) { }

  C4_hang(){

    console.log(this.bluetoothService.isDeviceConnected());
     if (this.bluetoothService.isDeviceConnected() == false) {
         alert("Please connect to the ESP32 first.");
         return;
       }
       const dataC4 = new TextEncoder().encode("C4");
       if(this.bluetoothService.bluetoothWriter != null ){
       this.bluetoothService.bluetoothWriter.writeValue(dataC4);
     }
       console.log("Servo moved to C4.");

  }

  D_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataD = new TextEncoder().encode("D");
    if(this.bluetoothService.bluetoothWriter != null ){
    this.bluetoothService.bluetoothWriter.writeValue(dataD);
  }
     console.log("Servo moved to D.");
  }

  E_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataE = new TextEncoder().encode("E");
    if(this.bluetoothService.bluetoothWriter != null ){
    this.bluetoothService.bluetoothWriter.writeValue(dataE);
  }
    console.log("Servo moved to E.");
  }

  F_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
         alert("Please connect to the ESP32 first.");
         return;
       }
       const dataF = new TextEncoder().encode("F");
       if(this.bluetoothService.bluetoothWriter != null ){
       this.bluetoothService.bluetoothWriter.writeValue(dataF);
     }
       console.log("Servo moved to F.");
  }

  G_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataG = new TextEncoder().encode("G");
    if(this.bluetoothService.bluetoothWriter != null ){
    this.bluetoothService.bluetoothWriter.writeValue(dataG);
  }
    console.log("Servo moved to G.");
  }

  A_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
         alert("Please connect to the ESP32 first.");
         return;
       }
       const dataA = new TextEncoder().encode("A");
       if(this.bluetoothService.bluetoothWriter != null ){
       this.bluetoothService.bluetoothWriter.writeValue(dataA);
     }
       console.log("Servo moved to A.");
  }

  B_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataB = new TextEncoder().encode("B");
    if(this.bluetoothService.bluetoothWriter != null ){
    this.bluetoothService.bluetoothWriter.writeValue(dataB);
  }
    console.log("Servo moved to B.");
  }

  C5_hang(){
    if (this.bluetoothService.isDeviceConnected() == false) {
      alert("Please connect to the ESP32 first.");
      return;
    }
    const dataC5 = new TextEncoder().encode("C5");
    if(this.bluetoothService.bluetoothWriter != null ){
    this.bluetoothService.bluetoothWriter.writeValue(dataC5);
  }
    console.log("Servo moved to C5.");
  }
}
