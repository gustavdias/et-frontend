import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//There are 2 components in this file
//The Exercise is a functional component (lack of state and lifecycle methods)
//If all you need to do is to accept props and return JSX, you use functional components
const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    {/* substring(0,10) Date shows date+time+timezone, (0,10) cuts time and timezone */}
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
      {/* <Button onClick={() => { props.deleteExercise(props.exercise._id) }}>delete </Button> */}
      {/* after you should change this into a button and style it as a link <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a> */}
    </td>
  </tr>
);
//This is a class component (it has a lifecycle methods and the state)
export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
      backendAddress:
        "https://et-exercise-tracker.herokuapp.com" ,
    };
  }

  componentDidMount() {
    axios
      .get(this.state.backendAddress + "/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios
      .delete(this.state.backendAddress + "/exercises/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
      //_id comes from the MongoDB id format, filter returns only ids that are different from those you deleted
    });
  }

  exerciseList() {
    //for every element called current exercise it's going to return a Exercise component that it is a row of a table
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
