import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddprodutoPage } from './addproduto.page';

describe('AddprodutoPage', () => {
  let component: AddprodutoPage;
  let fixture: ComponentFixture<AddprodutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddprodutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
