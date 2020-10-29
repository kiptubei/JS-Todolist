//console.clear();
import "./style.css";

let todoName = "default";

let task = [
  {
    name: "default",
    title: "create tasks",
    desc: "create tasks by clicking on a todo button (e.g default) in left panel",
  	date: "01-01-1970",
		priority: "low",
  },
];

// (function() {
const todo = {
  todo: ["default"],

  init: function () {
    this.cacheDom();
    this.render();
    this.bindEvents();
		//showTasks();
  },
  cacheDom: function () {
    this.$el = $("#todoModule");
    this.$button = this.$el.find("button");
    this.$input = this.$el.find("input");
    this.$ul = this.$el.find("ul");
    this.template = this.$el.find("#todo-template").html();
  },
  bindEvents: function () {
    this.$button.on("click", this.addTodo.bind(this));
    this.$ul.delegate("i.del", "click", this.deleteTodo.bind(this));
		this.$ul.delegate("button.open-button", "click", this.setTaskName.bind(this));
  },
  render: function () {
    var data = {
      todo: this.todo,
    };
    this.$ul.html(Mustache.render(this.template, data));
  },
  addTodo: function (event) {
    this.todo.push(typeof event === "string" ? event : this.$input.val());
	  showTasks();
    this.render();
    this.$input.val("");
  },
  deleteTodo: function (event) {
    var $remove = $(event.target).closest("li");
    var i = this.$ul.find("li").index($remove);

    this.todo.splice(i, 1);
    this.render();
  },
	setTaskName: function(event){
		var $target = $(event.target).closest("li");
		var i = this.$ul.find("li").index($target);
		console.log("attempt");
		console.log(i);
		 var name =this.todo[i]
		 console.log(name);
		 todoName = name;
	}
};


//start of my to-do project

const tasks = {
  data: [],

  init: function () {
    this.cacheDom();
    this.bindEvents();
		//showTasks();
    //this.showTasks();
  },
  cacheDom: function () {
    this.$el = $("#tasksModule");
    this.$form = this.$el.find("form");
    this.$button = this.$form.find("#btn");
    this.$title = this.$form.find("#title");
    this.$ul = this.$el.find("#tasks");
    this.template = this.$el.find("#tasks-template").html();
    console.log(this.$button);
  },
  bindEvents: function () {
    this.$button.on("click", this.submitDetailsForm.bind(this));
    console.log(this.data);
  },
  submitDetailsForm: function (e) {
    this.$form.on("submit", (e) => {
      e.preventDefault();

      const title = this.$title.val();
      console.log(this.$title.val());
      const desc = document.querySelector("#desc").value;
      console.log(desc);
      const date = document.querySelector("#due-date").value;
			console.log(date);
      const priority = document.querySelector("#priority").checked;
			console.log(priority);
			let prty = 'low'
			if(priority == false){
				prty = 'high';
			}


      task.push(valuesFactory(todoName, title, desc, date, prty));
      this.empty();
      showTasks();
      console.log(task);
    });
    //this.data.push(this.$form.submit());
    console.log(this.data);
  },
  empty: function () {
    this.$form.find("#desc").val("");
    this.$form.find("#title").val("");
    this.$form.find("#due-date").val("");
    document.querySelector("#priority").checked = false;
  },
  // showTasks: function () {
  //   let tasksData = task.filter(function (taskk) {
  //     return taskk.name == todoName;
  //   });
  //   var data = {
  //     tasks: Object.values(tasksData),
  //   };
	// 	console.log("here");
  //   console.log(data.tasks);
  //   //console.log(this.template);
  //   //data.forEach( (item,index)=>this.$ul.html(Mustache.render(this.template,item)) );
	// 	  document.getElementById("testing").innerHTML = "";
  //    data.tasks.forEach(myFunction);
  //   function myFunction (item, index) {
  //     document.getElementById("testing").innerHTML +=
  //       index + ":" + item.name +":"+item.title+" : "+item.desc+" : "+item.date+":"+item.priority+ "<br>";
  //   }
  // }
};

function showTasks(){
	let tasksData = task.filter(function (taskk) {
		return taskk.name == todoName;

	});
	console.log("todoName :"+ todoName);
	var data = {
		tasks: Object.values(tasksData),
	};
	console.log("here");
	console.log(data.tasks);
	//console.log(this.template);
	//data.forEach( (item,index)=>this.$ul.html(Mustache.render(this.template,item)) );
		document.getElementById("testing").innerHTML = "";
	 data.tasks.forEach(myFunction);
	function myFunction (item, index) {
		document.getElementById("testing").innerHTML +=
			index + ":" + item.name +":"+item.title+" : "+item.desc+" : "+item.date+":"+item.priority+ "<br>";
	}
}

window.showTasks = showTasks;

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

window.openForm = openForm;

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

window.closeForm = closeForm;


const valuesFactory = (name, title, desc, date, priority) => {
  return { name, title, desc, date, priority };
};

todo.init();
tasks.init();
