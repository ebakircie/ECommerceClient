import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerTypes } from '../../../../base/base.component';
import { Create_Product } from '../../../../contracts/create_product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spiner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
  super(spiner)}

  ngOnInit(): void {
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerTypes.BallSpinClockwise);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    this.productService.createProduct(create_product, () => {
      this.hideSpinner(SpinnerTypes.BallSpinClockwise);
      this.alertify.message("Ürün başarıyla eklenmiştir", {
        dismissOther: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      })
    });

  }

}
