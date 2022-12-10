export default function Resume ({contact, JobList, edu}) {
    return(
        <section id="resume" className="resume section-bg"> 
        <div className="container">

          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Contact</h3>
              <div className="resume-item pb-0">
                <h4>{contact.items[0].fields.name}</h4>
                <ul>
                  <li>{contact.items[0].fields.location}</li>
                  <li>{contact.items[0].fields.phoneNumber}</li>
                  <li>{contact.items[0].fields.email}</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              {edu.items.map(one =>
                    <div key={one.fields.what}className="resume-item">
                      <h4>{one.fields.where}</h4>
                      <h5>{one.fields.when}</h5>
                      <p>{one.fields.what}</p>
                    </div>)}
          
            </div>
            <div className="col-lg-6" >
              <h3 className="resume-title">Professional Experience</h3>
              {JobList.items.map(one =>
                <div key={one.fields.title}className="resume-item">
                  <h4>{one.fields.title}</h4>
                  <h5>{one.fields.when}</h5>
                  <p><em>{one.fields.where} </em></p>
                  <ul>
                    <li>{one.fields.what1}</li>
                    <li>{one.fields.what2}</li>
                    <li>{one.fields.what3}</li>
                  </ul>
                </div>
              )}
          </div>
        </div>
        </div>
      </section>
    )
}