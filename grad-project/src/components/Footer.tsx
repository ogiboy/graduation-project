import React from 'react'

const Footer: React.FC = () => {

  const year: number = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="ba-logo-small">
        <img src="bilgeadam-technologies-logo.png" alt="bilge-adam-logo" />
      </div>
      <div>
        Copyright © {year} All Rights Reserved by BilgeAdam Academy Students
      </div>
    </footer>
  )
}

export default Footer
