import { createFileRoute, Link } from "@tanstack/react-router";
import { Brush, Page, SecTitle } from "../components/site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Page>
      <section className="hero">
        <Brush color="green" side="l" />
        <div className="wrap hero-inner">
          <div>
            <h1>
              Developing players.
              <br />
              Building confidence.
              <br />
              <span className="l-green">Inspiring the future.</span>
            </h1>
            <p className="hero-sub">Brazilian soccer training since 1996.</p>
            <div className="chips">
              <span className="chip">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
                  <circle cx="17" cy="9" r="2.4" />
                  <path d="M15.5 14.3c2.3.2 4 1.7 4.5 4.2" />
                </svg>
                Ages 3-16
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 8l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
                  <path d="M12 3.5v4.5M20.1 9.4l-4.7 1.1M17 19.6l-3.7-3.1M7 19.6l3.7-3.1M3.9 9.4l4.7 1.1" />
                </svg>
                Recreational &amp; Competitive
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M12 21s-6.5-5.6-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.4-6.5 10-6.5 10z" />
                  <circle cx="12" cy="11" r="2.4" />
                </svg>
                Aventura, FL
              </span>
            </div>
            <div className="hero-cta">
              <Link to="/programs" className="btn btn-green">
                View Programs
              </Link>
              <Link to="/tryouts" className="btn btn-yellow">
                Register Now
              </Link>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/assets/hero.jpg" alt="Young BSTC players running across the field at golden hour" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecTitle>
            Find the <span className="t-green">right program</span> for your child
          </SecTitle>
          <div className="prog-grid">
            <div className="prog-card pc-green">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 8l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
                </svg>
              </span>
              <h3>Co-ed Recreational</h3>
              <p className="prog-meta">
                Ages 3-13
                <br />
                Beginner - Intermediate
              </p>
              <div className="prog-photo">
                <img src="/assets/coed.jpg" alt="Co-ed recreational players chasing the ball" />
              </div>
              <Link to="/programs" className="btn btn-green">
                Learn More
              </Link>
            </div>
            <div className="prog-card pc-yellow">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M5.5 20c.7-3.8 3.2-5.8 6.5-5.8s5.8 2 6.5 5.8" />
                </svg>
              </span>
              <h3>Girls Recreational</h3>
              <p className="prog-meta">
                Ages 4-13
                <br />
                All Levels
              </p>
              <div className="prog-photo">
                <img src="/assets/girls.jpg" alt="Pink Panthers girls team smiling arm in arm" />
              </div>
              <Link to="/programs" className="btn btn-yellow">
                Learn More
              </Link>
            </div>
            <div className="prog-card pc-navy">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <path d="M7 4h10v3.5a5 5 0 0 1-10 0z" />
                  <path d="M7 5.5H4.5v1a3.5 3.5 0 0 0 3 3.5M17 5.5h2.5v1a3.5 3.5 0 0 1-3 3.5" />
                  <path d="M12 12.5v3M9 20h6M10 15.5h4l1 4.5H9z" />
                </svg>
              </span>
              <h3>Competitive Travel</h3>
              <p className="prog-meta">
                Boys &amp; Girls
                <br />
                Tryout Based
              </p>
              <div className="prog-photo">
                <img src="/assets/cover.jpg" alt="Match ball under the stadium lights" />
              </div>
              <Link to="/travel" className="btn btn-navy">
                Learn More
              </Link>
            </div>
            <div className="prog-card pc-green">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <path d="M12 3.5l4 14h-8z" />
                  <path d="M6 20.5h12" />
                </svg>
              </span>
              <h3>Private Training</h3>
              <p className="prog-meta">
                Individual Development
                <br />
                All Ages
              </p>
              <div className="prog-photo">
                <img src="/assets/private.jpg" alt="Coach running a one-on-one cone drill" />
              </div>
              <Link to="/programs" className="btn btn-green">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="years-band">
        <Brush color="yellow" side="l" />
        <Brush color="green" side="r" />
        <div className="wrap years-inner">
          <div className="years-num">
            30<small>Years of BSTC</small>
          </div>
          <div>
            <p>
              Founded in 1996 by former Brazilian professional player Joao Moraes, BSTC has spent
              three decades developing young players through technical training, creativity and a
              love for the beautiful game.
            </p>
            <Link to="/about" className="btn btn-outline-yellow">
              Our Story
            </Link>
          </div>
          <div className="years-crest">
            <img src="/assets/logo.png" alt="BSTC crest" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecTitle>
            Why <span className="t-green">families</span> choose BSTC
          </SecTitle>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M12 3l7 2.5v5c0 5-3 8.5-7 10.5-4-2-7-5.5-7-10.5v-5z" />
                  <path d="M12 8l1.1 2.3 2.5.3-1.8 1.7.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.7 2.5-.3z" />
                </svg>
              </span>
              <h3>30 Years of Experience</h3>
              <p>Serving South Florida families since 1996.</p>
            </div>
            <div className="why-item">
              <span className="why-icon ic-navy" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="7.5" r="3" />
                  <path d="M6 20c.6-3.4 2.9-5.3 6-5.3s5.4 1.9 6 5.3" />
                  <circle cx="5" cy="9" r="2.2" />
                  <circle cx="19" cy="9" r="2.2" />
                </svg>
              </span>
              <h3>Professional Coaching</h3>
              <p>Experienced coaches focused on player development.</p>
            </div>
            <div className="why-item">
              <span className="why-icon ic-yellow" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 8l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
                </svg>
              </span>
              <h3>Programs for Every Level</h3>
              <p>From a child's first touch to competitive travel soccer.</p>
            </div>
            <div className="why-item">
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M5 6l4-1.5 4 2 5-1 1.5 3-1 4.5-3.5 4-4.5 1.5-4-2.5-2-4z" />
                </svg>
              </span>
              <h3>Brazilian Soccer Philosophy</h3>
              <p>Technique, creativity, confidence and love for the beautiful game.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="duo">
            <div className="panel panel-green">
              <div className="panel-photo">
                <img src="/assets/boots.jpg" alt="Player boots and ball on the grass" />
              </div>
              <div>
                <h3>Fall 2026 Registration</h3>
                <p className="panel-sub">
                  Co-ed &amp; Girls Recreational
                  <br />
                  August 11 - October 29
                </p>
                <ul className="check-list">
                  <li>
                    <span className="ck">✓</span> Ages 3-13 | Monday - Thursday options
                  </li>
                  <li>
                    <span className="ck">✓</span> $420 | Uniform included
                  </li>
                </ul>
                <Link to="/tryouts" className="btn btn-yellow">
                  Register Now
                </Link>
              </div>
            </div>
            <div className="panel panel-pink">
              <div className="panel-photo">
                <img src="/assets/girls.jpg" alt="Pink Panthers girls soccer team" />
              </div>
              <div>
                <h3>Pink Panthers</h3>
                <p className="panel-sub">Girls developing girls.</p>
                <p>
                  Our Pink Panthers program empowers girls to grow as skilled players, confident
                  leaders and teammates on and off the field.
                </p>
                <Link to="/programs" className="btn btn-pink" style={{ marginTop: 14 }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
