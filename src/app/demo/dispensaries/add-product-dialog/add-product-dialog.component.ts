import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../../environments/environment';
import swal from "sweetalert2";

export interface ProductData {
    id: any,
    dispensary_id: any;
    product_image: string;
    product_name: string;
}

@Component({
    selector: 'app-add-product-dialog',
    templateUrl: './add-product-dialog.component.html',
    styleUrls: ['./add-product-dialog.component.scss']
})

export class AddProductDialogComponent implements OnInit {
    public uploadAPI          = `${environment.apiUrl}/dispensary/add/product/image`;
    public name_required = false;
    public image_required = false;
    public uploader: FileUploader = new FileUploader({
        'url'           : this.uploadAPI,
        itemAlias      : 'image',
        allowedFileType: ['image']
    });
    public fileData           : File = null;

    constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ProductData) {
    }

    ngOnInit(): void {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any) => {
            console.log(item.file.name);
        };
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.image_required = false
    }

    changeName(): void {
        this.name_required = false;
    }

    onSubmit(): void {
        if (this.data.product_name == '' || this.data.product_name == null) {
            this.name_required = true;
            return;
        }
        
        if (this.data.product_image == null || this.data.product_name == '') {
            if (this.fileData == null) {
                this.image_required = true;
            }
        }

        if (this.fileData){
            this.uploader.uploadAll();
            this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
                if(response){
                    var formatedResponse = JSON.parse(response);
                    if (formatedResponse['status'] !== 200){
                        swal.fire('Error', `${formatedResponse['message']}`, 'error');
                    }
                    this.data.product_image = formatedResponse['imagePath'];
                    this.dialogRef.close({data: this.data});
                }
            }
        } else {
            this.dialogRef.close({data: this.data});
        }
    }
}
