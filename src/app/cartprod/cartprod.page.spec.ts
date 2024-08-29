import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartprodPage } from './cartprod.page';

describe('CartprodPage', () => {
  let component: CartprodPage;
  let fixture: ComponentFixture<CartprodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartprodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
