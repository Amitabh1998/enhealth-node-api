import app from '../../../src/app';

describe("'v1/otp' service", () => {
    it('registered the service', () => {
        const service = app.service('v1/otp');
        expect(service).toBeTruthy();
    });
});
