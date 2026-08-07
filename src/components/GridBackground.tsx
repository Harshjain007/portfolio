/** Fixed grid + ambient glow orbs sitting behind all content. */
export default function GridBackground() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="grid-orb grid-orb--a" aria-hidden="true" />
      <div className="grid-orb grid-orb--b" aria-hidden="true" />
    </>
  );
}
