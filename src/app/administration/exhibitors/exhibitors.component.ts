import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

import { Exhibitor } from '../administration.model';
import { ExhibitorsService } from './exhibitors.service';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['name', 'isActive'];
  dataSource: MatTableDataSource<Exhibitor>;

  constructor(private service: ExhibitorsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(e => this.dataSource = new MatTableDataSource<Exhibitor>(e))

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClicked(exhibitor: Exhibitor) {
    this.router.navigate([exhibitor.id], {relativeTo: this.route});
  }
}
