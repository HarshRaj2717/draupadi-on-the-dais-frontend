export default function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(women_bg.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              The last panel you were on was probably missing a woman.
            </h1>
            <p className="mb-5">
              Find women experts available for speaking opportunities at your
              leadership-level panel discussions.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
