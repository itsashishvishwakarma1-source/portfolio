export default function PaperTexture() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-2] bg-white">
      <div 
        className="absolute inset-0 opacity-50"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #818cf8 1px, transparent 1px),
            linear-gradient(to bottom, #818cf8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
