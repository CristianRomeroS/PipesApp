import { Component,OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // nombre:string='Fernando';
  // valor:number=10010;
  // obj:object={
  //   nombre:'Fernando'
  // }

  // mostrarNombre(){
  //   console.log(this.nombre);
  //   console.log(this.valor);
  // }
  constructor(private primeNGConfig:PrimeNGConfig){  }

  ngOnInit() {
    this.primeNGConfig.ripple=true;
  }
}
