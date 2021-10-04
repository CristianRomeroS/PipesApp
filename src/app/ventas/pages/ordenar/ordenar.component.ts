import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  enMayusculas:boolean=true;
  ordenarPor:string='';
  heroes:Heroe[]=[
    {
      nombre:'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'DareDevil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'LinternaVerde',
      vuela:true,
      color:Color.verde
    }

  ];
  cambiar(){
    
    console.log(this.enMayusculas);
    this.enMayusculas=!this.enMayusculas;
  }
  cambiarOrden(string:string){

    this.ordenarPor=string;
    console.log(this.ordenarPor)
  }


}
