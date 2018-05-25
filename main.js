(function(){
	'use strict';
	var vm = new Vue({
		el: '#app',
		data:{
			newItem: '',
			todos:[]
		},
		watch: {
			todos: {
				handler: function(){
					localStorage.setItem('todos', JSON.stringify(this.todos));
				},
				deep: true
			}
		},
		mounted: function(){
			this.todos = JSON.parse(localStorage.getItem('todos')) || [];
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
