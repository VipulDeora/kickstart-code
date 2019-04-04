import { FullPageLayoutModule } from './full-page-layout.module';

describe('FullPageLayoutModule', () => {
  let fullPageLayoutModule: FullPageLayoutModule;

  beforeEach(() => {
    fullPageLayoutModule = new FullPageLayoutModule();
  });

  it('should create an instance', () => {
    expect(fullPageLayoutModule).toBeTruthy();
  });
});
