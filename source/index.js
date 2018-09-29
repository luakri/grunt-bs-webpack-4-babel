import Component1 from './component1.js';

if (module.hot) {
    module.hot.accept();
}

let comp = new Component1();

comp.update();