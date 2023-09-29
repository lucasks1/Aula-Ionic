import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.page.html',
  styleUrls: ['./cheff.page.scss'],
})
export class CheffPage implements OnInit {

cheff: string | undefined;
  constructor() { }

  ngOnInit() {
  }

  exibir(){
    alert(this.cheff);
  }
}
