import * as React from 'react';
class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  deleteList(e) {
    e.target.parentElement.parentElement.remove();
    }
  
  handleInput(event) {
    this.setState({
      userInput: event.target.value
    })
  }
  handleSubmit() {
      if(this.state.userInput) {
        this.state.toDoList.push(this.state.userInput)
        this.setState(state => ({
        toDoList: state.toDoList,
        userInput: ''
      }));
      }
  }
  render() {
    const items = this.state.toDoList.map((tditem, index) => <li key={index}><span onClick={this.deleteList}><i className="fas fa-trash-alt"></i></span>{tditem}</li>) ;
    return (
      <div>
        <h1>My To-Do-List</h1>
        <label htmlFor='todo'>Add the tasks in below form</label>
        <input id='todo' onChange={this.handleInput}/>
        <button onClick={this.handleSubmit}>Add</button>
        <ol>{items}</ol>
      </div>
    )
  }
}

export default MyToDoList;