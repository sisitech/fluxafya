import { ExtPatientModule } from './ext-patient.module';

describe('ExtPatientModule', () => {
  let extPatientModule: ExtPatientModule;

  beforeEach(() => {
    extPatientModule = new ExtPatientModule();
  });

  it('should create an instance', () => {
    expect(extPatientModule).toBeTruthy();
  });
});
