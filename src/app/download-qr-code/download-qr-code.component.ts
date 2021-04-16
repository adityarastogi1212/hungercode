import { Component, OnInit } from '@angular/core';
import { WebService } from '../WebService';

@Component({
  selector: 'app-download-qr-code',
  templateUrl: './download-qr-code.component.html',
  styleUrls: ['./download-qr-code.component.css']
})
export class DownloadQrCodeComponent implements OnInit {

  dataname:any;
  profileData: any;
  qrdata:any;
  

  constructor(private service: WebService) { }

  ngOnInit(): void {
    //this.retrieveUsername().subscribe(response=>this.dataname=response);
    //this.dataname = this.service.retreiveUsername().subscribe(response=>this.datastatus=response);
    // this.dataname=this.service.retreiveUsername();
    this.service.retrieveQRcode().subscribe(response=>this.profileData=response);
    console.log(this.profileData);
  }
  
  download(){
      this.service.qrcodedownload();
    }

}
