import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'David';
  nombre2 = 'daVid rOjAs hErrErA';
  arreglo = [1,2,3,4,5,6,7,8,9,10]; 
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  video = 'O80GnrE2sgQ';
  activar:boolean = true;

  heroe = {
    nombre: "piter",
    clave: "spiderman",
    edad: 21,
    dirrecion:{
      calle:"Primera",
      casa:17-15

    }
  }

  valorpromesa = new Promise ( (resolve, reject)=>{
    setTimeout( ()=>resolve('llegó la info'),3500);
  })

  fecha = new Date();
  
}
