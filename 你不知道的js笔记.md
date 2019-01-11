## 作用域

#### 作用域，简单的来说根据名称查找变量的规则

**查找**

- 作用域查找 会在找到第一个匹配的标识符（变量）时停止。多层嵌套的作用域中定义的同名的标识符，叫“遮蔽效应”（内部标识符遮蔽外部标识符）；
- 无论函数在哪里被调用，它的词法的作用域只由函数声明时所在的位置决定

**eval(废弃)**

接受一个字符串参数。相当于其内容是在书写时就在程序该位置的代码。

```javascript

function foo(str, a) { eval( str ); // 欺骗! console.log( a, b );
}
varb=2; 
foo("varb=3;",1);//1,3

```

**with(废弃)**

```javascript
function foo(obj) { with (obj) {
a=2; }
}
varo1={ a:3
};
varo2={ b:3
};
     foo( o1 );
     console.log( o1.a ); // 2
foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2—— a 被泄漏到全局作用域上了
```





