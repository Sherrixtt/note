1.初步实现的是当前页打开

```javascript
axios({
	method: 'get',
    url: 'https://dev.youlinji.taofangdd.com/yljContract/contractFile/'+this.id,
    responseType: 'blob'
}).then(res=>{
    let blob = new Blob([res.data],{type:"application/pdf"}); 
	let objectUrl = URL.createObjectURL(blob); 
	window.location.href = objectUrl
})


```

 2.想在新标签页打开， 但是被浏览器拦截了。

`axios`获取`url`后`window.open()`就被处理掉了。

异步操作请求数据，延迟打开窗口，浏览器会拦截掉认为不是用户触发的。
尝试 异步请求前 `window.open() => window.location.href = url;`

或模拟用户点击
`<a :href="url" target="_blank" hidden></a>`
将异步请求的链接 放到href里 后 (promise什么 得用上)
`this.$ref.download.click();`
到这  如果请求的是个url地址是可以的。但是 需要的事下载一个pdf文件 后台返回的是文件流
新标签页 不能打开 通过`URL.createObjectURL()` 创建的URL
因为这个 URL 的生命周期和创建它的窗口中的 document 绑定。这是到这看了MDN才发现的（惭愧)

` <a :href="url" target="_blank" download="" @click="downloadPdf"></a>`也不行。

axios异步还没结束 url  

```javascript
 this.$download('/yljContract/contractFile/'+this.id).then(res=> {
	let blob = new Blob([res.data],{type:"application/pdf"}); 
	let objectUrl = URL.createObjectURL(blob); 
	this.contractUrl = objectUrl;
	console.log(objectUrl)

})
.then((res)=>{
	this.$refs.contractTag.click()
});

```











