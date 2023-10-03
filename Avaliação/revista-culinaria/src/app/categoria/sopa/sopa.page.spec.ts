import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SopaPage } from './sopa.page';

describe('SopaPage', () => {
  let component: SopaPage;
  let fixture: ComponentFixture<SopaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SopaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
