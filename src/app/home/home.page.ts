import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface IResquestQRCode {
  urlRede: string;
  uuidEmpresa: string;
}


interface HttpOptions {
  headers: HttpHeaders;
  body?: object;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scanSub: any;
  qrText: IResquestQRCode;


  constructor(private http: HttpClient, public platform: Platform, private qrScanner: QRScanner, private router: Router) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementById('qr-code-scanner').style.opacity = '1';
    });
  }

  public getHttpOptions(): HttpOptions {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
      })
    };
  }

  public get({ urlRede, uuidEmpresa }: IResquestQRCode): Observable<any> {
    return this.http.get(`${urlRede}/appconvenio/empresa/${uuidEmpresa}`, this.getHttpOptions()).pipe(
      tap((res) => {
        return res || {};
      }),
      shareReplay(),
    );
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
          document.getElementById('qr-code-scanner').style.opacity = '0';

          this.scanSub = this.qrScanner.scan()
            .subscribe((textFound: string) => {
              document.getElementById('qr-code-scanner').style.opacity = '1';
              this.qrText = JSON.parse(textFound);
              console.log(this.qrText);
              if (navigator.onLine) {
                this.get(this.qrText).subscribe(data => {
                  if (data.sucesso == true) {
                    Plugins.Storage.set({ key: "auth", value: textFound })
                    this.qrScanner.hide();
                    this.scanSub.unsubscribe();
                    this.qrScanner.destroy();
                    this.router.navigate(['ler-placa-veiculo']);
                  }
                }, (err) => {
                  //tratar a falha de conexao
                  console.log(err);
                });
              } else {
                //tratar falta de internet
              }
            }, (err) => {
              //tratar erro de leitura
              console.log(err)
            });
        } else if (status.denied) {
          this.qrScanner.openSettings();
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}
