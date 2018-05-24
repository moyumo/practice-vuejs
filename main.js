(function(){
	'use strict';
	var vm = new Vue({
		el: '#app',
		data:{
			newItem: '',
			todos:[
				'task1',
				'task2',
				'task3'
			]
		},
		methods: {
			// == TODOを追加する
			// # submitしても画面遷移させない
			// addItem: function(e){
			// 	e.preventDefault();
			// 	this.todos.push(this.newItem);
			// }
			// ->ディレクティブにpreventつけちゃう
			addItem: function(){
				this.todos.push(this.newItem);
				this.newItem = ''; //そのままだと値が残っちゃうからここで空文字にする
			},
			// // == TODO削除
			deleteItem: function(index){
				if(confirm('OK?')){
					this.todos.splice(index,1); //index番目から1個削除
				}
			}

		}
	});
})();
