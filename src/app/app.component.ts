import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    `https://images.unsplash.com/photo-1638870413179-50cb2a978e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1631023099977-d1f2b909e6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1638858656199-a40a242c5675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169377717-a7a2f84c6737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169376132-409f66fedcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=2040&q=100؟${Date.now()}`,
  ];
  thumb_images = [
    `https://images.unsplash.com/photo-1638870413179-50cb2a978e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1631023099977-d1f2b909e6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1638858656199-a40a242c5675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169377717-a7a2f84c6737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
    `https://images.unsplash.com/photo-1660169376132-409f66fedcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=100&q=50؟${Date.now()}`,
  ];

}
