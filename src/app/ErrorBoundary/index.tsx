import React, { Component, ReactNode } from 'react';

type StateType = {
  hasError: boolean;
};
type PropsType = {
  children: ReactNode;
};

class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: string) {
    return { hasError: true, error };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return !hasError ? children : <h1>Произошла ошибка...</h1>;
  }
}

export default ErrorBoundary;
