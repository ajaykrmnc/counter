import React, { Children, Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    childern: 4,
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () =>
  {
      const counters= this.state.counters.map( c => {
          c.value=0;
          return c;

      });
      this.setState({ counters })
  }

  handleIncrement = counter =>
  {
      const counters = [...this.state.counters];
      const index =counters.indexOf(counter);
      counters[index]= {...counter};
      counters[index].value++;
      this.setState({counters});

  }
  handleAdd = () =>
  {
    
     const newcounter={ id: this.state.childern,  value: 0};
     this.changenum();
     const counters=[
         ...this.state.counters,
         newcounter

     ]
     this.setState({counters});
      
  }
  changenum = () =>
  {
      const childern= this.state.childern
      this.setState({
          childern: childern+1
      })


  }


  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
    
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            onIncrement={this.handleIncrement}

          />
          
        ))}
        <button onClick={this.handleAdd} className ="btn btn-primary btn-sm m-2">Addnew</button>
      </div>
    );
  }
}

export default Counters;
