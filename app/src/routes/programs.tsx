import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, SecTitle } from "../components/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | BSTC - Brazilian Soccer Training Center" },
      {
        name: "description",
        content:
          "A place for every player to grow: after-school soccer, the Pink Panthers girls program, player development and private training at BSTC in Aventura, FL.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <Page>
      <PageHero crumb="Programs" title={<>A place for every player to grow.</>}>
        <p>
          From a child's first experience with soccer to purpose-built development, BSTC's programs
          are for ages 3-16, with training designed to build skills, confidence, creativity and a
          love for the game.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="prog-grid cols-2">
            <div className="prog-card pc-green" id="after-school">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 8l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
                </svg>
              </span>
              <h3>After-School Soccer</h3>
              <p className="prog-meta">Ages 3-13 - Beginner to Intermediate</p>
              <div className="prog-photo">
                <img src="/assets/coed.jpg" alt="Boys and girls chasing the ball at after-school practice" />
              </div>
              <div className="prog-body">
                <ul className="check-list ck-green ink">
                  <li><span className="ck">✓</span> Fun-first introduction to the game</li>
                  <li><span className="ck">✓</span> Small groups organized by age</li>
                  <li><span className="ck">✓</span> Monday - Thursday afternoon options</li>
                  <li><span className="ck">✓</span> Boys and girls train together</li>
                </ul>
              </div>
              <Link to="/tryouts" className="btn btn-green">
                Register for Fall
              </Link>
            </div>

            <div className="prog-card pc-pink" id="girls">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M5.5 20c.7-3.8 3.2-5.8 6.5-5.8s5.8 2 6.5 5.8" />
                </svg>
              </span>
              <h3>Pink Panthers</h3>
              <p className="prog-meta">Girls Soccer - Ages 4-13 - All Levels</p>
              <div className="prog-photo">
                <img src="/assets/girls.jpg" alt="Pink Panthers girls in pink jerseys" />
              </div>
              <div className="prog-body">
                <p>
                  Girls developing girls. Founded in 2011, the Pink Panthers develop each player
                  individually, considering her physical, mental and emotional characteristics, in
                  a supportive environment where young female athletes thrive.
                </p>
              </div>
              <Link to="/tryouts" className="btn btn-pink">
                Join the Panthers
              </Link>
            </div>

            <div className="prog-card pc-navy" id="development">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <path d="M4 19V5M4 19h16" />
                  <path d="M7 15l4-4 3 3 5-6" />
                </svg>
              </span>
              <h3>Player Development Training</h3>
              <p className="prog-meta">For players ready for more</p>
              <div className="prog-photo">
                <img src="/assets/cover.jpg" alt="Match ball under dramatic stadium light" />
              </div>
              <div className="prog-body">
                <p>
                  Structured technical training for players who want to push beyond recreational
                  soccer: first touch, ball mastery, decision making and game intelligence, taught
                  the Brazilian way. The pathway to our competitive travel teams.
                </p>
              </div>
              <Link to="/travel" className="btn btn-navy">
                Explore the Pathway
              </Link>
            </div>

            <div className="prog-card pc-green" id="private">
              <span className="prog-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.7">
                  <path d="M12 3.5l4 14h-8z" />
                  <path d="M6 20.5h12" />
                </svg>
              </span>
              <h3>Private &amp; Small Group Training</h3>
              <p className="prog-meta">Individual Development - All Ages</p>
              <div className="prog-photo">
                <img src="/assets/private.jpg" alt="One-on-one cone drill with a BSTC coach" />
              </div>
              <div className="prog-body">
                <p>
                  Individualized sessions built around the player: one-on-one or small groups,
                  scheduled around your family, focused on the specific parts of the game your
                  player wants to grow.
                </p>
              </div>
              <Link to="/contact" className="btn btn-green">
                Ask About Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="wrap">
          <SecTitle sub="The same standard across every program, from the first touch to the final whistle.">
            Every session, <span className="t-green">every player</span>
          </SecTitle>
          <div className="spec-chips">
            <div className="spec-chip">
              <div className="k">Coaching</div>
              <div className="v">Professional staff</div>
            </div>
            <div className="spec-chip">
              <div className="k">Methodology</div>
              <div className="v">Brazilian training</div>
            </div>
            <div className="spec-chip">
              <div className="k">Home field</div>
              <div className="v">Highland Oaks Park</div>
            </div>
            <div className="spec-chip">
              <div className="k">Pathway</div>
              <div className="v">Rec to travel</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band green">
        <div className="wrap cta-inner">
          <div>
            <h2>Fall 2026 registration is open</h2>
            <p>August 11 - October 29 - Ages 3-13 - $420 with uniform included. Spots fill by age group.</p>
          </div>
          <Link to="/tryouts" className="btn btn-yellow">
            Register Now
          </Link>
        </div>
      </section>
    </Page>
  );
}
