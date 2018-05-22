import React, { Component } from 'react';

const withAPI = WrappedComponent => {
  class WithAPI extends Component {
    state = {
      posts: []
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          posts: ['one post from API', 'second post from API']
        });
      }, 1000);
    }

    render() {
      return <WrappedComponent posts={this.state.posts} {...this.props} />;
    }
  }

  return WithAPI;
};

export default withAPI;
