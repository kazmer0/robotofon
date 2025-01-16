import { Component, OnInit } from '@angular/core';
import { DataSender } from '../../services/system/dataSender.services';
import { BluetoothService } from '../../services/system/bluetooth.service';


@Component({
  selector: 'app-taviranyito',

  templateUrl: './taviranyito.page.html',
  styleUrl: './taviranyito.page.scss'
})
export class TaviranyitoPage implements OnInit {
 areButtonsDisabled : boolean;
 lastPlayed : string;

  constructor(private funcs: DataSender, private bluetoothService: BluetoothService) {
    this.lastPlayed = '';
    this.areButtonsDisabled = false;
  }
  async connect() {
    try {
      await this.bluetoothService.connectToESP32();
      alert('Connected to ESP32');
    } catch (error) {
      alert('Failed to connect to ESP32');
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

      alert('Bluetooth connected');
    } catch (error) {
      console.error('Error connecting to Bluetooth device:', error);
    }
  }
  checkConnectionStatus() {
    if (this.bluetoothService.isDeviceConnected()) {
      console.log('The device is connected.');
    } else {
      console.log('The device is not connected.');
    }
  }

  play_C4(): void {
    this.funcs.C4_hang();

    this.areButtonsDisabled = true;

    let C4=document.getElementById("C4");
    let gomb_C4=document.getElementById("gomb_C4");
    if(C4 != null && gomb_C4 !=null){


      C4.style.backgroundColor = '#262626';
      gomb_C4.style.backgroundColor = '#262626';

      setTimeout(() => {

        C4.style.backgroundColor = 'var(--C)';
        gomb_C4.style.backgroundColor = 'var(--C)';
        this.areButtonsDisabled = false;
      }, 500);

    }

  }

  play_D(): void {
    this.funcs.D_hang();

    this.areButtonsDisabled = true;

    let D=document.getElementById("D");
    let gomb_D=document.getElementById("gomb_D");

    if(D !=null && gomb_D != null){
      D.style.backgroundColor = '#262626';
      gomb_D.style.backgroundColor = '#262626';

      setTimeout(() => {
          D.style.backgroundColor = 'var(--D)';
          gomb_D.style.backgroundColor = 'var(--D)';
          this.areButtonsDisabled = false;

      }, 500);
    }
  }

  play_E(): void {
    this.funcs.E_hang();

    this.areButtonsDisabled = true;

    let E=document.getElementById("E");
    let gomb_E=document.getElementById("gomb_E");

    if(E !=null && gomb_E != null){
      E.style.backgroundColor = '#262626';
      gomb_E.style.backgroundColor = '#262626';

      setTimeout(() => {
          E.style.backgroundColor = 'var(--E)';
          gomb_E.style.backgroundColor = 'var(--E)';
          this.areButtonsDisabled = false;

      }, 500);
    }
  }

  play_F(): void {
    this.funcs.F_hang();

    this.areButtonsDisabled = true;

    let F=document.getElementById("F");
    let gomb_F=document.getElementById("gomb_F");

    if(F !=null && gomb_F != null){
      F.style.backgroundColor = '#262626';
      gomb_F.style.backgroundColor = '#262626';

      setTimeout(() => {
          F.style.backgroundColor = 'var(--F)';
          gomb_F.style.backgroundColor = 'var(--F)';
          this.areButtonsDisabled = false;

      }, 500);
    }
  }

  play_G(): void {
    this.funcs.G_hang();

    this.areButtonsDisabled = true;

    let G=document.getElementById("G");
    let gomb_G=document.getElementById("gomb_G");

    if(G !=null && gomb_G != null){
      G.style.backgroundColor = '#262626';
      gomb_G.style.backgroundColor = '#262626';

      setTimeout(() => {
          G.style.backgroundColor = 'var(--G)';
          gomb_G.style.backgroundColor = 'var(--G)';
          this.areButtonsDisabled = false;

      }, 500);
    }
  }

  play_A(): void {
    this.funcs.A_hang();

    this.areButtonsDisabled = true;

    let A=document.getElementById("A");
    let gomb_A=document.getElementById("gomb_A");

    if(A !=null && gomb_A != null){
      A.style.backgroundColor = '#262626';
      gomb_A.style.backgroundColor = '#262626';

      setTimeout(() => {
          A.style.backgroundColor = 'var(--A)';
          gomb_A.style.backgroundColor = 'var(--A)';
          this.areButtonsDisabled = false;

      }, 500);
    }
  }

  play_B(): void {
    this.funcs.B_hang();

    this.areButtonsDisabled = true;

    let B=document.getElementById("B");
    let gomb_B=document.getElementById("gomb_B");

    if(B !=null && gomb_B != null){
      B.style.backgroundColor = '#262626';
      gomb_B.style.backgroundColor = '#262626';

      setTimeout(() => {
          B.style.backgroundColor = 'var(--B)';
          gomb_B.style.backgroundColor = 'var(--B)';
          this.areButtonsDisabled = false;

      }, 500);
    }
  }

  play_C5(): void {
    this.funcs.C5_hang();

    this.areButtonsDisabled = true;

    let C5=document.getElementById("C5");
    let gomb_C5=document.getElementById("gomb_C5");

    if(C5 !=null && gomb_C5 != null){
      C5.style.backgroundColor = '#262626';
      gomb_C5.style.backgroundColor = '#262626';

      setTimeout(() => {
          C5.style.backgroundColor = 'var(--C)';
          gomb_C5.style.backgroundColor = 'var(--C)'
          this.areButtonsDisabled = false;
          ;
      }, 500);
    }
  }

  ngOnInit() {


document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case"A": case"a":
        this.play_C4();
        break;
        case"S": case"s":
        this.play_D;
        break;
        case"D": case"d":
        this.play_E;
        break;
        case"F": case"f":
        this.play_F;
        break;
        case"G": case"g":
        this.play_G;
        break;
        case"H": case"h":
        this.play_A;
        break;
        case"J": case"j":
        this.play_B;
        break;
        case"K": case"k":
        this.play_C5;
        break;
        default:
        break;
    }
})

  }

}
