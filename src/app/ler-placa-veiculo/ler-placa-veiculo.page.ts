import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, share, shareReplay, tap } from 'rxjs/operators';


interface IResquestQRCode {
  urlRede: string;
  uuidEmpresa: string;
  placa: string;
}

interface IDadosRequestCupom {
  codigo: string;
  placa: string;
}

interface HttpOptions {
  headers: HttpHeaders;
  body?: object;
}

interface IRequestVoucher {
  placaValida: boolean;
  temCodigoCliente: boolean;
  idGrupoDesconto: number;
}

@Component({
  selector: 'app-ler-placa-veiculo',
  templateUrl: './ler-placa-veiculo.page.html',
  styleUrls: ['./ler-placa-veiculo.page.scss'],
})


export class LerPlacaVeiculoPage implements OnInit {
  auth: IResquestQRCode;
  dadosForm: IDadosRequestCupom = { placa: "", codigo: "" };
  cupomDesconto: string;
  respostaValidarPlaca: IRequestVoucher;
  mensagemDeErroPlaca: string;
  constructor(private http: HttpClient, private router: Router) {
    Plugins.Storage.get({ key: 'auth' }).then((authLocalStorage) => {
      this.auth = JSON.parse(authLocalStorage.value);
      if (!this.auth.uuidEmpresa) {
        this.router.navigate(['home']);
      }
    });
  }
  public getHttpOptions(): HttpOptions {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      })
    };
  }

  public get(urlRede, uuidEmpresa, placa): Observable<any> {
    return this.http.get(`${urlRede}/appconvenio/empresa/integracao/${uuidEmpresa}/${placa}`, this.getHttpOptions()).pipe(
      tap((res) => {
        return res || {};
      }),
      shareReplay(),
    );
  }

  public post({ urlRede, path, data }: {
    urlRede: string;
    path: string;
    data: object;
  }): Observable<any> {
    return this.http.post(urlRede + path, data == null ? null : JSON.stringify(data), this.getHttpOptions())
      .pipe(
        tap((res) => {
          return res || {};
        }),
      );
  }


  validarPlaca() {
    this.get(this.auth.urlRede, this.auth.uuidEmpresa, this.dadosForm.placa).subscribe(({ placaValida, temCodigoCliente, idGrupoDesconto }) => {
      this.respostaValidarPlaca = { placaValida, temCodigoCliente, idGrupoDesconto };
      if (this.respostaValidarPlaca.placaValida === true) {
        const requestCupomDesconto = {
          urlRede: this.auth.urlRede,
          path: "/appconvenio/empresa/voucher",
          data: {
            idGrupoDesconto,
            placa: this.dadosForm.placa
          }
        }

        this.post(requestCupomDesconto).subscribe(({ codigo, dataHoraGeracao, dataHoraExpiracao }) => {
          this.cupomDesconto = codigo;
        });
      } else {
        this.mensagemDeErroPlaca = "Placa Inválida!"
      }

    });
  }

  ngOnInit() {
  }

  limparCampos() {
    this.dadosForm.placa = "";
    this.dadosForm.codigo = "";
  }

}
