import { TriageModule } from './triage.module';

describe('TriageModule', () => {
  let triageModule: TriageModule;

  beforeEach(() => {
    triageModule = new TriageModule();
  });

  it('should create an instance', () => {
    expect(triageModule).toBeTruthy();
  });
});
