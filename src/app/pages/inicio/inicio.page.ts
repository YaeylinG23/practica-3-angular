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
      Icon:"basketball-outline",
      name:"Alert Pages",
      redirectTo:"/alert"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
