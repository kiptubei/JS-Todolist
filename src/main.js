console.clear();

// (function() {
	const todo = {
		todo: ['default'],

		init: function() {
			this.cacheDom();
			this.render();
			this.bindEvents();
		},
		cacheDom: function() {
			this.$el = $('#todoModule');
			this.$button = this.$el.find('button');
			this.$input = this.$el.find('input');
			this.$ul = this.$el.find('ul');
			this.template = this.$el.find('#todo-template').html();
		},
		bindEvents: function() {
			this.$button.on('click', this.addTodo.bind(this));
			this.$ul.delegate('i.del', 'click', this.deleteTodo.bind(this))
		},
		render: function() {
			var data = {
				todo: this.todo
			};
			this.$ul.html(Mustache.render(this.template,data));
		},
		addTodo: function(event) {
			this.todo.push((typeof event === "string") ? event : this.$input.val());
			this.render();
			this.$input.val('');
		},
		deleteTodo: function(event) {
			var $remove = $(event.target).closest('li');
			var i = this.$ul.find('li').index($remove);

			this.todo.splice(i,1);
			this.render();
		}

	};

	todo.init();
//start of my to-do project

function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


let data = [];

const valuesFactory=(title,desc,date,priority)=>{
	return {title,desc,date,priority}
}
	//
	// let form_data = document.getElementById("form_it");
  //  console.log(form_data);
	// form_data.onsubmit = function(event) {
  //   event.preventDefault();
  //   var formData = new FormData(document.getElementById('form_it'));
	// 	let title = formData.get('title');
	//   let desc = formData.get('desc');
	// 	let date = formData.get('date');
	// 	let priority = formData.get('priority');
	//
	//   data.push(valuesFactory(title,desc,date,priority));
  // }



function empty() {
  document.querySelector('#desc').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#due-date').value = '';
  document.querySelector('#priority').checked = false;
}

const form_data = document.querySelector('.form-container');
form_data.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
	const desc = document.querySelector('#desc').value;
  const date = document.querySelector('#due-date').value;
  const priority = document.querySelector('#priority').checked;
  // const book = new Book(author, title, pages, read);
  // addBookToLibrary(book);

	data.push(valuesFactory(title,desc,date,priority));
  empty();
});


console.log(data);
