import React, { Component } from 'react';

const withLogger = WrappedComponent => {
  class WithLogger extends Component {
    componentWillMount() {
      console.log(this.props, WrappedComponent.name);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogger.displayName = `LogProps(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return WithLogger;
};

export default withLogger;
