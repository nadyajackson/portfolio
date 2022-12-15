import { useState } from "react";
export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [received, setReceived] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name,
            email,
            message
          }

          fetch('/api/contactRoute', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setName("")
              setEmail("")
              setMessage("")
              setReceived('Message Received')
            }
          })
          
        }    
      return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required
                  onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required
                  onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" required
                onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              </div>
              
                <p style={{backgroundColor: "#90EE90", color: "#ffffff", textAlign: "center"}}>{received}</p>
              <div className="text-center"><button type="submit" onClick={(e)=>{handleSubmit(e)}}>Send Message</button></div>
            </form>
          </div>
      )
  }