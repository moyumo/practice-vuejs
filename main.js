(function(){
	'use strict';
	var vm = new Vue({
		el: '#app',
		data:{
			newItem: '',
			todos:[{
				title: 'task 1',
				isDone: false
			},
			{
				title: 'task 2',
				isDone: false
			},
			{
				title: 'task 3',
				isDone: true
			}]
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
				var item = {
					title: this.newItem,
					isDone: false
				};
				this.todos.push(item); //pushするのはここのitem
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
