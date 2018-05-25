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
		watch: {
			// ↓ 配列自体に変更があったら見てくれるけど、中身の変更はみてくれない
			// todos: function(){
			// 	localStorage.setItem('todos', JSON.stringify(this.todos));
			// 	alert("Data saved!");
			// }
			todos: {
				handler: function(){
					localStorage.setItem('todos', JSON.stringify(this.todos));
					//alert("Data saved!");
				},
				deep: true
			}
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
				this.todos = this.remaining;
			}
		},
		computed: {
			remaining: function(){
				return this.todos.filter(function(todo){
					return !todo.isDone;
				});
			}
		}
	});
})();
