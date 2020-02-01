import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicasNarutoPage } from './musicas-naruto.page';

describe('MusicasNarutoPage', () => {
  let component: MusicasNarutoPage;
  let fixture: ComponentFixture<MusicasNarutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasNarutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicasNarutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
