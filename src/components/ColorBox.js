import React from 'react';
import './styles/ColorBox.css';

class ColorBox extends React.Component {
  render() {
    const { background, name } = this.props;
    return (
      <div style={{ background, name }} className='ColorBox'>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button' />
        </div>
        <span className='see-more'>More</span>
      </div>
    );
  }
}
export default ColorBox;
