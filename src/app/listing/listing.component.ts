import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  filterTerm: string;
  userRecords: any = [];
  placeholder: string = "Search";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get("../../assets/listing.json").subscribe((data:any)=>{
      this.userRecords = data;
    });
  }

  detailPage(id: any) {
    this.router.navigate(['/detail/'+id]);
  }

  setSearchText(event: any) {
    this.filterTerm = event;
  }
}
