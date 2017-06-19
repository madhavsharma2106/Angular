import { MultiapiappPage } from './app.po';

describe('multiapiapp App', () => {
  let page: MultiapiappPage;

  beforeEach(() => {
    page = new MultiapiappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
