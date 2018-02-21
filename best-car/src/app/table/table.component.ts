import { Component, OnInit } from '@angular/core';
import { Albulm } from '../albulm';
import { DataService } from '../data.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  albulms : Albulm[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() : void{
    this.dataService.getData().subscribe(albulms => this.albulms = albulms);
  }
}
