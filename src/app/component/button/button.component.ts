import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon: any = "";
  @Input() size: any = "";
  @Input() link: any = "";
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  redirectToComponent() {
    this.router.navigate([this.link]);
  }
}
