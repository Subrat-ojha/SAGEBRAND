import ContactForm from './contact-form';

const services = [
  { title: 'Websites', detail: 'Fast, thoughtful sites that turn attention into action.', tone: 'yellow', icon: 'browser' },
  { title: 'Mobile Apps', detail: 'Useful mobile products made for everyday momentum.', tone: 'peach', icon: 'phone' },
  { title: 'Custom Software', detail: 'Focused tools shaped around how your business works.', tone: 'peach', icon: 'blocks' },
  { title: 'AI Automation', detail: 'Practical AI that removes repetitive work.', tone: 'sage', icon: 'spark' },
];

function ServiceMark({ type }: { type: string }) {
  return <span className={`service-mark service-mark--${type}`} aria-hidden="true"><span /><i /><b /></span>;
}

export default function Home() {
  return (
    <main>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Sage Labs home">Sage Labs<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="button button--primary" href="#contact">Start a project <span className="arrow-icon" aria-hidden="true" /></a>
      </header>

      <section className="project-board" id="top" aria-labelledby="hero-title">
        <div className="hero-panel">
          <h1 id="hero-title">From first sketch to working product.</h1>
          <p>One dependable team for websites, mobile apps, custom software, and useful AI.</p>
          <a className="button button--outline" href="#services">Explore our services <span className="arrow-icon arrow-icon--down" aria-hidden="true" /></a>
          <span className="marker-note" aria-hidden="true">Built together.</span>
          <div className="idea-line" aria-hidden="true"><span className="idea-dot" /><span className="idea-path" /><span className="idea-star" /></div>
        </div>

        <div className="service-grid" id="services">
          <span className="service-route" aria-hidden="true"><i /><b /><em /></span>
          {services.map((service) => (
            <article className={`service-panel service-panel--${service.tone}`} key={service.title}>
              <ServiceMark type={service.icon} />
              <div><h2>{service.title}</h2><p>{service.detail}</p></div>
              <a href="#contact" aria-label={`Discuss a ${service.title} project`}><span className="arrow-icon" aria-hidden="true" /></a>
            </article>
          ))}
        </div>

        <div className="process-strip" id="process" aria-label="Our delivery process">
          <div className="process-intro"><strong>Clear from day one.</strong><span>No mystery. No hand-offs into the void.</span></div>
          <ol>
            <li><span>Brief</span><small>Align on the real problem</small></li><li aria-hidden="true" className="process-arrow" />
            <li><span>Build</span><small>Work in visible, useful steps</small></li><li aria-hidden="true" className="process-arrow" />
            <li><span>Launch</span><small>Ship, learn, and improve</small></li>
          </ol>
        </div>
      </section>

      <section className="intro-section" id="about">
        <p>Small core team. The right specialists when the project needs them.</p>
        <h2>Technology should make your next move possible—not more complicated.</h2>
      </section>

      <section className="principles-board" aria-label="Why work with Sage Labs">
        <article><span className="panel-glyph panel-glyph--orbit" aria-hidden="true" /><h2>One accountable team</h2><p>You work with a focused core team from first conversation through launch.</p></article>
        <article><span className="panel-glyph panel-glyph--arrow" aria-hidden="true" /><h2>Specialists when useful</h2><p>We bring in trusted specialists only when your project genuinely needs them.</p></article>
        <article><span className="panel-glyph panel-glyph--spark" aria-hidden="true" /><h2>Progress you can see</h2><p>Short build cycles, clear decisions, and useful work you can review early.</p></article>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading"><h2>Work is taking shape.</h2><p>Sage Labs is new, so we will not pretend example engagements are finished client case studies. These are the kinds of problems we are ready to solve.</p></div>
        <div className="work-list">
          <article><small>Example engagement</small><h3>Launch a new business online</h3><p>Positioning, website, enquiry flow, analytics, and a foundation that can grow.</p></article>
          <article><small>Example engagement</small><h3>Replace a manual operation</h3><p>A focused internal tool shaped around the team’s actual workflow.</p></article>
          <article><small>Example engagement</small><h3>Automate repetitive work</h3><p>A practical AI workflow with human review where judgment still matters.</p></article>
          <a className="button button--outline" href="#contact">Request a relevant example <span className="arrow-icon" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <h2>Bring us the rough idea.</h2>
          <p>You do not need a finished specification. Tell us what you want to improve, launch, or automate, and we’ll help define the right first step.</p>
          <span className="consult-link">Free consultation booking will activate when your business email or calendar is connected.</span>
          <small>This preview does not transmit enquiries. Add your verified business email before public launch.</small>
        </div>
        <ContactForm />
      </section>

      <footer><a className="wordmark" href="#top">Sage Labs<span>.</span></a><p>Websites · Mobile apps · Software · AI</p><a href="#contact">Contact setup pending</a></footer>
    </main>
  );
}
