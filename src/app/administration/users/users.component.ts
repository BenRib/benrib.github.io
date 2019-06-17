import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../administration.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['firstName', 'lastName', 'isActive'];
  dataSource: MatTableDataSource<User>;

  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(e => this.dataSource = new MatTableDataSource<User>(e))

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClicked(user: User) {
    this.router.navigate([user.id], {relativeTo: this.route});
  }
}
