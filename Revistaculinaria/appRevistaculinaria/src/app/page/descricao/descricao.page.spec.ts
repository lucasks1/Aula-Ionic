import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescricaoPage } from './descricao.page';

describe('DescricaoPage', () => {
  let component: DescricaoPage;
  let fixture: ComponentFixture<DescricaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescricaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
