import { Component, OnInit } from '@angular/core';

interface Componente{
  Icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes:Componente[]=[
    {
      Icon:"football-outline",
      name:"Action-Sheet Pages",
      redirectTo:"/action-sheet"
    },
    {
      Icon:"football-outline",
      name:"Alert Pages",
      redirectTo:"/alert"
    },
    {
      Icon:"football-outline",
      name:"Checkbox Pages",
      redirectTo:"/checkbox"
    },
    {
      Icon:"football-outline",
      name:"Chip Pages",
      redirectTo:"/chip"
    },
    {
      Icon:"football-outline",
      name:"Content Pages",
      redirectTo:"/content"
    },
    {
      Icon:"football-outline",
      name:"Date & Time Pickers Pages",
      redirectTo:"/date-time"
    },
    {
      Icon:"football-outline",
      name:"Floating Action Button Pages",
      redirectTo:"/floating-action"
    },
    {
      Icon:"football-outline",
      name:"Grid Pages",
      redirectTo:"/grid"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
