import { expect } from 'chai';

describe('Class inheritance', () => {
  class A {
    public value1: number;
    public value2: number;
  }
  class Parent {
    public a: A = new A();
    constructor(data: number) {
      this.a.value1 = data;
    }
  }
  class Children extends Parent {
    public a: A = new A();
    constructor (data: number) {
      super(data - 1);
      this.a.value2 = data;
    }
  }
  it('should have different a', () => {
    let obj: Children = new Children(2);
    expect(obj.a.value1).to.be.eql(undefined);
    expect(obj.a.value2).to.be.eql(2);
  });
});
