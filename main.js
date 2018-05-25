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
			},
			// == 完了したTODOを一気に削除
			purge: function() {
				if(!confirm('delete finished?')){
					return;
				}
				// this.todos = this.todos.filter(function(todo){
				// 	//完了してないものを返す
				// 	return !todo.isDone;
				// });
				this.todos = this.remaining;
			}
		},
		computed: {
			remaining: function(){
				// var items = this.todos.filter(function(todo){
				// 	return !todo.isDone;
				// });
				// return items.length;
				return this.todos.filter(function(todo){
					return !todo.isDone;
				});
			}
		}
	});
})();
