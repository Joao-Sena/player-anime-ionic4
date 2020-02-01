import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicasDragonBallPage } from './musicas-dragon-ball.page';

describe('MusicasDragonBallPage', () => {
  let component: MusicasDragonBallPage;
  let fixture: ComponentFixture<MusicasDragonBallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicasDragonBallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicasDragonBallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
