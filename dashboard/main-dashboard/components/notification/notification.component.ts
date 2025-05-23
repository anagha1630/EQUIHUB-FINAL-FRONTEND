import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../services/notification.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-notification',
  imports: [FooterComponent,CommonModule],
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  // notifications: { message: string; submessage: string; time: string }[] = [];
  notifications: { message: string; submessage: string; time: string }[] = [
    { message: 'Stock Price Update', submessage: 'The stock price has decreased by 0.06%', time: new Date().toLocaleTimeString() },
    { message: 'Stock Price Alert', submessage: 'The stock price has reached a new high 89.84%.', time:new Date().toLocaleTimeString() },
    { message: 'Stock Price Drop', submessage: 'The stock price has decreased to $88.80.', time: new Date().toLocaleTimeString() },
    { message: 'ESOP Vested', submessage: '3 Esop stocks are vested ', time: "20/05/2025" },
];
  constructor(
    private location: Location,
    private toastr: ToastrService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // Flash notification on page load
    // this.addNotification();

    // // Flash notification every 15 seconds
    // setInterval(() => {
    //   this.addNotification();
    // }, 20000);
  }

  // addNotification(): void {
  //   const notification = this.notificationService.addNotification();
  //   this.notifications.unshift(notification); // Add to the top of the list
  //   this.toastr.info(notification.submessage, notification.message); // Flash notification
  // }

  goBack(): void {
    this.location.back();
  }
}