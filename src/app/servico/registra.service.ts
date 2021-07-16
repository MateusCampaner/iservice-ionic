import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistraService {

  private api = 'http://localhost/api-iservice/';



  constructor(private http: HttpClient) {;
  }


  public async adiciona(nome, email, senha, telefone, tipoConta){
    this.http.get<any[]>(this.api+'registro.php?nome=' + nome + '&email=' + email + '&senha=' + senha +
                          '&telefone=' + telefone + '&tipoConta=' + tipoConta)
    .subscribe( dados => {
              });
  }


}