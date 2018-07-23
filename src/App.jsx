import React, { Component } from 'react';
import './App.css';
import workers from './data/workers';
import { Worker, changeSalary } from './utils/Worker';
import WorkersTable from './components/WorkersTable';
import Salary from './components/Salary';

class App extends Component {
  state = {};
  componentDidMount() {
    this.workerArray = workers.map(e => {
      return new Worker(e.firstName, e.lastName, e.salary);
    });
    this.setState({ workers: this.workerArray });
  }
  changeSalaryEvent = delta => {
    changeSalary(this.workerArray, delta);
    this.setState({ workers: this.workerArray });
  };

  render() {
    return (
      <div className="App">
        {this.state.workers ? (
          <WorkersTable workers={this.state.workers} />
        ) : (
          ''
        )}
        <Salary changeSalary={this.changeSalaryEvent} />
      </div>
    );
  }
}

export default App;
