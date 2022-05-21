import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  retornaToken() {
    //pega token do local storage, se não tiver deixa vazio
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  exluiToken() {
    localStorage.removeItem(KEY);
  }

  possuiToken(){
    //verifica só se existe o token
    return !! this.retornaToken();
  }

}
