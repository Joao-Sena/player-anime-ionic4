import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicasDeathPage } from './musicas-death.page';

describe('MusicasDeathPage', () => {
  let component: MusicasDeathPage;
  let fixture: ComponentFixture<MusicasDeathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasDeathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicasDeathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
