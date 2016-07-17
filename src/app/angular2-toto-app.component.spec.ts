import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TotoAppAppComponent } from '../app/angular2-toto-app.component';

beforeEachProviders(() => [Angular2TotoAppAppComponent]);

describe('App: Angular2TotoApp', () => {
  it('should create the app',
      inject([Angular2TotoAppAppComponent], (app: Angular2TotoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-toto-app works!\'',
      inject([Angular2TotoAppAppComponent], (app: Angular2TotoAppAppComponent) => {
    expect(app.title).toEqual('angular2-toto-app works!');
  }));
});
