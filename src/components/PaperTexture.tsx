export default function PaperTexture() {
  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-[-2]"
        style={{ backgroundColor: '#F5F2EB' }}
      />
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.4] mix-blend-multiply">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="paper-noise">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.04" 
              numOctaves="4" 
              stitchTiles="stitch" 
            />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-noise)" />
        </svg>
      </div>
    </>
  );
}
