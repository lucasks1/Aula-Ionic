import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Usuario, UsuariosService } from 'src/app/servico/usuarios.service';
import { AddusuarioPage } from '../addusuario/addusuario.page';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private service: UsuariosService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response =>{
      this.usuarios = response;
    })
  }

  remover(id:any){
    this.service.remove(id).subscribe(()=>{
      //depois que remover, quero que atualize a lista, então vou pegar a instrução do ngOnInit()
      this.service.getAll().subscribe(response =>{
        this.usuarios = response;
      });
      //--- inserir o toast
      this.toastCtrl.create({
        message: 'Usuário apagado',
        duration: 2000
      }).then(toast => {toast.present();})
    })
  }

  novoUsuario(){
    this.modalCtrl.create({
      component: AddusuarioPage
    }).then(modal => {
      modal.present();
      //esta instrução pega o retorno da página
      return modal.onDidDismiss();
    }).then(({data}) => {
      // fazemos o retorno das informações que estão no onOnInit
      this.service.getAll().subscribe(response =>{
        this.usuarios = response;
      });
      //--- inserir o toast
      this.toastCtrl.create({
        message: 'Usuário cadastrado',
        duration: 2000
      }).then(toast => {toast.present();})
    })
  }

  atualizar(u: Usuario){
    // console.log(u);
    this.modalCtrl.create({
      component: AddusuarioPage,
      //abaixo estamos passando o conteúdo de u
      componentProps: {u}
    }).then(modal => {  // veja que aqui para baixo, é justamente para atualizar após o retorno
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(response =>{
        this.usuarios = response;
      });
      //--- inserir o toast
      this.toastCtrl.create({
        message: 'Usuário atualizado',
        duration: 2000
      }).then(toast => {toast.present();})
    })
  }





}
