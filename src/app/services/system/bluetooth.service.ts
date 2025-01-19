import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BluetoothService {
  public bluetoothDevice: BluetoothDevice | null = null;
  public bluetoothWriter: BluetoothRemoteGATTCharacteristic | null = null;
  private isConnected: boolean = false; // Track connection status manually

  async connectToESP32(): Promise<void> {
    try {
      if (!this.bluetoothDevice) {
        this.bluetoothDevice = await navigator.bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: ['4fafc201-1fb5-459e-8fcc-c5c9c331914b'], // BLE Service UUID
        });

        const server = await this.bluetoothDevice.gatt!.connect();
        const service = await server.getPrimaryService('4fafc201-1fb5-459e-8fcc-c5c9c331914b');
        this.bluetoothWriter = await service.getCharacteristic('beb5483e-36e1-4688-b7f5-ea07361b26a8');

        this.isConnected = true; // Update connection status
      }
    } catch (error) {

      throw error;
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
    this.isConnected = false; // Reset connection status
  }

  isBluetoothDeviceNull(): boolean{
    if(this.bluetoothDevice != null){
      return false;
    }else{
      return true;
    }
  }

}

