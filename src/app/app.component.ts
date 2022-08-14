import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService: CustomToastrService){
    toastrService.message("Merhaba","Ersin",{
      messageType:ToastrMessageType.Success,
      position:ToastrPosition.BottomRight
    })


  }
}
