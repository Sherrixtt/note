2019.01.07

## 变量类型
<<<<<<< HEAD

#### 原始类型

- `boolean`

- `null`
- `undefined`
- `number`
- `string`
- `symbol`
=======
#### 原始值

`undefined`，`string`，`number`，`boolean`，`object`,`Symbol`(新增)
>>>>>>> refs/remotes/origin/master

#### 值类型/引用类型

引用类型：对象，数组，函数。
#### typeof 运算符（6种类型）
只能区分值类型

`undefined`，`string`，`number`，`boolean`，`object`，`function`，`Symbol`(新增)

_TIPS:_

`typeof null == object`

#### 变量类型-强制类型转换
* 字符串拼接
* ==运算
* if语句
* 逻辑运算


## 构造函数
#### 构造函数-拓展
    var a = {} &nbsp;其实是var a = new Object();
    var a = [] &nbsp;其实是var a = new Array();
    var function Foo(){} 其实是 var Foo = new Function(){}
#### instanceof  
    instanceof判断一个函数是否为一个变量的构造函数

## 原型规则和示例
 - 所有的引用类型(数组、对象、函数)，都具有对象特性，即可自由扩展属性(null除外);  
 ```
 var obj = {}; obj.a = 100;  
 var arr = []; arr.b = 100;

function fn(){}
fn.a = 100;
 ```

- 所有的引用类型(数组、对象、函数)，都具有__proto__（隐式原型）特性，属性值是一个普通的对象;
   ```
    console.log(obj.__proto__);
    console.log(arr.__proto__);
    console.log(fn.__proto__);
   ```
 - 所有的函数，都具有prototype（显示原型）特性，属性值也是一个普通的对象;  
 - 所有的引用类型(数组、对象、函数)，都具有__proto__属性的值指向它得到构造函数的“prototype”的属性值;
    ```
    console.log(obj.__proto__ === Object.prototype)
    ```
- 当试图得到一个引用类型的属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它构造函数的prototype）中去找。
    ```
    console.log(obj.__proto__ === Object.prototype)
    
    
        function Foo(name,age){
            this.name = name;
        }
         var f = new Foo('zhangsan','22');
         Foo.prototype.alertname = function(){
             alert(this.name);
         }
         f.printName = function(){
             console.log(this.name);
         }

         f.printName();
         f.alertname();
    ```
### 循环对象自身的属性

    判断 是否是 f 自身的属性
    高级浏览器已经在 for in 中屏蔽了来自原型的属性
    var item;
    for(item in f){
        if(f.hasOwnProperty(item)){


​            
​        }
​    }

### 原型链
    ```
    function Foo(name,age){
            this.name = name;
        }
         var f = new Foo('zhangsan','22');
         Foo.prototype.alertname = function(){
             alert(this.name);
         }
         f.printName = function(){
             console.log(this.name);
         }
    
         f.printName();
         f.alertname();
         
         f.toString() //去f.__proto__.__proto__找
    ```
![image](http://upload-images.jianshu.io/upload_images/7567991-066badca1a1f4b6c.png)

### instanceof
用于判断 **引用类型** 属于哪个**构造函数**的方法


## 解题

### 如何判断一个变量是数组

    var arr;
    arr instanceof Array

### 写一个原型链继承的例子
    ```
    function Animal(){
        
        this.eat = function(){
            console.log('animal eat')
        }
    }
    function Dog = function(){
        this.bark = function(){
            console.log('dog bark')
        }
    }
    
    Dog.prototype = new Animal();
    var hashiqi  =new Dog();
    此时的 hashiqi 既有eat属性，也有bark属性
    ```


## 解题
1. 描述new一个对象的过程
	* 创建一个对象
	* this指向这个新对象
	* 执行代码———即对this赋值
	* 返回this的值
2. 写一个贴近实际开发的原型链的例子
```
function Elem(id){
	this.elem = document.getElementById(id);
}
Elem.prototype.html = function(val){
	var elem = this.elem;
	if(val){
		elem.innerHtml = elem
	}else {
		return elem.innerHtml;
	}
}
Elem.prototype.on(type,fn){
	var elem = this.elem;
	elem.addEventListener(type,fn);
	return this;
}

var div = new Elem(div);
Console.log(div.html())
Console.log(div.html(‘<p>script is good</p >’))

div.html();
div.on(‘click’,function(){
	alert(‘点击了’)
})
```
---
#### 给对象直接添加属性和在原型对象上添加有什么区别？

区别在于继承。给对象直接添加属性：再重新new一个对象的时候，新的对象并没有这个属性。
```
var book1 = new Book();
 
book1.c = 'Hello';
 
var book2 = new Book() 
 
console.log( book2.c ) //没有结果。
 
但是用 prototype 就不一样了
 
Book.prototype.c = 'Hello';
 
var book2 = new Book();
 
console.log(book2.c) // Hello;
```
#### 普通函数和构造函数的区别

**所谓构造函数，是生成一个对象的模板，是生成对象的函数。**一个构造函数，可以生成多个实例对象，每个实例对象都有相同的结构。

1. 构造函数的函数名首字母一般都为大写
   普通函数 遵照小驼峰式命名法
2. 构造函数 使用new调用
   普通函数 不用
3. 构造函数 里面的this所指的是实例对象
   普通函数 内部的this指向调用函数的对象（如果没有对象调用，默认是window）
4. 构造函数 默认的返回值是构造函数的实例
   普通函数 返回值由return语句决定

---


## 闭包和作用域

#### 执行上下文
 - 范围：一段<script> 或者一个函数
 - 全局：变量定义，函数声明
 - 函数：变量定义、函数声明、this、argumens  

 变量提升 

#### 函数声明和函数表达式的区别

```
//函数声明
function myFunctionDeclaration(){
  function innerFunction() {}
}
//以下为函数表达式
var myFunc = function(){};
myFunc(function(){
  return function(){};
});
```
函数声明会在任何表达式被解析和求值之前先行被解析和求值。

#### this



[JavaScript 的 this 原理-[阮一峰](http://www.ruanyifeng.com/)](http://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

`this`指的是函数运行时所在的环境。在执行时才能确认值，定义时无法确定。

```javascript
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2
```

对于`obj.foo()`来说，`foo`运行在`obj`环境，所以`this`指向`obj`；对于`foo()`来说，`foo`运行在全局环境，所以`this`指向全局环境。所以，两者的运行结果不一样。

`this`的设计目的就是在函数体内部，指代函数当前的运行环境。

箭头函数其实是没有 `this` 的，箭头函数中的 `this` 只取决包裹箭头函数的第一个普通函数的 `this`

 #### call apply bind

 **call**
 ```
 function fn1(){
     alert(name);
     console.log(this)
 }
 fn1.call({x:100},'zhangsan');
 ```
 这里this就是{x:100}  

 **bind**
 ```
 var fn2 = function(){
     alert(name);
     console.log(this)
 }.bind({y:200})
 
 ```
 应用bind后，this只能为bind绑定的对象。  
 此情况 不可应用函数声明

 **apply**

 只接受两个参数，第一个参数和call相同，后面的为一个数组。


#### 作用域
* 没有块级作用域
* 只有函数和全局作用域

#### 作用域链
自由变量：当前作用域没有定义的变量。

函数在哪里定义，它的父级作用域就在哪，与它执行的地方没关系。  

自由变量逐层向父级作用域寻找作用域----作用域链

#### 闭包
```
function F1(){
    var a = 100
     返回一个函数（函数作为返回值）
    return function(){
        console.log(a)
    }
}
f1得到一个函数
var f1 = F1();
var a = 200
f1()
```

**闭包的使用场景**  
* 函数作为返回值 ↑
* 函数作为参数传递

```
function F1(){
    var a = 100
     返回一个函数（函数作为返回值）
    return function(){
        console.log(a)
    }
}
var f1 = F1();
function F2(fn){
    var a = 200;
    fn()
}
F2(f1)
```

## 解题
1. 说一下对变量提示的理解 
    * 变量的定义 
    * 函数声明（与函数表达式的区别）：函数的声明骨灰被提前而哈纳萨湖表达式不会
2. 说明this几种不同的使用场景
    * 作为构造函数执行
    * 作为对象属性执行
    * 作为普通函数执行
    * call apply bind
3. 创建10个<a>标签，在点击的时候，弹出来相应的序号
    // 错误的写法
    ```
    var i,a;
    for(i = 0;i < 10;i++){
        a = document.createElement('a');
        a.innerHTML = i + '<br>';
        a.addEventListener('click',function(e){
            e.preventDefault();
            alert(i)
        })
        document.body.appendChild(a)
    }
    ```
    
    // 正确的写法
    ```
    var i;
    for(i = 0;i < 10;i ++){
        (function(i){
        
         函数作用域
        
            var a = document.createElement('a');
            a.innerHTML = i + '<br>';
            a.addEventListener('click',function(e){
                e.preventDefault();
            alert(i); 自由变量，要去父级作用域找
            })
            document.body.appendChild(a)

        })(i)
        
        
    }
    
    自执行函数，就是不用调用，只要定义完成，就立即执行
    ```
4. 如何理解作用域
    * 自由变量
    * 作用域链，即自由变量的查找
    * 闭包的两个场景
5. 闭包在实际代码中的应用

    闭包实际应用中主要用于封装变量，收敛权限 
    ```
    function isFirstLoad(){
        var _list = [];
        return function (id){
            if(_list.indexof(id) >= 0){
                return false;
            }else{
                _list.push(id);
                return true;
            }
        }
    }
    
    var fistLoad = inFirstLoad();
    firstLoad(10)  true;
    firstLoad(10)  false;
    firstLoad(20)  true;
    
    意义在于，在于函数外面，不可能改掉_list 的值
    ```
    
## 异步和单线程

异步和同步的主要区别的就是，异步没有阻塞程序的进行
#### 前端使用异步的场景
* 定时任务:setTimeout,setInterval
* 网络请求：ajax请求，动态<img>加载
* 事件绑定

```
console.log(100);
setTimeout(function(){
    console.log(200)
})
console.log(300)
```

执行流程  
* 执行第一行，打印100
* 执行setTimeout后，传入setTimeout的函数会被暂存起来，不会立即执行（单线程的特点，不能同时干两件事）
* 执行最后一行，打印300
* 待所有程序执行完，处于空闲状态时，会立马查看有没暂存起来的要执行
* 发现暂存起来的setTimeout中的函数无需等待时间，就立即过来执行

### 解题

同步异步的区别
​    * 同步会阻塞代码的执行，而异步不会
​    * alert是同步，setTimeout是异步
​    
---
e.g. js是单线程的，但浏览器是多线程的， webworker（在服务器上）来实现js多线程

## 其他知识点



#### 日期

```
Date.now()  获取当前时间毫秒数 
var dt = new Date()

dt.getTime()  获取毫秒数
dt.getFullYear()    年
dt.getMonth()       月（0-11）
dt.getDate()        日（1-31）
dt.getHours()       小时（0-23）
dt.getMinutes()     分（0-59）
dt.getSeconds()     秒（0-59）


```

#### Math

* 获取随机数Math.random();(0-1);
    ```
    Math.floor(Math.random() * 可能值的总数 + 第一个可能的值) 
    ```
    



#### 数组API

* forEach   遍历所有元素
    ```
    var arr = [1,4,2,3,9,20,5];
    arr.forEach(function(item,index){
        console.log(index,item)
    })
    ```
* every     判断所有元素是否都符合条件
    ```
    var result = arr.every(function(item,index){
        if(item < 5){
            return true;
        }
    })
    ```
* some      判断元素是否有至少一个元素符合条件

     ```
     
     ```

     var result = arr.some(function(item,index){
         if(item < 5){
             return true;
         }
     })

     ```
     
     ```
* sort      排序
    ```
    var arr = [1,4,2,3,9,20,5]
    var arr2 = arr.sort(function(a,b){
        从小到大
        return a-b
        
        从大到小
        return b-a
        
    })
    console.log(arr2)
    
    原数组和新产生的数组都会排序
    ```
* map       对元素重新组装，生成新的数组
 ```
    var arr2 = arr.map(function(item,index){
        return '<b>' + item + '</b>'
    })
 ```

* filter    过滤符合条件的数组

 ```
    var result = arr.filter(function(item,index){
        if(item < 5){
            return true;
        }
        console.log(arr2)
    })
 ```
#### 对象API

for(..in..){}

```
var obj = {
    x:100,
    y:200,
    z:300
}
var key;
for(key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key,obj[key])
    }
}
```

### 解题
* 获取2017-06-10的格式的日期

```
function formDate(dt){
    if(!dt){
        dt = new Date()
    }
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
     
    if(month < 10){
        强制类型转换
        month = '0' + month;
    }
    if(day < 10){
        强制类型转换
        day = '0' + day
    }
        强制类型转换
    return year + '-' + 'month' + '-' + day
}

var dt = new Date();
var formData = formDate(dt)
```
* 获取随机数，要求是长度一致的字符串的格式
```
var random = Math.random();
random = random + '0000000000'
random = random.slice(0,10)
console.log(random)
```
* 写一个能遍历对象和数组通用forEach函数
```
function forEach(obj,fn){
    var key
    if(obj instanceof Array){
        obj.forEach(function(item,inedx){
            fn(index,item)
        })
        
    }else {
        for(key in obj){
            fn(key,obj[key])
        }
    }
    
}

使用

var arr = [2,6,9];
forEach(arr,function(index,item){
    console.log(index,item)
})
var obj = {
    x:100,
    y:200
};
forEach(obj,function(key,value){
    console.log(key,value)
})
```
# 从基础知识到 JS-Web-API
常说的JS(浏览器执行的JS)包含两个部分：
* JS基础知识(ECMA262标准)
* JS-Web-API(W3C标准)

## DOM操作

Document Object Model

### DOM节点操作
DOM可以理解为：
浏览器把拿到的html代码，结构化成 浏览器可识别、js可操作的一个模型

#### 获取DOM节点
```
var div1 = document.getElementById('div1'); //元素
var divList = document.getElementsByTagName('div');  //集合
var divList = document.getElementsByClassName('div'); //集合
var pList = document.querySelectorAll('p');  //集合
console.log(divList.length)
console.log(divList[0])
```

#### Attribute 和 Prototype
Attribute 修改的是文档标签中的属性，修改的是html
Prototype 修改的是 JS对象的标准属性

#### DOM结构操作  
* 新增节点
```
添加新节点
var div1 = document.getElementById('div');

var p1 = document.createElement('p');
p1.innerHTML = 'THIS IS P1';
div1.appendChild(p1);添加新创建的元素


移动已有节点
var p2 = document.getElementById('p2');
div1.appendChild(p2);将p2移动到了新位置

```
* 获取父元素
* 获取子元素
* 删除节点

```
var parent = div1.parentElement;
var child  = div.childNodes;
div1.removeChild(child[0])

```

### 解答

* DOM是哪种基本的数据结构？
    树
* DOM操作的常用API有哪些
    * 获取DOM节点，以及节点的property和Attribute
    * 获取父节点 获取子节点
    * 新增节点 删除节点
* DOM节点的 Attribute 和 Prototype的区别
    * Prototype 只是一个 JS对象的属性的修改和获取
    * Attribute 是对html标签中的属性的修改和获取

## BOM操作

### BOM操作
* navigatior
* screen
* location
    * location.href
    * location.protcool     协议 'http:' 'https:'
    * location.host         域名 
    * location.pathname     路径 '/learn/99'
    * location.search       查询字符串 ?...
    * location.hash         哈希       #...
* history
    * history.back()
    * history.forward()

```
检测浏览器的类型
// navigator
var us = navigator.userAgent;
var isChrome = ua.indexOf('Chrome')
console.log(isChrome);

//screen
console.log(screen.width)
console.log(screen.height )
```

## 事件

### 题目 
1. 编写一个通用的事件监听函数
2. 描述事件冒泡流程
3. 对于一个无限下拉加载的页面，如何给每一个图片绑定点击事件

#### 通用事件绑定
```
function bindEvent(elem, type, fn){
    elem.addEventListener(type,fn)
}

var a = document.getElementById('link1')
bindEvent(a,'click',function(){
    e.preventDefault(); 阻止默认行为
    alert('click')
})

```
#### 事件冒泡 

```
e.stopPropatation();阻止冒泡
```

#### 代理
```
<div id='div1'>
    <a>11111</a>
    <a>22222</a>
    <a>33333</a>
    <a>44444</a>
</div>

var div1 = document.getElementById('div');
div1.addEventListener('click',function(e){
    //target 触发的地点
    var target = e.target;
    
    if(target.nodeName === 'A'){
        alert(target.innerHtml);
    }
})

完善通用绑定事件的函数

function bindEvent(elem,type,selector,fn){
    
    if(fn == null){
        fn = selector
        seletor = null
    }
    elem.addEventListener(type,function(e){
        var target;
        if()
        
        
    })
    
}


```







## JS中的函数防抖动和函数节流

## 场景：

在页面中很多的事件是会频繁执行的、如：

1. window的resize，scroll事件
2. 拖拽过程中的 mousemove事件
3. 文字输入过程中的keyup等事件

这些事件一旦触发会频繁执行、但是实际上我们可能只需要在特定的时候去执行绑定了这些事件的函数

例如：我需要检测一次拖拉浏览器，移动过程中都算是一次，知道最后鼠标抬起来了，才算是完成了一次拉伸窗口；有比如，我们输入搜索框内的文字的时候，需要发ajax 到后台去请求数据，实际上我们并不需要每一次的输入都发送一个请求，而是在用户已经输完了一整段话或者是几个文字之后再去发送一个ajax，这样会节省很多的资源开销 。等等的这些问题都需要函数防抖动或者函数节流来解决

## 函数防抖动(debounce)

1.定义：当我们调用一个动作的时候，会设置在n毫秒后才执行，而在这n毫秒内，如果这个动作再次被调用的话则将重新在计算n毫秒，采取执行这个东西。

2.代码：

方法定义：

```js
/**
* 返回函数连续调用时，停留时间大于或等于 idle，action 才会执行
* @param idle   {number}    停留空闲时间，单位毫秒
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @return {function}    返回客户调用函数
*/ debounce(idle,action) 
```

方法实现：

```js
var debounce = function(idle, action){ 
  var last; 
  return function(){ 
    var ctx = this, 
        args = arguments; 
    clearTimeout(last); 
    last = setTimeout(function(){ 
    action.apply(ctx, args);// 延迟idle毫秒后 执行action }, idle); 
  }; 
}; 
```

使用例子：

例子1：

```js
/**
* 计算，触发一次拉伸窗口
* (想象一下我们平时拉伸窗口的时候会持续触发resize事件、实际上我们需要的是从拉伸开始，到停止拉伸，算一次)
* 这个实现就是通过函数防抖实现的
* 这样就能实现计算一次的拉伸
*/ var action = function(){ 
console.log('resize 一次!'); }; 
var eventAction = debounce(500, action);// debounce 前面有实现代码 这里就不写了 window.addEventListener('resize', eventAction);// 绑定方法 
```

例子2：

```js
/**
*一般输入搜索框的时候，需要发ajax，我们不希望一有输入事件就发送ajax，而是希望积累到一定的字数后才发送ajax节省
*可以使用函数防抖解决这个问题
*/ var inputEle = document.getElementById('inputBox'); 
var sendAjax = function(data){  
// 发送请求 
// $.ajax({}); 
}; 
var action = function(){  
  console.log('发送一次请求!');  
  var data = this.value;  
  console.log('输入的数据:' + data);  
  sendAjax(data); 
} 
var eventAction = debounce(500, action); 
inputEle.addEventListener('input', eventAction); 
```



```html
<!-- HTML部分 --> 
<input class="inputBox" type="text" /> 
```

## 函数节流(throttle)

1.定义：控制在一定的周期内执行某个动作。先预定在一个执行周期，当调用的时刻大于等于执行周期则执行该动作 然后进入下一个执行周期。就相当于，严格控制在每个周期内只执行一次动作，这样可以做到控制执行频率的效果。

2.代码

方法定义：

```js
/**
* 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
* @param delay  {number}    延迟时间，单位毫秒
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @return {function}    返回客户调用函数
*/ throttle(delay,action) 
```

方法实现：

```js
var throttle = function(delay, action){ 
  var last = 0; return function(){ 
  var curr = +new Date() if (curr - last > delay){ 
    action.apply(this, arguments) last = curr }
  } 
} 
```

