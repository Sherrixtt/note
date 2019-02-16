### Class

Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类。

`class`可以看作只是一个语法糖，本质是函数

```js
class Person {}
Person instanceof Function // true
```

用法：

```javascript
//传统方法
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
nN

//新方法
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point(1, 2);
//定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。


```

在类的实例上面调用方法，其实就是调用原型上的方法。

```js
p.constructor === Point.prototype.constructor // true
```

一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。

类必须使用`new`调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用`new`也可以执行。

类不存在变量提升（hoist），这一点与 ES5 完全不同。

```javascript
new Foo(); // ReferenceError
class Foo {}
```

