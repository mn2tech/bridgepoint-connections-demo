/** Server-rendered splash — visible before JS hydrates. */
export function SplashMarkup() {
  return (
    <div
      id="site-splash"
      className="site-splash"
      role="status"
      aria-live="polite"
      aria-label="Bridgepoint Connections is loading"
    >
      <div className="site-splash__grid" aria-hidden />
      <div className="site-splash__glow" aria-hidden />
      <div className="site-splash__content">
        <p className="site-splash__brand">Bridgepoint</p>
        <span className="site-splash__mark">Connections</span>
        <p className="site-splash__tagline">Faith, work, and community</p>
        <div className="site-splash__bar" aria-hidden>
          <div className="site-splash__bar-fill" />
        </div>
      </div>
    </div>
  );
}
