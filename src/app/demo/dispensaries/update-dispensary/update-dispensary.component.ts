import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DispensariesService } from '../../../services/dispensaries/dispensaries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../environments/environment';
import swal from 'sweetalert2';
import googlemaps from 'googlemaps';

@Component({
  selector: 'app-update-dispensary',
  templateUrl: './update-dispensary.component.html',
  styleUrls: ['./update-dispensary.component.scss']
})
export class UpdateDispensaryComponent implements OnInit {

  public showAddress        : any;
  public mapLatitude        : number;
  public mapLongitude       : number;
  public changedAddress     : string;
  public zoom               : number;
  public mapAddress         : string;
  private geoCoder          : any;
  public imageName          : string;
  public fileData           : File = null;
  public previewUrl         : any = null;
  public fileUploadProgress : string = null;
  public uploadedFilePath   : string = null;
  public dispensaryProfile  : any;
  public uploadAPI          = `${environment.apiUrl}/dispensary/add/image`;
  public dispensaryImage  : any;
  user: any;

  imageTitle = 'budsbankadminpanel';
  public uploader: FileUploader = new FileUploader({
    'url'           : this.uploadAPI,
     itemAlias      : 'image',
     allowedFileType: ['image']
  });

  @ViewChild('search', {'static': true}) 
  public searchElementRef: ElementRef;

  public weekdays           = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public shortWeekdays      = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  updateDispensaryForm : FormGroup;

  constructor(
    private router          : Router, 
    private dispensary      : DispensariesService, 
    private formBuilder     : FormBuilder, 
    private mapsAPILoader   : MapsAPILoader, 
    private ngZone          : NgZone, 
    private currentRoute    : ActivatedRoute) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('userInfo'));

    this.currentRoute.params.subscribe(params => {
      this.dispensary.getDispensaryById(params.id).then(response => { 
        if (response['status'] === 200){
          if (response['data'].length > 0){ 
            this.dispensaryProfile = response['data'][0];
            this.setCurrentLocation(this.dispensaryProfile); 
            this.updateDispensaryForm.controls['dispensary_id'].setValue(response['data'][0].id);
            if(response['data'][0].featured === true || response['data'][0].featured === 'true'){
              this.updateDispensaryForm.controls['featured'].setValue(response['data'][0].featured); 
            }
            if(response['data'][0].image){
              this.dispensaryImage = response['data'][0].image;
            }
            this.updateDispensaryForm.controls['name'].setValue(response['data'][0].name);
            this.updateDispensaryForm.controls['phone'].setValue(response['data'][0].phone);
            this.updateDispensaryForm.controls['address'].setValue(response['data'][0].address);
            this.updateDispensaryForm.controls['deal'].setValue(response['data'][0].deal);
            this.showAddress = response['data'][0].address;
            // this.updateDispensaryForm.controls['image'].setValue(response['data'][0].image);
            this.updateDispensaryForm.controls['open_day'].setValue(response['data'][0].timmings.open_day);
            this.updateDispensaryForm.controls['close_day'].setValue(response['data'][0].timmings.close_day);
            this.updateDispensaryForm.controls['longitude'].setValue(response['data'][0].longitude);
            this.updateDispensaryForm.controls['latitude'].setValue(response['data'][0].latitude);
            this.updateDispensaryForm.controls['status'].setValue(response['data'][0].status);

            for (let i = 0; i < 7; i++) {
              this.updateDispensaryForm.controls['opening_time' + i].disable();
              this.updateDispensaryForm.controls['closing_time' + i].disable();
            }
            const time_data = response['data'][0].timmings.time_data;
            for (let i = 0; i < time_data.length; i++) {
              const time_object = time_data[i];
              this.updateDispensaryForm.controls['opening_time' + time_object.weekday].setValue(time_object.open_time);
              this.updateDispensaryForm.controls['closing_time' + time_object.weekday].setValue(time_object.close_time);
              this.updateDispensaryForm.controls['opening_time' + time_object.weekday].enable();
              this.updateDispensaryForm.controls['closing_time' + time_object.weekday].enable();
            }
          }
        }else{
          swal.fire('Error', `${response['message']}`, 'error');
        }
      });
    });

    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.mapLatitude = place.geometry.location.lat();
          this.mapLongitude = place.geometry.location.lng();
          this.changedAddress = place.formatted_address;
          this.zoom = 12;
        });
      });
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any) => {
      console.log(item.file.name);
    };

    this.updateDispensaryForm = this.formBuilder.group({
      featured      : [null],
      name          : ['', [Validators.required]],
      phone         : ['', [Validators.required]],
      address       : ['', [Validators.required]],
      image         : [null],
      open_day      : ['', [Validators.required]],
      close_day     : ['', [Validators.required]],
      dispensary_id : [''],
      latitude      : [''],
      longitude     : [''],
      deal          : ['', [Validators.required]],
      status        : ['']
    });

    for (let i = 0; i < this.weekdays.length; i++) {
      this.updateDispensaryForm.addControl(
          'opening_time'+i, new FormControl('', [Validators.required])
      );
      this.updateDispensaryForm.addControl(
          'closing_time'+i, new FormControl('', [Validators.required])
      );
    }


  }
  
  private setCurrentLocation(locationToSet: any) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.mapLatitude = locationToSet.latitude;
        this.mapLongitude = locationToSet.longitude;
        this.zoom = 8;
        this.getAddress(this.mapLatitude, this.mapLongitude, 0);
      });
    }
  }

  onSelectDay() {
    if (this.open_day.valid && this.close_day.valid) {
      const startWeekday = this.shortWeekdays.indexOf(this.open_day.value);
      const endWeekday = this.shortWeekdays.indexOf(this.close_day.value);

      if (startWeekday <= endWeekday) {
        for (let i = 0; i < 7; i++) {
          this.updateDispensaryForm.get('opening_time'+i).disable();
          this.updateDispensaryForm.get('closing_time'+i).disable();
        }
        for (let i = startWeekday; i <= endWeekday; i++) {
          this.updateDispensaryForm.get('opening_time'+i).enable();
          this.updateDispensaryForm.get('closing_time'+i).enable();
        }
      } else {
        for (let i = 0; i < 7; i++) {
          this.updateDispensaryForm.get('opening_time'+i).disable();
          this.updateDispensaryForm.get('closing_time'+i).disable();
        }
        for (let i = 0; i <=endWeekday; i++) {
          this.updateDispensaryForm.get('opening_time'+i).enable();
          this.updateDispensaryForm.get('closing_time'+i).enable();
        }
        for (let i = startWeekday; i < 7; i++) {
          this.updateDispensaryForm.get('opening_time'+i).enable();
          this.updateDispensaryForm.get('closing_time'+i).enable();
        }
      }
    }
  }

  markerDragEnd($event: MouseEvent) {
    this.mapLatitude = $event.coords.lat;
    this.mapLongitude = $event.coords.lng;
    this.getAddress(this.mapLatitude, this.mapLongitude, 1);
  }

  getAddress(latitude: any, longitude: any, isDrag: any) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.mapAddress = results[0].formatted_address;
          if(isDrag === 1 || isDrag === '1'){
              this.showAddress = results[0].formatted_address;
              this.changedAddress = results[0].formatted_address;
          }
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }

  get dispensary_id(){
    return this.updateDispensaryForm.get('dispensary_id');
  }

  get featured(){
    return this.updateDispensaryForm.get('featured');
  }

  get name(){
    return this.updateDispensaryForm.get('name');
  }

  get phone(){
    return this.updateDispensaryForm.get('phone');
  }

  get address(){
    return this.updateDispensaryForm.get('address');
  }

  get deal(){
    return this.updateDispensaryForm.get('deal');
  }

  get image(){
    return this.updateDispensaryForm.get('image');
  }

  get open_day(){
    return this.updateDispensaryForm.get('open_day');
  }

  get close_day(){
    return this.updateDispensaryForm.get('close_day');
  }

  get latitude(){
    return this.updateDispensaryForm.get('latitude');
  }

  get longitude(){
    return this.updateDispensaryForm.get('longitude');
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  onUpdateDispensarySubmit(){
    if (!this.updateDispensaryForm.invalid){
      var data = this.updateDispensaryForm.value;

      data['longitude'] = (!this.mapLongitude) ? this.updateDispensaryForm.value.longitude : this.mapLongitude;
      data['latitude'] = (!this.mapLatitude) ? this.updateDispensaryForm.value.latitude : this.mapLatitude;
      data['formatted_address'] = (!this.changedAddress) ? this.updateDispensaryForm.value.address : this.changedAddress;

      if (!data['featured']){
        data['featured'] = 'false';
      } 

      this.dispensary.updateDispensary(data).then(updateResponse => { 
        if (updateResponse['status'] === 200){
          if (this.fileData){ 
            this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
              form.append('dispensaryId' , updateResponse['data'].dispensaryId);
            }
            this.uploader.uploadAll();
            this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
              if(response){ 
                var formatedResponse = JSON.parse(response); 
                if (formatedResponse['status'] !== 200){
                  swal.fire('Error', `${formatedResponse['message']}`, 'error');
                }
              }
            }
          }
          swal.fire('Success', "Listing Updated Successfully", 'success').then((result) => {
            let admin = JSON.parse(localStorage.getItem('userInfo'));
            // if(admin.role === 1){
              this.router.navigateByUrl(`/admin/dispensary/${updateResponse['data'].dispensaryId}`);
            // }else{
            //   this.router.navigateByUrl('/admin/dispensary/profile');
            // }
          });
        }else{ 
          swal.fire('Error', `${updateResponse['message']}`, 'error');
        }
      });  
    }
  }

}
