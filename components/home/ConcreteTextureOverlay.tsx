export function ConcreteTextureOverlay() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-concrete-texture.png)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-primary/85"
        aria-hidden="true"
      />
    </>
  );
}
