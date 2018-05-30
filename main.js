(function(){
	'use strict';
	// Components

	var likeComponent = Vue.extend({
		//props: ['message'],//カスタム属性
		props: {
			//オブジェクト形式で、型や値を指定できる
			message: {
				type: String,
				default: 'Like'
			}
		},
		data: function(){
			return{
				count: 0
			}
		},
		template: '<button @click=countUp>{{message}} {{ count }}</button>',
		methods: {
			countUp: function(){
				this.count++;
			}
		}
	});
	var app = new Vue({
		el: '#app',
		components : {
			'like-component': likeComponent
		}
	});

})();
