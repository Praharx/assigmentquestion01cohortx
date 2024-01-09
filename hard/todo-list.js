/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  
    constructor(){
      this.list = [];
    }
  
    add(task){
      return this.list.push(task);
  
    }
  
    remove(index){
      if(index<this.list.length && index>-1){
        return this.list.splice(index,1);
      }else{
        return 'Index out of range.'
      }
      
    }
  
    update(index,updatedTodo){
      if(index >=0 && index < this.list.length){
        this.list[index]= updatedTodo
      } else{
        return null;
      }
      
    }
  
    getAll(){
      return this.list;
    }
  
    get(indexOfTodo){
      if(indexOfTodo>= 0 && indexOfTodo<this.list.length ){
        return this.list[indexOfTodo];
      }else{
        return null;
      }
      
    }
  
    clear(){
      const length = this.list.length;
      this.list = [];
      return length;
    }
  
  
  

}

module.exports = Todo;
