import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagemPage } from './imagem.page';

describe('ImagemPage', () => {
  let component: ImagemPage;
  let fixture: ComponentFixture<ImagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
