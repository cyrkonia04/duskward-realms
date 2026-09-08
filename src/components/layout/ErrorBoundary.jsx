import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('A page collapsed:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="pt-16 pb-24 text-center">
          <h1 className="text-3xl mb-4">The mists thicken...</h1>
          <p className="max-w-md mx-auto font-body text-gothic-parchment/70 text-sm leading-relaxed mb-6">
            Something here has fallen out of the world. The rest of the realms
            remain intact, check the console if you are one of the weavers.
          </p>
          <a href="/" className="font-body text-gothic-bronze underline">
            Return to safer paths
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}