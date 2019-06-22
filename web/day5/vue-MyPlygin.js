/**
 * vue的插件库
 */
(function (){
	//需要向外暴露的插件对象
	const MyPlugin = {}
	
	//插件对象必须有个 install()方法
	MyPlugin.install = function (Vue, options) {
	  // 1. 添加全局方法或属性
	  Vue.myGlobalMethod = function () {
	    console.log('Vue函数对象的方法myGlobalMethod执行了')
	  }
	
	  // 2. 添加全局资源
	  Vue.directive('my-directive', function(el, binding){
	  	el.textContent = binding.value.toUpperCase()
	  })
	
	  // 3. 注入组件
//	  Vue.mixin({
//	    created: function () {
//	      // 逻辑...
//	    }
//	    ...
//	  })
	
	  // 4. 添加实例方法
	  Vue.prototype.$myMethod = function(){
	  	console.log('Vue对象的实例方法myMethod执行了')
	  }
	}
	
	//向外暴露
	window.MyPlugin = MyPlugin;
})()
