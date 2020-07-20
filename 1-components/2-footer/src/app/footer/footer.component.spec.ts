import { FooterComponent } from './footer.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Moдуль 2] Футтер компонент', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    (component as any).author = 'Author';
    fixture.detectChanges();
  });
  it('тег с селектором .footer-menu должен правильно интерполировать значение', () => {
    const author = (component as any)?.author;
    const currentYear = (component as any)?.currentYear;

    const el = fixture.debugElement.query(By.css('.footer-title'));
    expect(el).toBeTruthy();
    const [{ nativeNode: priceNode }] = el.childNodes;
    const current = Number(priceNode.textContent.split(',')[0].split(' ')[2]);
    expect(current).toEqual(currentYear);
    expect(priceNode.textContent.split(',')[1].slice(1).trim()).toEqual(author);
  });
});
