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
  public producto: Producto;

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
    this.producto = new Producto(1, 'producto1', 'categoria1', 100, 'descripcion1');
    this.productos = [this.producto];
  }

}
