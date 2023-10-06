import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinacaoPage } from './vacinacao.page';

describe('VacinacaoPage', () => {
  let component: VacinacaoPage;
  let fixture: ComponentFixture<VacinacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VacinacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
