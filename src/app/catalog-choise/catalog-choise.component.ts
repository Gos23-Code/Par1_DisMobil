import { Component, OnInit, Output, output } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-catalog-choise',
  templateUrl: './catalog-choise.component.html',
  styleUrls: ['./catalog-choise.component.scss'],
})
export class CatalogChoiseComponent  implements OnInit {
catalog: string[] = [];
// @Output() catalogChange = new EventEmitter<string>();

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.chargecatalog();
  }

    chargecatalog(){
      this.apiService.getCatalog().subscribe(
        ( catalog: string[] ) => {
        this.catalog = catalog;
      });
    }
}
