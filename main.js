(function(){
	'use strict';
	// Components

	var likeComponent = Vue.extend({
		template: '<button>like</button>'
		//templateにかける要素は１つのみ
		//複数かきたいときは
		//<div><button>1</button><button>2</button></div>
		//のように親要素で囲う
	});
	var app = new Vue({
		el: '#app',
		components : {
			'like-component': likeComponent
		}
	});

})();
