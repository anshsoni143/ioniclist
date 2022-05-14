import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  filterData: any = {};
  currentId: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      if (params['id']) {
        this.currentId = params['id'];
      }
    });
  }

  ngOnInit() {
    this.http.get("../../assets/listing.json").subscribe((data:any)=>{
      if (data && data.length && this.currentId) {
        let filter: any = data.filter((data: any) => data.id == this.currentId);
        if (filter && filter.length) {
          this.filterData = filter[0];
        } else {
          this.filterData= {};
        }
      }
    });
  }

  backtoList() {
    this.router.navigate(['']);
  }
}
