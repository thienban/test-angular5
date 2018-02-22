import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Albulm } from './albulm';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  albulms : Albulm[];

  constructor(private dataService: DataService) {}
  ngOnInit() {
    //lister
    this.dataService.lister().subscribe(collegues => {});
  }

  add(title: HTMLInputElement, imageUrl: HTMLInputElement) {
    //ajouter au tableau
    let albulmNew = new Albulm(title.value, imageUrl.value,100);
    //sauvegarder
    this.dataService
      .sauvegarder(albulmNew)
      .subscribe(data => console.log(data));
  }
}
