import { LandingpageModule } from './landingpage.module';

describe('LandingpageModule', () => {
  let landingpageModule: LandingpageModule;

  beforeEach(() => {
    landingpageModule = new LandingpageModule();
  });

  it('should create an instance', () => {
    expect(landingpageModule).toBeTruthy();
  });
});
