import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProdutosService  , Produto} from 'src/app/servico/produtos.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage implements OnInit {



@Input () p!: Produto;

atualizar = false;

dados = {
  descricao: '',
  quantidade: '',
  valor: '',
}

  constructor(private modalCtrl:ModalController, private service:ProdutosService
    ) { }

  ngOnInit() {
    if(this.p){
      this.atualizar = true;
      this.dados = this.p;
    }
  }

  enviando(form: NgForm) {
    const usuario = form.value;
    if (this.atualizar) {
      this.service.update(usuario, this.p.codigo).subscribe(response => {
        // fechar o modal
        this.modalCtrl.dismiss(response);
      })
    } else {
      this.service.create(usuario).subscribe(response => {
        
        this.modalCtrl.dismiss(response);
      })
    }
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }
  
}
