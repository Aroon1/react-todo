var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the walk son'
        }, {
          id: 2,
          text: 'and then get crackin boy'
        }, {
          id: 3,
          text: 'mail on sunday bruh'
        }, {
          id: 4,
          text: 'Gon get it girl'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
