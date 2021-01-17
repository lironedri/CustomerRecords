import { Component, Input} from '@angular/core';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html'
})
export class InfoComponent {
  
  @Input() customerSlug: string = '';
  customers : { [key: string]: any } = {
    'harry-potter': ["Harry", "potter", 21, 'Livershool', 'Male', '3123', 'India', 'TN'],
    'liron-arzuan':
    ["Liron", "Arzuan", 23, 'Czecha', 'Female', '3198', 'USA', 'SF'],
    'avihay-arzuan':
    ["Avihay", "Arzuan", 30, 'Reala Madrida', 'Male', '3176', 'France', 'PA'],
    'shira-yfrach':
    ["Shira", "Yfrach", 13, 'Portugalia', 'Female', '3178', 'Portugal', 'LB'],
    'hodaya-yfrach':
    ["Hodaya", "Yfrach", 8, 'Barceloja', 'Female', '3165', 'Argentina', 'BA']
  }

  constructor() { }

}
