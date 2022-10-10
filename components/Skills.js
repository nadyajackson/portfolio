export default function Skills ({skillsList}) {
    return(
        <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="grid">
            <div className="col-lg-6 resume resume-item">
              <ul >
              {(skillsList.items.map( one =><li key={one.fields.skill} >{one.fields.skill}</li>))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    )
}