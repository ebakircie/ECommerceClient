import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {

constructor(private spinner: NgxSpinnerService) {}
  showSpinner(spinnerNameType: SpinnerTypes){
    this.spinner.show(spinnerNameType)
    
    setTimeout(()=> this.hideSpinner(spinnerNameType),1000)
  }

  hideSpinner(spinnerNameType:SpinnerTypes){
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerTypes{
  Cog ="s1",
  BallclipRotateMultiple = "s2",
  BallSpinClockwise="s3"
}
  


