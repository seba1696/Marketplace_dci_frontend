import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
//import { ProductoService } from '../../../service/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
  //,providers:[ProductoService]
})
export class ProductoListComponent implements OnInit {

  public productos: Array<Producto>;

  constructor(
    //private _productoService: ProductoService
  ) { }

  ngOnInit() {
    /*this._productoService.getProductos().subscribe(
      response => {
        if (response.status == 'success') {
          this.productos = response.productos;
        }
      },
      error => {
        console.log(error);
      }
    );*/
  }

}
