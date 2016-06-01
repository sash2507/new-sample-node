'use strict';

angular.module('template')

.controller('MainController', function() { 
  var self = this;
  self.displayTodos = true;
  self.toggleView = function(showTodos) { 
    self.displayTodos = showTodos;
  };
})

.controller('SuperheroController', function(SuperheroListResource, SuperheroAddResource) { 
  var self = this;
  (function getList() {
    SuperheroListResource.get().$promise
    .then(function(response) {
      self.superheros = response.data;
      console.log(response);
    });
  })();
 
  self.addSuperhero = function(superhero) { 
    SuperheroAddResource.add(superhero)
    .then(function(response) {
      self.superhero.profileImage = response.data.profileImage;
      self.superheros.push(superhero);
      self.superhero = {};
    });
  };
})

.controller('TodoController',  function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;
  self.todos = [];
  self.isEditing = false;
  var _editingTodo;

  function getAllTodos() {
    TodoListResource.query().$promise
    .then(function(response) {
      self.todos = response;
    });
  }

  self.addTodo = function(todo) {
    TodoAddResource.addTodo(todo).$promise
    .then(function(response) {
      angular.extend(todo, response);
      self.todos.push(todo);
      self.userTodo = {};
    });
  };

  self.editTodo = function(todo) {
    TodoDetailsResource.get({id: todo._id}).$promise
    .then(function(response) {
      _editingTodo = todo;
      self.isEditing = true;
      self.userTodo = response;
    });
  };

  self.updateTodo = function(todo) {
    TodoUpdateResource.save(todo).$promise
    .then(function(response) {
      angular.extend(_editingTodo, response, todo);
      self.isEditing = false;
      self.userTodo = {};
    });
  };

  self.cancelUpdate = function() {
    self.userTodo = {};
    self.isEditing = false;
  };

  self.clearImage = function() {
    self.userTodo.todoImage = null;
  };

  getAllTodos();
})
