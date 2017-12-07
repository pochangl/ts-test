import { expect } from 'chai';

describe('ClassObject', () => {
  class A {
    public value: number = 3;
  }
  class B {
    public attr: A = new A();
  }
  it('should not share the same attribute', () => {
    let obj1: B = new B();
    let obj2: B = new B();
    obj2.attr.value = 4;
    expect(obj1.attr.value).to.eql(3);
  });
});
