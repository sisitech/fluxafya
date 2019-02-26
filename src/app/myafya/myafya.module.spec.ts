import { MyafyaModule } from './myafya.module';

describe('MyafyaModule', () => {
  let myafyaModule: MyafyaModule;

  beforeEach(() => {
    myafyaModule = new MyafyaModule();
  });

  it('should create an instance', () => {
    expect(myafyaModule).toBeTruthy();
  });
});
