import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LerPlacaVeiculoPage } from './ler-placa-veiculo.page';

describe('LerPlacaVeiculoPage', () => {
  let component: LerPlacaVeiculoPage;
  let fixture: ComponentFixture<LerPlacaVeiculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerPlacaVeiculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LerPlacaVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
