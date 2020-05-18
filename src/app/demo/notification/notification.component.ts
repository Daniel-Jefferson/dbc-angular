import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../services/notification/notification.service';
import swal from "sweetalert2";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    public user: string;

    notificationForm = new FormGroup({
      notifyTitle     : new FormControl(''),
      notifyContent   : new FormControl('')
    });
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private notification: NotificationService) {
    }

    ngOnInit() {
    }

    get notifytitle(){
        return this.notificationForm.get('notifyTitle');
    }

    get notifycontent() {
        return this.notificationForm.get('notifyContent');
    }

    onSendNotification() {
      if (!this.notificationForm.invalid) {
        var data = this.notificationForm.value;
        this.notification.sendNotification(data).then(registerResponse => {
            if (registerResponse['status'] === 200){
                swal.fire('Success', "Send Notification Successfully", 'success');
            } else {
                swal.fire('Error', `${registerResponse['message']}`, 'error');
            }
        })
      }
    }
}
