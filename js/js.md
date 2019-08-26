### 变量类型
* Undefined
* Null
* Boolean
* String
* Number
* Symbol
* Object
#### Undefined Null

Undefined 类型表示未定义
null表示的是：“定义了但是为空”
用 void 0 来获取undefined值

`typeof null == "object" // true`
#### String
String的最大长度是2^53-1 同时也是最大安全数

#### Number 

* js中是有+0 和 -0的，区分+0和-0的方法是1/x是Infinity或是-Infinity
* 非整数的Number无法用==或===来比较。
`console.log(0.1+ 0.2 === 0.3) // false`
因为浮点运算精度问题导致两边并不完全相等，正确的比较方法是`Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSLION`检测结果是否小于最小精度。
_TIPS:_
`Math.abs()函数返回指定数字的绝对值`

#### Object

JS中的几个基本类型都在对象中有一个“亲戚”：
* String
* Number
* Boolean
* Symbol
3 和 new Number(3)是不同的，一个是Number类型，一个是对象类型。
Number、String和Boolean，三个构造器是两用的，当跟 new 搭配时，它们产生对象，当直接调用时，它们表示强制类型转换。
> 为什么给对象添加的方法能用在基本类型上？
.运算符提供了装箱操作,会根据基础类型构造一个临时对象,使得我们能在基础类型上调用对应对象的方法。

##### 装箱转换
每一种基本类型Number, String, Boolean, Symbol在对象中都有对应的对象。
装箱转换, 就是把基本类型转化为对应的对象

##### 拆箱转换
拆箱转换是 对象到基本类型的转换。

### 
* 对象有唯一标识性
* 对象有状态: 同一个对象可能处于不同状态
* 对象有行为: 即对象的状态，可能因为它的行为产生变迁