import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutrasPage } from './outras.page';

describe('OutrasPage', () => {
  let component: OutrasPage;
  let fixture: ComponentFixture<OutrasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OutrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
