import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanSub: any;
  qrText: string

  constructor(public platform: Platform, private qrScanner: QRScanner) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementById('qr-code-scanner').style.opacity = '1';
    });
  }
  startScanning() {
    // Optionally request the permission early
    this.qrScanner.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();
          const divQrCode = document.getElementById("leitorqr");
          divQrCode.removeChild(divQrCode.firstChild);
          const imgQrCode = document.createElement("img");
          imgQrCode.src = "../../assets/Ativo 24.png";
          divQrCode.appendChild(imgQrCode);
          document.getElementById('qr-code-scanner').style.opacity = '0.2';
          document.getElementById('container').style.opacity = '0.6';
          document.getElementById('leitorqr').style.opacity = '1';

          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              document.getElementById('qr-code-scanner').style.opacity = '1';
              this.qrScanner.hide();
              this.scanSub.unsubscribe();

              this.qrText = textFound;
              console.log(this.qrText);

            }, (err) => {
              debugger;
              console.log(err)
            });
        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }


}
