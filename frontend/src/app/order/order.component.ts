import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {OrderService} from '../services/order.service';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'timestamp', 'total_amount', 'waiting_time_min', 'order_details', 'action'];
  dataSource: any = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  currentUser: any;
  orderDetailLists: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private orderService: OrderService
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  viewDetails(id) {
  }
  handleAction(param) {
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    this.orderService.getOrders().subscribe(result => {
      this.dataSource = result;
      console.log('orderLists====>', result);
    });
    // this.orderService.getOrderDetailsById('dd').subscribe(result => {
    //   this.orderDetailLists = result;
    // });
  }

}
