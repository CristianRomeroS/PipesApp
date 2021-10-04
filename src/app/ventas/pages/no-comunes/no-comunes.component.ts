import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string='Fernado';
  genero:string="masculino";
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  //i18nPlural

  cliente:string[]=['maria','pedro','goku','trunks','gohan'];

  clienteMapa={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  cambiarCliente(){
    console.log('okey');
    if(this.genero=='masculino'){
      this.nombre='Susana';
      this.genero='femenino';
    }else{
      this.nombre='Fernando';
      this.genero='masculino';
    }
    
    console.log(this.genero);
    console.log(this.nombre);
    
  }
  borrarCliente(){
    console.log('okey2');
    this.cliente.pop();
    
  }

  //keyValue pipe
  persona={
    nombre:'fernado',
    edad:45,
    direccion:'NY USA'
  }
  heroes=[
    {
      nombre:'superman',
      vuela:true
    },
    {
      nombre:'aquaman',
      vuela:false
    },
    {
      nombre:'spiderman',
      vuela:false
    }
  ]
  //Async pipe

  miObservable=interval(1000);//0,1,2,3,4...
  valorPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('tenemosdata de promesa')
    },3500)
  })
}
