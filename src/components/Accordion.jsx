import { useState } from "react"

const Accordion = ({ title, children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="accordionContainer">
      <button onClick={toggleAccordion} className="accordionButton">
        {title}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="accordionContent">
          {children}
        </div>
      )}
    </div>
  )
}

export default Accordion