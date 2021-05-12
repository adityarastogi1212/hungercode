import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map } from  'rxjs/operators';
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Injectable(
    {
        providedIn:'root'
    }
)

export class WebService
{

    constructor(private http:HttpClient){}

    webDataCopy:any;
    data:any;
    flag=0;
    baseUrl:string="https://restaurantserverside.herokuapp.com/";
    
    //default_url:any="http://127.0.0.1:5000/";
    image_url:string;
    profile_url:string;
    qrcode_url:string;
    downloadqr_url:str
    delete_url:string;

    retrieveUserProfile(){
        // this.profile_url=this.getUrl(this.retreiveUsername(),"viewprofiledata");
        this.profile_url=this.getUrl(this.retreiveUsername(),"viewprofiledata");
        //console.log((this.profile_url));
        return this.http.get(this.profile_url);
    }

    //https://restaurantserverside.herokuapp.com/demo/menuimage/downloadqrcode
    retrieveQRcode()
    {
        this.qrcode_url=this.baseUrl+this.retreiveUsername()+"/menuimage/downloadqrcode";
        console.log(this.qrcode_url);
        return this.http.get(this.qrcode_url);
        
    }

    qrcodedownload(){
        this.downloadqr_url=this.baseUrl+this.retreiveUsername()+"/menuimage/qrcodedownload";
        console.log(this.downloadqr_url);
        window.open(this.downloadqr_url);
    }

    deleterequest(){
        let headers;
        let body={};
        this.delete_url=this.getUrl(this.retreiveUsername(),"deletemenuimage");
        console.log(this.delete_url);
        return this.http.post<any>(this.delete_url,body,{headers});
    }


    retriveData(webData:any)
    {
        console.log(webData.value);
        let headers;// = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let body = { data:webData.value };
        return  this.http.post<any>('http://127.0.0.1:5000/', body, {headers});
       // return this.http.get(this.default_url);
    }

    public sendFormData(formData)
    {
        this.image_url=this.getUrl(this.retreiveUsername(),"uploadmenuimage");
        return this.http.post<any>(this.image_url,formData,{
           reportProgress:true,
           observe:'events'
        });
    }

    retriveLogin(webData:any)
    {
        console.log(webData.value);
        let headers;// = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let body = webData.value;
        this.webDataCopy=webData.value;
        //console.log(this.webDataCopy.username);
        
        this.http.post<any>('https://restaurantserverside.herokuapp.com/login', body, {headers}).subscribe(response=>this.data=response);
        setTimeout(() => {
            if((this.data.status==true)&&(this.webDataCopy.username!="")){
                this.flag=1;
            }
            },2000);
        // if(this.data.status==true){
        //     this.flag=1;
        // }
        //console.log(this.data);
        // return this.data;
        return this.http.post<any>('https://restaurantserverside.herokuapp.com/login', body, {headers});    
         // return this.http.get(this.default_url);
        
    }

    retriveRegister(webData:any)
    {
        console.log(webData.value);
        let headers;// = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let body = webData.value;
        return this.http.post<any>('https://restaurantserverside.herokuapp.com/register', body, {headers});
       // return this.http.get(this.default_url);
    }
    
    retreiveUsername()
    {
        
        //console.log(this.webDataCopy.username); 
        return this.webDataCopy.username;
        
    }

    giveStatus()
    {
        if(this.flag==1){
            //this.flag=0;
            return this.data.status;
        }
        else{
            return false;
        }
    }
    //"https://restaurantserverside.herokuapp.com/demo/uploadmenuimage"
    getUrl(name:any,comp:any)
    {
        return this.baseUrl+name+"/"+comp;
    }

    
}
