const WallOutletIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Outer plate */}
    <rect x="4" y="2" width="16" height="20" rx="1" fill="white" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Inner rectangle for switch/outlet */}
    <rect x="8" y="7" width="8" height="10" rx="0.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Screw holes */}
    <circle cx="6" cy="4" r="0.75" fill="currentColor" />
    <circle cx="18" cy="4" r="0.75" fill="currentColor" />
    <circle cx="6" cy="20" r="0.75" fill="currentColor" />
    <circle cx="18" cy="20" r="0.75" fill="currentColor" />
  </svg>
);

export default WallOutletIcon;