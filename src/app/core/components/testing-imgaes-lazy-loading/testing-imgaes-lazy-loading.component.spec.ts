import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingImgaesLazyLoadingComponent } from './testing-imgaes-lazy-loading.component';

describe('TestingImgaesLazyLoadingComponent', () => {
  let component: TestingImgaesLazyLoadingComponent;
  let fixture: ComponentFixture<TestingImgaesLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingImgaesLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingImgaesLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
