import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer   } from 'src/app/models/custumer.interface';
import { CustomerService, ICustomerID } from '../../services/customer.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [ 'name', 'city', 'order', 'actions'];
  dataSource = new MatTableDataSource<ICustomerID>();

  @ViewChild(MatSort, {static: true}) sortTable: MatSort;
  
  constructor(private customerService: CustomerService) { 
    
  }

  ngOnInit() {
    this.customerService.getAllCustomer()
      .subscribe (customers => {
        this.dataSource.data = customers;
      });
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    this.dataSource.sort = this.sortTable;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element: ICustomerID) {
  console.log('el element :', element);
  
}

  onDelete(id: string) {
    this.customerService.deleteCustomer(id)

  }
}
