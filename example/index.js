import React, {Component} from "react";
import ReactDOM from "react-dom";
import Modal from '../lib';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  closeModal(){
    this.setState({
      show : false
    })
  }

  openModal(){
    this.setState({
      show : true
    })
  }

  render() {
    const {show} = this.state;
    return (
    <>
      <button onClick= {this.openModal}>Open Modal</button>
      <Modal display={show}>
        <div onClick={this.closeModal}>[x]</div>
        <div>Hello {this.props.name}, click on above [x] to close it</div>
      </Modal>
    </>)
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Bro" />, mountNode);