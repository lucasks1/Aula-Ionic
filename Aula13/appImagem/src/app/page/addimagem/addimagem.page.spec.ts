import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddimagemPage } from './addimagem.page';

describe('AddimagemPage', () => {
  let component: AddimagemPage;
  let fixture: ComponentFixture<AddimagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddimagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
