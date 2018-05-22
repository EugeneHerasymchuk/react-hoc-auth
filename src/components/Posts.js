import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withLogger from '../hoc/withLogger';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        These are posts
        {JSON.stringify(posts)}
      </div>
    );
  }
}

export default withLogger(Posts);
