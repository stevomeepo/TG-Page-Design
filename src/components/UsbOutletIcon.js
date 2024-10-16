const UsbOutletIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer plate */}
      <rect x="5" y="2" width="14" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="white" />
      
      {/* Left side - regular outlet */}
      <rect x="8" y="7" width="2" height="4" rx="0.5" fill="currentColor" />
      <rect x="8" y="13" width="2" height="4" rx="0.5" fill="currentColor" />
      
      {/* Right side - USB ports */}
      <rect x="14" y="6" width="2" height="3" rx="0.5" fill="currentColor" />
      <rect x="14" y="10.5" width="2" height="3" rx="0.5" fill="currentColor" />
      <rect x="14" y="15" width="2" height="3" rx="0.5" fill="currentColor" />
      
      {/* Screw holes */}
      <circle cx="12" cy="4" r="0.75" fill="currentColor" />
      <circle cx="12" cy="20" r="0.75" fill="currentColor" />
    </svg>
  );
  
  export default UsbOutletIcon;