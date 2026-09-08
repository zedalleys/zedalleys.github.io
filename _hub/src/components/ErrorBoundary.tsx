import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Last-resort fallback so a thrown error (e.g. a full/blocked localStorage
 * quota in markStepComplete) shows a recoverable page instead of a blank
 * screen. Route-level bugs should still be fixed at the source — this only
 * catches what slips through.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Learning Hub crashed:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="page">
          <div className="verify-card verify-card--invalid">
            <h1>Something went wrong</h1>
            <p>This page hit an unexpected error. Reloading usually fixes it.</p>
            <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
