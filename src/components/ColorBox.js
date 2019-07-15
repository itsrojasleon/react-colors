import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './styles/ColorBox.css';

class ColorBox extends React.Component {
  state = {
    copied: false,
  };
  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };
  render() {
    const { background, name, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() < 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard onCopy={this.handleCopy} text={background}>
        <div style={{ background }} className='ColorBox'>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColor ? 'light-color' : undefined}>
                {name}
              </span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark-color'}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && 'dark-color'}`}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
