import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanchePage } from './lanche.page';

describe('LanchePage', () => {
  let component: LanchePage;
  let fixture: ComponentFixture<LanchePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LanchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
