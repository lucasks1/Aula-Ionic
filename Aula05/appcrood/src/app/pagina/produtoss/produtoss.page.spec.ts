import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutossPage } from './produtoss.page';

describe('ProdutossPage', () => {
  let component: ProdutossPage;
  let fixture: ComponentFixture<ProdutossPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutossPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
