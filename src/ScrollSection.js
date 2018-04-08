import React from 'react';

const ScrollSection = React.createClass({
  render() {
    let pageId = this.props.pageId;

    let onepageStyle = {
      width: '100%',
      height: '100%',
    };

    let style = Object.assign({}, onepageStyle, this.props.style)
    return (
      <div style={style}>{this.props.children}</div>
    );
  },
});

export default ScrollSection;
