import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FAQ = ({ question, answer }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false)
  return (
    <article className="faq" onClick={() => setIsAnswerOpen((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq_icon">
          {isAnswerOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerOpen && <p>{answer}</p>}
    </article>
  )
}

export default FAQ
