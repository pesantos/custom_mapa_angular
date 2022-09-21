import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMapaComponent } from './novo-mapa.component';

describe('NovoMapaComponent', () => {
  let component: NovoMapaComponent;
  let fixture: ComponentFixture<NovoMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
