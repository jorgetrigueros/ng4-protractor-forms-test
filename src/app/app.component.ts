import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <h3>Formulario de pedido</h3>
        Producto: <select id="producto" [(ngModel)]="producto">
        <option value="">Seleccionar</option>
        <option value="1">Producto-1</option>
        <option value="2">Producto-2</option>
        <option value="3">Producto-3</option>
      </select><br>
      Cantidad:  <input type="text" id="cantidad" [(ngModel)]="cantidad"><br>
      Email: <input type="email" id="email" [(ngModel)]="email">
      <input type="checkbox" [(ngModel)]="chkTerminos"  id="chkTerminos"> He leido los términos y condiciones<br>
      <button [disabled]="!chkTerminos" id="btnSend">Solicitar producto</button>  
  `
})
export class AppComponent {
  chkTerminos: false;
  producto = '';
  cantidad: number = null;
  email = '';
}
