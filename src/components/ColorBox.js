import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className='see-more'>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
