import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefeicaoPage } from './refeicao.page';

describe('RefeicaoPage', () => {
  let component: RefeicaoPage;
  let fixture: ComponentFixture<RefeicaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RefeicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
