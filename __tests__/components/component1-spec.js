import Component from '../../source/component1';

describe('Component1', () => {

    let component = null;

    beforeEach(() => {
        component = new Component();
    });

    afterEach(() => {
        component = null;
    });

    it('should have default methods', () => {
        expect(typeof component).toEqual('object');

        expect(component.update).toBeDefined();

        expect(typeof component.update).toEqual('function');
    });

    it('should get/set simple property', () => {
        let update = component.update();

        expect(update).toBe(true);
    });
});