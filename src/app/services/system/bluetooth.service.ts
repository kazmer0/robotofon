import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BluetoothService {
  public bluetoothDevice: BluetoothDevice | null = null;
  public bluetoothWriter: BluetoothRemoteGATTCharacteristic | null = null;
  public isConnected: boolean = false;

  async connect() {
    try {
      await this.connectToESP32();
      alert('Connected to ESP32');
    } catch (error) {
    }
  }
  async connectToESP32() {

    let bluetoothDevice = await (navigator as any).bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'],
    });

    let bluetoothWriter: any;
    try {

      bluetoothDevice = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'],
      });

      const server = await bluetoothDevice.gatt!.connect();

      const service = await server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b');

      const characteristic = await service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8');
      bluetoothWriter = characteristic;

    } catch (error) {
    }
  }




  isDeviceConnected(): boolean {
    return this.isConnected;
  }

  disconnect(): void {
    if (this.bluetoothDevice && this.bluetoothDevice.gatt) {
     this.bluetoothDevice.gatt.disconnect();
    }
    this.bluetoothDevice = null;
    this.bluetoothWriter = null;
    this.isConnected = false;
  }

  isBluetoothDeviceNull(): boolean{
    if(this.bluetoothDevice != null){
      return false;
    }else{
      return true;
    }
  }

}

