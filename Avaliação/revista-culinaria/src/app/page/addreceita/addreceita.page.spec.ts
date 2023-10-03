import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddreceitaPage } from './addreceita.page';

describe('AddreceitaPage', () => {
  let component: AddreceitaPage;
  let fixture: ComponentFixture<AddreceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddreceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
