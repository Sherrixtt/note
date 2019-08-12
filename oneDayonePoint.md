### 1. js的最大安全数 是 2^53-1 [leetcode 66 plus-one](https://leetcode.com/problems/plus-one/)
>feat安全”意思是说能够one-by-one表示的整数，也就是说在(-2^53, 2^53)范围内，双精度数表示和整数是一对一的，反过来说，在这个范围以内，所有的整数都有唯一的浮点数表示，这叫做安全整数。如果您还对‘安全’有些困惑，请见回答后面的详细解释。

JavaScript 的最大安全数是如何来的
根据双精度浮点数的构成，精度位数是 53 bit。安全数的意思是在 -2^53 ~ 2^53 内的整数(不包括边界)与唯一的双精度浮点数互相对应。举个例子比较好理解：
`Math.pow(2, 53) === Math.pow(2, 53) + 1 // true`
复制代码Math.pow(2, 53) 竟然与 Math.pow(2, 53) + 1 相等！这是因为 Math.pow(2, 53) + 1 已经超过了尾数的精度限制(53 bit)，在这个例子中 Math.pow(2, 53) 和 Math.pow(2, 53) + 1 对应了同一个双精度浮点数。所以 Math.pow(2, 53) 就不是安全数了。

`最大的安全数为 Math.pow(2, 53) - 1，即 9007199254740991。`

解决方案大致有以下几种：

1.针对大数的整数可以考虑使用 bigint 类型(目前在 stage 3 阶段)；
2.使用 [bigNumber](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FMikeMcl%2Fbignumber.js)，它的思想是转化成 string 进行处理，这种方式对性能有一定影响；
3.可以考虑使用 [long.js](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2FdcodeIO%2Flong.js)，它的思想是将 long 类型的值转化成两个精度为 32 位的双精度类型的值。
4.针对小数的话可以使用 [number-precision](https://link.juejin.im?target=https%3A%2F%2Fgithub.com%2Fnefe%2Fnumber-precision), 该库将小数转为整数后再作处理；

### 2. n&(n-1)判断是不是2的幂  [leetcode 231 power-of-two](https://leetcode.com/problems/power-of-two/)
位运算符
&: 二进制两个数值的个位分别相与，同时为1才得1，只要一个为0就为0。
~: 取反  0 <===> 1
每一个符合2的幂的数的二进制都只有一个1
```
1:	1
2:	10
4:	100
8:	1000
16:	10000

1-1:	0
2-1:	01
4-1:	011
8-1:	0111
16-1:	01111
进行&计算 如果为2的幂 那么结果一定是0
```
