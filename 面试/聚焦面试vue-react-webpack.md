# Vue

## 基础使用

### 1. created 和mounted区别

    created是vue实例初始化结束 但还没有开始渲染.
    mounted是已经渲染完了

### 2. 抽离公共的逻辑,mixin缺点

- 变量来源不明确,不利于阅读
- 多mixin可能造成命名冲突
- mixin和组件容易出现多对多的关系, 复杂度较高
  
### 3. 动态组件是什么

```html
<component :is="NextTickName"/>
```

### 4. 如何异步加载组件

- import加载
- 按需加载大的组件

```javascript
components: {
  FormDemo: () => import('../BaseUse/FormDemo'),
}
```

### 5. 缓存组件 keep-alive

频繁切换,不需要重复渲染

### 6. nextTick  

   数据改变之后 异步渲染之后获取dom元素

## 原理

### 1. 如何理解MVVM  

  以组件化为基础的   
  主要是数据驱动视图, 不依赖操作DOM  
  M(Model)---data  
  V(View)---html
  VM(ViewModel)---vue提供的能力,通过监听事件,监听指令来操作data

### 2. data数据发生变化,如何立刻触发视图更新

核心API- Object.defineProperty(3.0 改用proxy.兼容性不好,且无法polyfill)  
监听get和set方法,在方法中进行处理

```javascript
  var o = {};
  Object.defineProperty(o, "b", {
    get : function() { return bValue; },
    set : function(newValue) { bValue = newValue; },
  });

```

**缺点**
1. 深度监听, 需要递归到底, 一次性计算量大
2. 无法监听 新增/删除属性(Vue.set  Vue.delete)
3. 无法原生监听数组需要特殊处理

### 虚拟dom和diff

```javascript
  function Parent(val) {
    this.val = val
  }
  Parent.prototype.getValue = function (){
    console.log(this.val)
    return this.val
  }
  function Child (){
    Parent.call(this, ...arguements)
  }
  Child.prototype = Object.create(Parent.prototype, {
    
  })



```

- http强缓存和协商缓存
- 