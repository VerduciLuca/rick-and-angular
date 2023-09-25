import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

<<<<<<< HEAD
  constructor(public dataServ: DataService){

  }

  prevPage(){
    this.dataServ.prevPage()
  }

  nextPage(){
    this.dataServ.nextPage()
  }

=======
  constructor(public dataServ: DataService){}

  previousPage(){
    this.dataServ.previousPage()
  }

  nextPage(){
    this.dataServ.nextPage();
  }
>>>>>>> d8d17ee3e81de15705ad1e0dac974d369ac75f7c
}
