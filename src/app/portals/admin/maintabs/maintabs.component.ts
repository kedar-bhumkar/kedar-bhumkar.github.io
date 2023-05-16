import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'John Doe', status: 'Inactive', action: 'H'},
  {position: 2, name: 'Jill Doe', status: 'Active', action: 'He'},
  {position: 3, name: 'Frank Doe', status: 'Active', action: 'Li'},
  {position: 4, name: 'Matt Doe', status: 'Active', action: 'Be'},
  {position: 5, name: 'Jessica Doe', status: 'Active', action: 'B'},
  {position: 6, name: 'Mark Doe', status: 'Active', action: 'C'},
  {position: 7, name: 'Heather Doe', status: 'Inactive', action: 'N'},
  {position: 8, name: 'Sarah Doe', status: 'Active', action: 'O'},
  {position: 9, name: 'Carmella Doe', status: 'Active', action: 'F'},
  {position: 10, name: 'Henry Doe', status: 'Inactive', action: 'Ne'},
];
@Component({
  selector: 'app-maintabs',
  templateUrl: './maintabs.component.html',
  styleUrls: ['./maintabs.component.css']
})
export class MaintabsComponent {
  displayedColumns: string[] = ['position', 'name', 'status', 'action'];
  dataSource = ELEMENT_DATA;
  panelColor = new FormControl('blue');

}
