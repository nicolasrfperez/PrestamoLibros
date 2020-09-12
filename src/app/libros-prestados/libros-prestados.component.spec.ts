import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosPrestadosComponent } from './libros-prestados.component';

describe('LibrosPrestadosComponent', () => {
  let component: LibrosPrestadosComponent;
  let fixture: ComponentFixture<LibrosPrestadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosPrestadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosPrestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
