import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopdetailsPage } from './shopdetails.page';

describe('ShopdetailsPage', () => {
  let component: ShopdetailsPage;
  let fixture: ComponentFixture<ShopdetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
