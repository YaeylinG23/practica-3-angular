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
      name:"Action-Sheet ",
      redirectTo:"/action-sheet"
    },
    {
      Icon:"football-outline",
      name:"Alert ",
      redirectTo:"/alert"
    },
    {
      Icon:"football-outline",
      name:"Checkbox ",
      redirectTo:"/checkbox"
    },
    {
      Icon:"football-outline",
      name:"Chip ",
      redirectTo:"/chip"
    },
    {
      Icon:"football-outline",
      name:"Content ",
      redirectTo:"/content"
    },
    {
      Icon:"football-outline",
      name:"Date & Time Pickers ",
      redirectTo:"/date-time"
    },
    {
      Icon:"football-outline",
      name:"Floating Action Button ",
      redirectTo:"/floating-action"
    },
    {
      Icon:"football-outline",
      name:"Grid",
      redirectTo:"/grid"
    },
    {
      Icon:"football-outline",
      name:"Infinite Scroll",
      redirectTo:"/infinite-scroll"
    },
    {
      Icon:"football-outline",
      name:"Input",
      redirectTo:"/input"
    },
    {
      Icon:"football-outline",
      name:"List",
      redirectTo:"/list"
    },
    {
      Icon:"albums-outline",
      name:"Accordion",
      redirectTo:"/accordion"
    },
    {
      Icon:"bug-outline",
      name:"Badge",
      redirectTo:"/badge"
    },
    {
      Icon:"fish-outline",
      name:"Breadcrumb",
      redirectTo:"/breadcrumb"
    },
    {
      Icon:"add-circle-outline",
      name:"Button",
      redirectTo:"/button"
    },
    {
      Icon:"id-card-outline",
      name:"Card",
      redirectTo:"/card"
    },
    {
      Icon:"list-outline",
      name:"Select",
      redirectTo:"/select"
    }
    ,
    {
      Icon:"list-outline",
      name:"Toast",
      redirectTo:"/toast"
    },
    {
      Icon:"list-outline",
      name:"Toggle",
      redirectTo:"/toggle"
    },
    {
      Icon:"list-outline",
      name:"Toolbar",
      redirectTo:"/toolbar"
    },
    {
      Icon:"list-outline",
      name:"Typography",
      redirectTo:"/typography"
    },
    {
      Icon:"list-outline",
      name:"Tabs",
      redirectTo:"/tabs"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
