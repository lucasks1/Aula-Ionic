import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChefPage } from './chef.page';

describe('ChefPage', () => {
  let component: ChefPage;
  let fixture: ComponentFixture<ChefPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
