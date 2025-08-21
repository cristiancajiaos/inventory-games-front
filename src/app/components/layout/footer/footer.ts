import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {

  public currentDateYear: number = 0;

  ngOnInit(): void {
    const currentDate = new Date();
    this.currentDateYear = currentDate.getFullYear();

  }

}
