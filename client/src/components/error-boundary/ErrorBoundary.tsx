import React, { Component } from "react";

interface IErrorBoundaryProp {
  children: React.ReactNode;
  errorMsg?: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<
  IErrorBoundaryProp,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProp) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError)
      return <h3>{this.props.errorMsg || "Something went wrong"} </h3>;
    return this.props.children;
  }
}
