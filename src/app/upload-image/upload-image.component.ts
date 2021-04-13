import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WebService } from "../WebService";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit 
{
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files  = [];
  //url = "https://avatars.githubusercontent.com/u/56511496?s=400&u=79abd025d17090bc11ba7a49c5b3c551b4b9c172&v=4";
  //message: string;
  //done: boolean;
  
  //imageUrl: string = "../../../server/31539.jpg";
  //fileToUpload: File = null;
  
  // selectFile(event) {
  //   if (event.target.files) {
  //     var reader =new FileReader();
  //     reader.readAsDataURL(event.targer.files[0]);
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }
  //   }
  // }

  constructor(private uploadService:WebService){}
  ngOnInit()
  {}

  //handleFileInput(file) {
    //this.fileToUpload = file.item(0);

    //Show image preview
    //var reader = new FileReader();
    //reader.onload = (event:any) => {
      //this.imageUrl = event.target.result;
    //}
    //reader.readAsDataURL(this.fileToUpload);
  //}

  

  sendFile(file) {
      const formData = new FormData();
      formData.append('file', file.data);
      formData.append('username','aditya');
      file.inProgress = true;
      this.uploadService.sendFormData(formData).subscribe((event: any) => {
          if (typeof (event) === 'object') {
            console.log(event.body);
          } //else {
            //this.done=true;
            //this.message= "Image Uploaded Succeccfully";
          //}
        });
    }
  
  private sendFiles() {
      this.fileUpload.nativeElement.value = '';
      this.files.forEach(file => {
        this.sendFile(file);
      });
  }
  onClick() {
  const fileUpload = this.fileUpload.nativeElement;
  fileUpload.onchange = () => {
  // for (let index = 0; index < fileUpload.files.length; index++)
  // {
  //  const file = fileUpload.files[index];
  //  this.files.push({ data: file, inProgress: false, progress: 0});
  // }
  //   this.sendFiles();
  // };
  const file=fileUpload.files[0];
  this.files.push({ data: file, inProgress: false, progress: 0});
  this.sendFiles();
  };
  fileUpload.click();
  }

}
