//console.clear();

let todoName = 'default';

let task = [
	{
		name:'default',
		title:'',
		desc:'',
		priority: 1,
		dueDate: Date.now()
	}
];

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
			todoName = this.todo.length-1;
			console.log(number);
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

const tasks = {
	data: [],

	init: function() {
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function() {
		this.$el = $('#tasksModule');
		this.$form = this.$el.find('form');
		this.$button = this.$form.find('#btn');
		this.$title = this.$form.find('#title');
		console.log(this.$button);
	},
	bindEvents: function() {
		this.$button.on('click', this.submitDetailsForm.bind(this));
		console.log(this.data);
	},
	submitDetailsForm: function (e) {
		this.$form.on('submit', (e) => {
		  e.preventDefault();

		  const title = this.$title.val();
			console.log(this.$title.val());
			const desc = document.querySelector('#desc').value;
			console.log(desc);
		  const date = document.querySelector('#due-date').value;
		  const priority = document.querySelector('#priority').checked;

			this.data.push(valuesFactory(number,title,desc,date,priority));
		  this.empty();
		});
	     //this.data.push(this.$form.submit());
			 console.log(this.data);
		 },
		 empty: function () {
		   this.$form.find('#desc').val('');
		   this.$form.find('#title').val('');
		   this.$form.find('#due-date').val('');
		   document.querySelector('#priority').checked = false;
		 }
};

function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

tasks.init();

let data = [];

const valuesFactory=(title,desc,date,priority)=>{
	return {title,desc,date,priority}
}

console.log(data);
