import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicasKimetsuPage } from './musicas-kimetsu.page';

describe('MusicasKimetsuPage', () => {
  let component: MusicasKimetsuPage;
  let fixture: ComponentFixture<MusicasKimetsuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasKimetsuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicasKimetsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
