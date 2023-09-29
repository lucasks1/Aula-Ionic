import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheffPage } from './cheff.page';

describe('CheffPage', () => {
  let component: CheffPage;
  let fixture: ComponentFixture<CheffPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
