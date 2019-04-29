### 生命周期

| 生命周期钩子  | 组件状态                                                     | 最佳实践                                                    |
| ------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| beforeCreate  | 实例初始化之后，this指向创建的实例，不能访问到data、computed、watch、methods上的方法和数据 | 常用于初始化非响应式变量                                    |
| created       | 实例创建完成，可访问data、computed、watch、methods上的方法和数据，未挂载到DOM，不能访问到$el属性，$ref属性内容为空数组 | 常用于简单的ajax请求，页面的初始化                          |
| beforeMount   | 在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数 | -                                                           |
| mounted       | 实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问 | 常用于获取VNode信息和操作，ajax请求                         |
| beforeupdate  | 响应式数据更新时调用，发生在虚拟DOM打补丁之前                | 适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器 |
| updated       | 虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作 | 避免在这个钩子函数中操作数据，可能陷入死循环                |
| beforeDestroy | 实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例 | 常用于销毁定时器、解绑全局事件、销毁插件对象等操作          |
| destroyed     | 实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁 | -                                                           |

### 全局API

* Vue.directive( id,[ [definition\] )](https://cn.vuejs.org/v2/api/#Vue-directive)

  注册或获取全局指令。

  ```
  Vue.directive('my-directive', {
    bind: function () {},
    inserted: function () {},
    update: function () {},
    componentUpdated: function () {},
    unbind: function () {}
  })
  
  // 注册 (指令函数)
  Vue.directive('my-directive', function () {
    // 这里将会被 `bind` 和 `update` 调用
  })
  
  // getter，返回已注册的指令
  var myDirective = Vue.directive('my-directive')
  ```

  


### Vue.nextTick( [callback, context\] )]

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

> Vue 实现响应式并**不是数据发生变化之后 DOM 立即变化**，而是按一定的策略进行 DOM 的更新。



也就是说，nextTick中的方法 会在数据更新到DOM之后执行，否则对DOM节点的操作可能会undefined.

`$nextTick()` 返回一个 `Promise` 对象

原因：

> Vue 在更新 DOM 时是**异步**执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

因为 `$nextTick()` 返回一个 `Promise` 对象，所以你可以使用新的 [ES2016 async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 语法完成相同的事情：

```
methods: {
  updateMessage: async function () {
    this.message = '已更新'
    console.log(this.$el.textContent) // => '未更新'
    await this.$nextTick()
    console.log(this.$el.textContent) // => '已更新'
  }
}
```

### 兄弟组件数据传递

1. vuex

2. `$parent.$children`

3. EventBus（全局的事件总线）

   参考：[vue篇之事件总线（EventBus）](<https://www.jianshu.com/p/4fa3bf211785>)

   在Vue中可以使用 `EventBus` 来作为沟通桥梁的概念，就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，所以组件都可以上下平行地通知其他组件

```javascript
// event-bus.js
import Vue from 'vue'
export const EventBus = new Vue()

// main.js
Vue.prototype.$EventBus = new Vue()

//发送事件
<script> import { EventBus } from "../event-bus.js";
    export default {
        name: "DecreaseCount",
        data() {
            return {
                num: 1,
                deg:180
            };
        },
        methods: {
            decrease() {
                EventBus.$emit("decreased", {
                    num:this.num,
                    deg:this.deg
                });
            }
        }
    }; 
</script>

//接收事件
 mounted() {
   
     EventBus.$on("decreased", ({num,deg}) => {
         this.fontCount -= num
         this.$nextTick(()=>{
             this.backCount -= num
             this.degValue -= deg;
         })
     });
 }
```

​	



