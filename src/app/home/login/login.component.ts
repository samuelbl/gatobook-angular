import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void {}

  login() {
    console.log(this.usuario);
    console.log(this.senha);


    this.authService.autenticar(this.usuario, this.senha).subscribe(
      (x) => {
        console.log('autenticado com sucesso',x);
      },
      (error) => {
        alert('Usuario ou senha invalida');
        console.log(error);
      }
    );
  }
}
