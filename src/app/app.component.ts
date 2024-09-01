import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  storeData: any;
  constructor(private dataService: DataService){}

  ngOnInit(): void {

    this.dataService.getData().subscribe(data => {
      console.log("Datos Crudos:", data)
      this.storeData = data.store
      console.log("Datos: ", this.storeData)
    })
  }
}