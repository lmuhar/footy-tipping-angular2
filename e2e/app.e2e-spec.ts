import { Angular2FullStackPage } from './app.po';
import { } from 'jasmine';

describe('angular2-full-stack App', () => {
  let page: Angular2FullStackPage;

  beforeEach(() => {
    page = new Angular2FullStackPage();
  });

  it('should display the navbar correctly', () => {
    page.navigateTo();
    expect<any>(page.getNavbarElement(0)).toEqual('Home');
    expect<any>(page.getNavbarElement(1)).toEqual('Cats');
    expect<any>(page.getNavbarElement(2)).toEqual('Login');
    expect<any>(page.getNavbarElement(3)).toEqual('Register');
  });
});
