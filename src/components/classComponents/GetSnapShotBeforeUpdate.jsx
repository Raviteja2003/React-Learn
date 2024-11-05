import React from "react";
/*
    getSnapShotBeforeUpdate : It is a method in react life cycle methods in the updating phase that captures some information from the DOM before changes are applied.
                              This snapshot is useful in cases when you need to preserve certain properties of DOM like scroll position.


                              Return value : Whatever is returned will be passed to third argument to componentDidUpdate.

                              Arguments : 
                                            prevProps : The previous props before update 
                                            prevState : The previous state before update

                             Syntax : 
                                      getSnapShotBeforeUpdate(prevProps,prevState)
                                      {
                                        return someValue; //will be paased as third argument to componentDidUpdate();
                                      }
*/

class NumberList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        numbers: [1, 2, 3, 4, 5],
      };
      this.listRef = React.createRef(); // Reference to the list DOM element
    }
  
    componentDidMount() {
      // Adding a new number every second
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          numbers: [...prevState.numbers, prevState.numbers.length + 1],
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // Check if a new number is added
      if (prevState.numbers.length < this.state.numbers.length) {
        const list = this.listRef.current;
        // Calculate the scroll position before the update
        return list.scrollHeight - list.scrollTop;
      }
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // If there's a snapshot, adjust scroll position
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
  
    render() {
      return (
        <div
          ref={this.listRef}
          style={{
            height: "100px",
            overflowY: "auto",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          {this.state.numbers.map((num) => (
            <p key={num}>{num}</p>
          ))}
        </div>
      );
    }
  }
  
  export default NumberList;

