import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, SecTitle } from "../components/site";

export const Route = createFileRoute("/tryouts")({
  head: () => ({
    meta: [
      { title: "Tryouts & Registration | BSTC - Brazilian Soccer Training Center" },
      {
        name: "description",
        content:
          "Ready for the next level? Register for BSTC tryouts and programs. Free tryouts at Highland Oaks Park, Aventura, FL. All players must register and sign the waiver.",
      },
    ],
  }),
  component: Tryouts,
});

function Tryouts() {
  return (
    <Page>
      <PageHero crumb="Tryouts" title={<>Ready for the <span className="l-yellow">next level?</span></>}>
        <p>
          Every BSTC player gets the opportunity to earn a place in our programs. Two steps get
          your player on the field.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="duo">
            <div className="panel panel-green single">
              <div>
                <h3>Register for Tryouts</h3>
                <p className="panel-sub">Step 1 - Required for every player</p>
                <ul className="check-list">
                  <li><span className="ck">✓</span> Tryouts are free, registration is required</li>
                  <li><span className="ck">✓</span> All players attend, including returning team members</li>
                  <li><span className="ck">✓</span> Held at Highland Oaks Park, Aventura</li>
                </ul>
                <p style={{ marginBottom: 14 }}>
                  Call <a href="tel:+17865227577" style={{ color: "#fff", fontWeight: 600 }}>786.522.7577</a>{" "}
                  or email{" "}
                  <a href="mailto:info@bstcsoccer.com" style={{ color: "#fff", fontWeight: 600 }}>
                    info@bstcsoccer.com
                  </a>{" "}
                  for the current registration link and tryout dates.
                </p>
                <a className="btn btn-yellow" href="mailto:info@bstcsoccer.com?subject=Tryout%20Registration">
                  Request Registration Info
                </a>
              </div>
            </div>
            <div className="panel panel-navy single">
              <div>
                <h3>Complete the Player Waiver</h3>
                <p className="panel-sub">Step 2 - Before stepping on the field</p>
                <p style={{ marginBottom: 16 }}>
                  Every player needs a signed waiver on file before participating in any BSTC
                  session. Contact us and we'll send the current waiver form to complete.
                </p>
                <Link to="/contact" className="btn btn-outline-yellow">
                  Get the Waiver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SecTitle sub="Coaches look for more than goals. Here is what stands out on the day.">
            What makes a <span className="t-green">strong tryout?</span>
          </SecTitle>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 8l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
                </svg>
              </span>
              <h3>Comfort on the Ball</h3>
              <p>Confidence in the first touch and willingness to try things.</p>
            </div>
            <div className="why-item">
              <span className="why-icon ic-navy" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="7.5" r="3" />
                  <path d="M6 20c.6-3.4 2.9-5.3 6-5.3s5.4 1.9 6 5.3" />
                </svg>
              </span>
              <h3>Attitude</h3>
              <p>Effort, coachability and respect for teammates.</p>
            </div>
            <div className="why-item">
              <span className="why-icon ic-yellow" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M4 19V5M4 19h16" />
                  <path d="M7 15l4-4 3 3 5-6" />
                </svg>
              </span>
              <h3>Game Sense</h3>
              <p>Movement off the ball and awareness of space.</p>
            </div>
            <div className="why-item">
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M12 3l7 2.5v5c0 5-3 8.5-7 10.5-4-2-7-5.5-7-10.5v-5z" />
                </svg>
              </span>
              <h3>Competitive Spirit</h3>
              <p>Playing hard from the first whistle to the last.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecTitle>
            Find the <span className="t-green">right fit</span>
          </SecTitle>
          <div className="grid-3">
            <div className="card">
              <h3>New to soccer?</h3>
              <p>Start with After-School Soccer: fun-first training for ages 3-13.</p>
              <Link to="/programs" className="card-link">
                After-School Soccer
              </Link>
            </div>
            <div className="card" style={{ borderTopColor: "var(--pink)" }}>
              <h3>Girls who love the game</h3>
              <p>The Pink Panthers build skill and confidence in a supportive environment.</p>
              <Link to="/programs" className="card-link">
                Pink Panthers
              </Link>
            </div>
            <div className="card" style={{ borderTopColor: "var(--navy)" }}>
              <h3>Ready to compete?</h3>
              <p>Boys travel teams, U6-U12, train three days a week and compete year-round.</p>
              <Link to="/travel" className="card-link">
                Travel Teams
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band yellow">
        <div className="wrap cta-inner">
          <div>
            <h2>Questions about tryouts?</h2>
            <p>We're happy to help you find the right program for your player.</p>
          </div>
          <Link to="/contact" className="btn btn-navy">
            Contact Us
          </Link>
        </div>
      </section>
    </Page>
  );
}
