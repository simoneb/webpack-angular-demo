import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By}              from '@angular/platform-browser';
import {DebugElement}    from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router'
import {FormsModule, NgModel} from '@angular/forms'
import {Location} from '@angular/common'
import {stub, mock} from 'sinon'
import {Subject} from 'rxjs'

import {HeroDetailComponent} from '../HeroDetailComponent'
import {HeroService} from '../HeroService'
import {Hero} from '../Hero'

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent
  let fixture: ComponentFixture<HeroDetailComponent>
  let de: DebugElement
  let el: HTMLElement

  let activatedRouteStub
  let heroSubject
  let heroServiceStub
  let locationStub
  let routerStub;


  beforeEach(() => {
    activatedRouteStub = {
      params: new Subject<Params>()
    }
    heroSubject = new Subject()
    heroServiceStub = {
      getById: id => heroSubject,
      update: stub()
    }
    routerStub = {
      navigate: () => null
    }

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        {provide: HeroService, useValue: heroServiceStub},
        {provide: Location, useValue: locationStub},
        {provide: Router, useValue: routerStub}
      ]
    })

    fixture = TestBed.createComponent(HeroDetailComponent)

    component = fixture.componentInstance
  })

  it('should display hero name', () => {
    component.ngOnInit()

    activatedRouteStub.params.next({id: 1})
    heroSubject.next({id: 1, name: 'pippo'})

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('h2'))
    el = de.nativeElement

    expect(el.textContent).toEqual(component.hero.name + ' details!')
  });

  it('should save hero', () => {
    component.hero = {id: 1, name: 'pluto'}

    fixture.detectChanges()

    de = fixture.debugElement.query(By.css('h2'))
    el = de.nativeElement

    expect(el.textContent).toEqual(component.hero.name + ' details!')

    let inputDE = fixture.debugElement.query(By.directive(NgModel))

    inputDE.nativeElement.value = 'pippo'

    inputDE.triggerEventHandler('input', {target: inputDE.nativeElement})

    heroServiceStub.update.returns(Promise.resolve())

    component.save()

    expect(heroServiceStub.update.calledWithExactly({id: 1, name: 'pippo'})).toBeTruthy()
  });

})
