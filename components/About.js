export default function About ({sum}) {
    return(
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>Professional Summary</h2>
              <p>{sum.items[0].fields.summary}</p>
            </div>
          </div>
        </section>
    )
}
