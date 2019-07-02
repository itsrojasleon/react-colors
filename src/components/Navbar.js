import React, { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

class Navbar extends Component {
  state = { format: 'hex' };

  handleChange = e => {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  };

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='/'>ReactColorPicker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
export default Navbar;
