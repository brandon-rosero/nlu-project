import React, { useState } from 'react'
import "../css/quote.css"

const Quote = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState()
    const [capability, setCapability] = useState('design')
    const [comment, setComment] = useState()
    const [isChecked, setIsChecked] = useState(false);

    let quote;

    const createQuote = () => {
        fetch('http://localhost:8000/quote', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',  
            },
            body: JSON.stringify(quote)

        })
    }

    const handleSubmit = (e) => {
        quote = {name: name, email: email, capability: capability, comment: comment, newsletter: isChecked}
        e.preventDefault()
        createQuote()
        alert("Submitted")

    }
  
    return (
    <div className='quote-container'>
        <form onSubmit={handleSubmit}>
            <h2>Get a quote</h2>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <select value={capability} onChange={e => setCapability(e.target.value)}>
                <option value="design">Design</option>
                <option value="production">Production</option>
                <option value="certification">Certification</option>
            </select>
            <textarea placeholder="Comments" value={comment} onChange={e => setComment(e.target.value)}/>
            <label>
                <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
                I'd like to receive the newsletter
            </label>
            <button type="submit">Get a quote</button>
        </form>
    </div>
  )
}

export default Quote