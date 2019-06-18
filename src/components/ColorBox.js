import React from 'react';
import './styles/ColorBox.css';

class ColorBox extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className='ColorBox'
      >
        <span />
      </div>
    );
  }
}
export default ColorBox;
