import React, { Component } from "react";
// import shortid from "shortid";
import TaskEditor from "./taskEditor/TaskEditor";
import TaskFilter from "./taskFilter/TaskFilter";
import TaskList from "./taskList";

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: "auto",
  marginRight: "auto"
};

const filterTasks = (task, filter) => {};

class App extends Component {
  state = {
    tasks: [],
    filter: ""
  };

  // addTask = e => {
  //   return {};
  // };

  // addTask()

  // changeFilter = e => {
  //   return{};
  // };

  // changeFilter()

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = filterTasks(tasks, filter);
    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpateCompleted={this.updateCompleted}
          onUpdatePriority={this.updatePriority}
        />
      </div>
    );
  }
}

export default App;
