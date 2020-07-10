import React, {Component} from "react";
class Modal extends Component {
  constructor(props) {
    super(props);
    const {display} = this.props;
    this.state = {
      open: false || display,
      internalClose : false 
    };
  
  }

  displayModal(){
    const {children} = this.props;
    return (<>
      {children}
    </>);
  }

  isModalClosed(){
    const {open} = this.state;
    return !open; 
  }

  afterInternallyClosed(){
    return  this.state.internalClose;
  }

  componentDidUpdate(prevProps){
    const {display} = this.props;
    if(display && !prevProps.display){
      return this.setState({
        open : true
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