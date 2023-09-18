import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/servico/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(private service: UsuarioService) { }

  usuarios: Usuario[] = [];

  ngOnInit() {
    this.service.getAll().subscribe(
      response => {
        this.usuarios = response;
       // console.log(response);
      }
    )
  }

}
