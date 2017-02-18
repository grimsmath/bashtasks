import { BashtasksPage } from './app.po';

describe('bashtasks App', function() {
  let page: BashtasksPage;

  beforeEach(() => {
    page = new BashtasksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
