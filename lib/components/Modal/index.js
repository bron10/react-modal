import React, {Component} from "react";
import "./style.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    const {display} = this.props;
    this.state = {
      open: false || display,
      internalClose : false,
    };
  }

  displayModal(){
    const {children} = this.props;
    return (
      <>
        <div className="modalParent" />
        <div tabIndex="-1" className="modal">
          {React.Children.map(children, (element, idx) => {
            return React.cloneElement(element, { ref: `node-${idx}` });
          })}
        </div>
      </>
  );
  }

  isModalClosed(){
    const {open} = this.state;
    return !open; 
  }

  afterInternallyClosed(){
    return  this.state.internalClose;
  }

  findFocussableElem(){
    const elementValues = Object.values(this.refs)
    // console.log("elementValues", elementValues);
    if(!elementValues.length){
      return null
    }
    let focussableElement;
    elementValues.find((node) => {
      focussableElement = [].slice.call(node.querySelectorAll("*"), 0).find((elem) => {
        const nodeName = elem.nodeName.toLowerCase();
        return nodeName=='input' && !elem.disabled;
      });
      return !!focussableElement;
    })
    return focussableElement;
  }


  componentDidUpdate(prevProps){
    const {display, children} = this.props;
    
    const focussableElem = this.findFocussableElem();
    if(focussableElem){
      focussableElem.focus();
    }
    if(display && !prevProps.display){
      return this.setState({
        open : true,
      })
    }else if(!display && prevProps.display){
      return this.setState({
        open : false
      })
    }
  }

  render() {
    const {open} = this.state;
    return (
      open
      ? this.displayModal()
      : null 
    );
  }
}

export default Modal;