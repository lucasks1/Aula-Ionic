import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreparoPage } from './preparo.page';

describe('PreparoPage', () => {
  let component: PreparoPage;
  let fixture: ComponentFixture<PreparoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreparoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
