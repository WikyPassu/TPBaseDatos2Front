import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: String = 'Ticketera';
  response: any;
  botones = [
    {
      texto: "Todos los desperfectos",
      ruta: "ticket/desperfectos"
    },
    {
      texto: "Quien atiende mas tickets",
      ruta: "ticket/quienAtiendeMas"
    },
    {
      texto: "A que hora hay mas trabajo",
      ruta: "ticket/horaMasTrabajo"
    },
    {
      texto: "Que trabajo esta sin resolver",
      ruta: "ticket/sinResolver"
    },
    {
      texto: "Desperfectos por zona",
      ruta: "ticket/desperfectosPorZona"
    },
    {
      texto: "Atencion hecha por zona",
      ruta: "ticket/atencionPorZona"
    },
    {
      texto: "Quien hace mas tickets",
      ruta: "ticket/quienHaceMas"
    },
    {
      texto: "Quien tiene ticket sin resolver",
      ruta: "ticket/quienSinResolver"
    },
    {
      texto: "En que zona hay mas clientes",
      ruta: "cliente/zonaMasClientes"
    },
    {
      texto: "Cliente empleado y genero ticket",
      ruta: "ticket/esEmpleadoYGeneroTicket"
    }
  ];

  constructor(private datos: DataService) {}

  consultar(ruta){
    this.datos.getData("https://tp-bd2-passucci.herokuapp.com/"+ruta)
    .subscribe((data: any) => {
      this.response = JSON.stringify(data);
      console.log(data);
    });
  }
}
