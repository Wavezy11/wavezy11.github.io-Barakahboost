import React from 'react'

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <div 
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full animate-orb-drift"
        style={{ 
          background: 'radial-gradient(circle, rgba(45,125,111,0.15) 0%, transparent 70%)' 
        }} 
      />
      <div 
        className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] rounded-full animate-orb-drift"
        style={{ 
          background: 'radial-gradient(circle, rgba(10,61,53,0.22) 0%, transparent 70%)',
          animationDelay: '-5s'
        }} 
      />
      <div 
        className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full animate-orb-drift"
        style={{ 
          background: 'radial-gradient(circle, rgba(168,197,184,0.08) 0%, transparent 70%)',
          animationDelay: '-10s'
        }} 
      />
    </div>
  )
}
