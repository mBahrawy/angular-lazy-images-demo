import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [
    "https://live.staticflickr.com/65535/52682374618_36b03e7131_k.jpg",
    "https://live.staticflickr.com/65535/52681358597_f29901c89e_k.jpg",
    "https://live.staticflickr.com/65535/52681876821_78635a91e6_k.jpg",
    "https://live.staticflickr.com/65535/52682305735_85ff72aacc_k.jpg",
    "https://live.staticflickr.com/65535/52682305345_563c3af82d_k.jpg",
  ];
  thumb_images = [
    "https://live.staticflickr.com/65535/52682374618_e264583d1a_t.jpg",
    "https://live.staticflickr.com/65535/52681358597_8a1616150f_t.jpg",
    "https://live.staticflickr.com/65535/52681876821_de1bb7c98a_t.jpg",
    "https://live.staticflickr.com/65535/52682305735_ffd43a3a44_t.jpg",
    "https://live.staticflickr.com/65535/52682305345_a017a5bb10_t.jpg",
  ];
}
