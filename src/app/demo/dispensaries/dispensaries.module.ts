import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DispensariesRoutingModule} from './dispensaries-routing.module';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {FileUploadModule} from 'ng2-file-upload';

// import { ViewDispensaryComponent } from './view-dispensary/view-dispensary.component';

@NgModule({
    declarations: [AddProductDialogComponent],
    imports: [
        CommonModule,
        DispensariesRoutingModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        FileUploadModule
    ],
    entryComponents: [
        AddProductDialogComponent
    ]
})
export class DispensariesModule {
}
