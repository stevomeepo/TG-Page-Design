const WallOutletIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Outer plate */}
    <rect x="5" y="2" width="14" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="white" />
    
    {/* Inner rectangle for switch/outlet */}
    <rect x="8" y="6" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="white" />
    
    {/* Screw holes */}
    <circle cx="12" cy="4" r="0.75" fill="currentColor" />
    <circle cx="12" cy="20" r="0.75" fill="currentColor" />
  </svg>
);

export default WallOutletIcon;