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
    },
    {
      Icon:"checkmark-circle-outline",
      name:"Radio",
      redirectTo:"/radio"
    },
    {
      Icon:"sync-circle-outline",
      name:"Progress-Indictarors",
      redirectTo:"/progress-indictarors"
    },
    {
      Icon:"swap-horizontal-outline",
      name:"Navigation",
      redirectTo:"/navigation"
    },
    {
      Icon:"chatbox-outline",
      name:"Popover",
      redirectTo:"/popover"
    },
    {
      Icon:"reader-outline",
      name:"Modal",
      redirectTo:"/modal"
    },
    {
      Icon:"menu-outline",
      name:"Menú",
      redirectTo:"/menu"
    },
    {
      Icon:"information-circle-outline",
      name:"Icons",
      redirectTo:"/icons"
    },
    {
      Icon:"list-outline",
      name:"Item",
      redirectTo:"/item"
    },
    {
      Icon:"images-outline",
      name:"Media",
      redirectTo:"/media"
    },
    {
      Icon:"reader-outline",
      name:"Tabs",
      redirectTo:"/tabs"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
