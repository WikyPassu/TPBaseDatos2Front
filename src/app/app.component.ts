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
      texto: "Todos los tickets",
      ruta: "ticket/tickets",
      visible: false,
      botonitos: [
        {
          texto: "Todos los desperfectos",
          ruta: "ticket/desperfectos",
          visible: false
        },
        {
          texto: "Todos los no desperfectos",
          ruta: "ticket/noDesperfectos",
          visible: false
        }
      ]
    },
    {
      texto: "Atendidos por empleado",
      ruta: "empleado/atendidosPorEmpleado",
      visible: false,
      botonitos: [
        {
          texto: "Quien atiende mas",
          ruta: "ticket/quienAtiendeMas",
          visible: false
        },
        {
          texto: "Quien atiende menos",
          ruta: "ticket/quienAtiendeMenos",
          visible: false
        }
      ]
    },
    {
      texto: "Hora mas trabajo",
      ruta: "ticket/horaMasTrabajo",
      visible: false
    },
    {
      texto: "Hora menos trabajo",
      ruta: "ticket/horaMenosTrabajo",
      visible: false
    },
    {
      texto: "Tickets sin resolver",
      ruta: "ticket/sinResolver",
      visible: false
    },
    {
      texto: "Tickets resueltos",
      ruta: "ticket/resueltos",
      visible: false
    },
    {
      texto: "Desperfectos por zona",
      ruta: "ticket/desperfectosPorZona",
      visible: false,
      botonitos: [
        {
          texto: "Desperfectos Avellaneda",
          ruta: "ticket/desperfectosAvellaneda",
          visible: false
        },
        {
          texto: "Desperfectos Lomas de Zamora",
          ruta: "ticket/desperfectosLomasDeZamora",
          visible: false
        }
      ]
    },
    {
      texto: "Atencion por zona",
      ruta: "ticket/atencionPorZona",
      visible: false,
      botonitos: [
        {
          texto: "Atenciones Avellaneda",
          ruta: "ticket/atencionAvellaneda",
          visible: false
        },
        {
          texto: "Atenciones Lomas de Zamora",
          ruta: "ticket/atencionLomasDeZamora",
          visible: false
        }
      ]
    },
    {
      texto: "Quien hace mas",
      ruta: "ticket/quienHaceMas",
      visible: false
    },
    {
      texto: "Quien hace menos",
      ruta: "ticket/quienHaceMenos",
      visible: false
    },
    {
      texto: "Quien tiene sin resolver",
      ruta: "ticket/quienSinResolver",
      visible: false
    },
    {
      texto: "Quien tiene resuelto",
      ruta: "ticket/quienResuelto",
      visible: false
    },
    {
      texto: "Es empleado e hizo ticket",
      ruta: "ticket/esEmpleadoYGeneroTicket",
      visible: false
    },
    {
      texto: "Clientes por zona",
      ruta: "cliente/clientesPorZona",
      visible: false,
      botonitos: [
        {
          texto: "Clientes en Avellaneda",
          ruta: "cliente/clientesAvellaneda",
          visible: false
        },
        {
          texto: "Clientes en Lomas de Zamora",
          ruta: "cliente/clientesLomasDeZamora",
          visible: false
        },
        {
          texto: "Zona con mas clientes",
          ruta: "cliente/zonaMasClientes",
          visible: false
        },
        {
          texto: "Zona con menos clientes",
          ruta: "cliente/zonaMenosClientes",
          visible: false
        }
      ]
    },
    {
      texto: "Tickets por cliente",
      ruta: "cliente/ticketsPorCliente",
      visible: false
    },
    {
      texto: "Clientes a 5 km de AAC",
      ruta: "sucursal/clientesA5kmAtencionAlCliente",
      visible: false
    },
    {
      texto: "Empleados a 1 km de ST",
      ruta: "sucursal/empleadosA1kmServicioTecnico",
      visible: false
    }
  ];

  constructor(private datos: DataService) {}

  consultar(ruta){
    this.hacerInvisibleTodosCards();
    this.datos.getData("https://tp-bd2-passucci.herokuapp.com/"+ruta)
    .subscribe((data: any) => {
      this.response = JSON.stringify(data);
      console.log(data);
      this.hacerVisibleCard(ruta);
    });
  }

  hacerVisibleCard(ruta){
    for(let i=0; i<this.botones.length; i++){
      if(this.botones[i].ruta == ruta){
        this.botones[i].visible = true;
        break;
      }
      if(this.botones[i].hasOwnProperty("botonitos")){
        for(let j=0; j<this.botones[i].botonitos.length; j++){
          if(this.botones[i].botonitos[j].ruta == ruta){
            this.botones[i].botonitos[j].visible = true;
            break;
          }
        }
      }
    }
  }

  hacerInvisibleTodosCards(){
    for(let i=0; i<this.botones.length; i++){
      this.botones[i].visible = false;
      if(this.botones[i].hasOwnProperty("botonitos")){
        for(let j=0; j<this.botones[i].botonitos.length; j++){
          this.botones[i].botonitos[j].visible = false;
        }
      }
    }
  }
}
