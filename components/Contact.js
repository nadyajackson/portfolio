import ContactForm from "./contactForm";

export default function Contact ({contact}) {
    return(
      <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>For work opportunities and pricing estimates please reach out through email or this contact form.</p>
        </div>

        <div className="row" >

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{contact.items[0].fields.location}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{contact.items[0].fields.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{contact.items[0].fields.phoneNumber}</p>
              </div>

              
            </div>

          </div>
      <ContactForm />
  

        </div>

      </div>
      </section>
    )
}