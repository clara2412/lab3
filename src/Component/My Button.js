import * as React from "react";

// class MyButton extends React.Component {
    // render() {
    //     return <button>{this.props.children}</button>
    // }

//     render(){
//         const {disabled, text } = this.props;
//         return <button disabled={disabled}>{text}</button>
//     }
// }

// -----Exercise 1.3 ------
    const MyButton =({disabled, text}) => (
        <button disabled={disabled} > {text}</button>
    );
    MyButton.defaultProps = {
        text:"My Button",
        disabled: false,
    }
export default MyButton;