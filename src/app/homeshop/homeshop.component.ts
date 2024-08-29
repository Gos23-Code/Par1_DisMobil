import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-homeshop',
  templateUrl: './homeshop.component.html',
  styleUrls: ['./homeshop.component.scss'],
})
export class HomeshopComponent  implements OnInit {
artic: any[]=[];
  constructor(private ApiService: ApiserviceService) { }

  ngOnInit() {
    this.cargaDetalle();
}

cargaDetalle(){
  this.ApiService.getProducts().subscribe((data: string[]) =>{
  this.artic = data;
  console.log(this.artic);
});
}

}
