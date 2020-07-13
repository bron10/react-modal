import React, {Component} from "react";
import ReactDOM from "react-dom";
import Modal from '../lib';

class HelloMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showForm : false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openFormModal = this.openFormModal.bind(this);
  }
  
  closeModal(){
    this.setState({
      show : false,
      showForm : false
    })
  }

  openModal(){
    this.setState({
      show : true,
    })
  }
  
  openFormModal(){
    this.setState({
      showForm : true
    })
  }

  render() {
    const {show, showForm} = this.state;
    return (
    <>
      <button onClick= {this.openModal}>Open Modal</button>
      <button onClick = {this.openFormModal}>Open form modal</button>
      <Modal display={show}>
        <h2>Modal Window</h2>
        <div className="content">
          Hello everyone
        </div>
        <div className="actions">
          <button onClick={this.closeModal} className="toggle-button">
            close
          </button>
        </div>
      </Modal>
      <Modal display={showForm}>
        <h2>Modal Form Window</h2>
        <div className="content">
          <form>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" defaultValue="" tabIndex="0"/><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" defaultValue="" /><br />
          </form> 
        </div>
        <div className="actions">
          <button onClick={this.closeModal} className="toggle-button">
            close
          </button>
        </div>
      </Modal>
    </>)
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Bro" />, mountNode);