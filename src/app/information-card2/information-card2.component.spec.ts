import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformationCard2Component } from './information-card2.component';

describe('InformationCard2Component', () => {
  let component: InformationCard2Component;
  let fixture: ComponentFixture<InformationCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCard2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
