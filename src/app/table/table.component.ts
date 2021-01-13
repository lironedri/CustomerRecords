import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{

  selectedSlug: string = "";
  constructor() { }
  customers = [
    {firstName: "Harry", lastName: "Potter", age: 21, slug: 'harry-potter'},
    {firstName: "Liron", lastName: "Arzuan", age: 23, slug: 'liron-arzuan'},
    {firstName: "Avihay", lastName: "Arzuan", age: 30, slug: 'avihay=arzuan'},
    {firstName: "Shira", lastName: "Yfrach", age: 13, slug: 'shira-yfrach'},
    {firstName: "Hodaya", lastName: "Yfrach", age: 8, slug: 'hodaya-yfrach'},    
  ]

  setSlag(slug: any) {
    this.selectedSlug = slug;
  }

  getSlag() {
    return this.selectedSlug;
  }

  

}
