import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerTypes } from '../../../../base/base.component';
import { Create_Product } from '../../../../contracts/create_product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spiner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
    super(spiner)
  }

  ngOnInit(): void {
  }

  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "products",
    explanation: "Resimleri seçin...",
    isAdminPage: true,
    accept:".png, .jpg, .jpeg "
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerTypes.BallSpinClockwise);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    if (!name.value) {
      this.alertify.message("Lütfen ürün adını giriniz!", {
        dismissOther: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });
      return;
    }

    if (parseInt(stock.value) <= 0){
      this.alertify.message("Lütfen stok bilgisini doğru giriniz!", {
        dismissOther: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });
      return;
    }
    if (parseInt(price.value) <= 0) {
      this.alertify.message("Lütfen fiyat bilgisini doğru giriniz!", {
        dismissOther: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });
      return;
    }

    this.productService.createProduct(create_product, () => {
      this.hideSpinner(SpinnerTypes.BallSpinClockwise);
      this.alertify.message("Ürün başarıyla eklenmiştir", {
        dismissOther: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdProduct.emit(create_product);
    }, errorMessage => {
      this.alertify.message(errorMessage,
        {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
    });

  }

}
