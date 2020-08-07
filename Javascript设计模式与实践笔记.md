# Javascript设计模式与实践笔记

### JavaScript中的原型继承

#### 原型编程的基本规则

- 所有的数据都是对象。
- 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它。
-  对象会记住它的原型。
-  如果对象无法响应某个请求，它会把这个请求委托给它自己的原型。

```javascript
function Person(name) {
    this.name = name;
};

Person.prototype.getName = function () {
    return this.name;
};
        
var objectFactory = function () {
    var obj = new Object(), // 从 Object.prototype 上克隆一个空的对象  等同于 obj = {}
     // 等同于 Array.prototype.shift.call(arguments)
     //  由于arguments是类数组元素 不可以直接调用shift方法, 通过.call()转换为数组元素
     //  调用shift()将arguments[0]移除即Person, 并赋值给Constructor 
	Constructor = [].shift.call( arguments ); // 取得外部传入的构造器，此例是 Person
	obj.__proto__ = Constructor.prototype; // 指向正确的原型
    var ret = Constructor.apply( obj, arguments ); // 借用外部传入的构造器给 obj 设置属性
    return typeof ret === 'object' ? ret : obj; // 确保构造器总是会返回一个对象
}
var a = objectFactory(Person, 'sven');
console.log(a.name); // 输出： sven
console.log(a.getName()); // 输出： sven
console.log(Object.getPrototypeOf(a) === Person.prototype); // 输出： t
```

### this

##### 作为对象的方法调用。

当函数作为对象的方法被调用时， this 指向该对象

```javascript
var obj = {
    a: 1,
    getA: function(){
        alert ( this === obj ); // 输出： true
        alert ( this.a ); // 输出: 1
    }
};
obj.getA();
```



##### 作为普通函数调用。

当函数不作为对象的属性被调用时，也就是我们常说的普通函数方式，此时的 this 总是指
向全局对象。  

```javascript
window.name = 'globalName';
var getName = function(){
	return this.name;
};
console.log( getName() ); // 输出： globalName
或者：
window.name = 'globalName';
var myObject = {
    name: 'sven',
    getName: function(){
    	return this.name;
    }
};
var getName = myObject.getName;
console.log( getName() ); // globalName
```



##### 构造器调用。

##### Function.prototype.call 或 Function.prototype.apply 调用 

### 闭包

简单的来说 就是函数里面return出来一个函数.



对于在函数内用 var 关键字声明的局部变量来说，当退出函数时，这些局部变量即失去了
它们的价值，它们都会随着函数调用的结束而被销毁

但是闭包结构内的局部变量所在的环境，因为被return出去了，可以被外界访问， 所以环境内的局部变量也还要可以访问的，这个局部变量就不会被销毁， 局部变量的生命周期也因此延续。

#### 闭包的作用

##### 1. 封装变量

闭包可以帮助把一些不需要暴露在全局的变量封装成“私有变量”。  

```javascript
var mult = (function () {
            var cache = {};
            var calculate = function () { // 封闭 calculate 函数
                var a = 1;
                for (var i = 0, l = arguments.length; i < l; i++) {
                    a = a * arguments[i];
                }
                return a;
            };
            return function () {
                var args = Array.prototype.join.call(arguments, ',');
                if (args in cache) {
                    return cache[args];
                }
                return cache[args] = calculate.apply(null, arguments);
            }
        })();
```

##### 2.延续局部变量的寿命  

```javascript
var report = (function () {
            var imgs = [];
            return function (src) {
                var img = new Image();
                imgs.push(img);
                img.src = src;
            }
        })();
```







