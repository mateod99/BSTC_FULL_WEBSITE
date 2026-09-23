import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, SecTitle } from "../components/site";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Boys Travel Teams | BSTC - Brazilian Soccer Training Center" },
      {
        name: "description",
        content:
          "BSTC competitive boys travel teams, U6-U12. Training Monday, Tuesday and Thursday at Highland Oaks Park in Aventura, FL. Roster spots earned at open tryouts.",
      },
    ],
  }),
  component: Travel,
});

function Travel() {
  return (
    <Page>
      <PageHero crumb="Travel Teams" title={<>Boys travel teams</>}>
        <p>
          Competitive soccer for players ready to take on the next step, coached the Brazilian way.
        </p>
      </PageHero>

      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="spec-chips">
            <div className="spec-chip">
              <div className="k">Ages</div>
              <div className="v">U6 - U12</div>
            </div>
            <div className="spec-chip">
              <div className="k">Training</div>
              <div className="v">Mon - Tue - Thu</div>
            </div>
            <div className="spec-chip">
              <div className="k">Location</div>
              <div className="v">Highland Oaks Park</div>
            </div>
            <div className="spec-chip">
              <div className="k">Entry</div>
              <div className="v">Open tryouts</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SecTitle>
            The BSTC <span className="t-green">competitive experience</span>
          </SecTitle>
          <div className="grid-2">
            <div className="card">
              <h3>What travel soccer asks of a player</h3>
              <ul className="check-list ck-green ink" style={{ marginTop: 12 }}>
                <li><span className="ck">✓</span> Three training sessions a week, 5:00-6:30 PM</li>
                <li><span className="ck">✓</span> League matches and tournament play</li>
                <li><span className="ck">✓</span> Commitment to the team across the season</li>
                <li><span className="ck">✓</span> A roster spot earned at tryouts, including returning players</li>
              </ul>
            </div>
            <div className="card">
              <h3>What players get back</h3>
              <p style={{ marginTop: 10 }}>
                Our travel program is where BSTC's mission comes to life: developing, guiding and
                producing young players onto a path to reach their highest potential, with a
                methodology that prizes technique, creativity, individuality, intelligence and
                passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 8l3.4 2.5-1.3 4h-4.2l-1.3-4z" />
                </svg>
              </span>
              <h3>Technical Development</h3>
              <p>First touch, ball mastery and comfort under pressure.</p>
            </div>
            <div className="why-item">
              <span className="why-icon ic-navy" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M4 19V5M4 19h16" />
                  <path d="M7 15l4-4 3 3 5-6" />
                </svg>
              </span>
              <h3>Tactical Development</h3>
              <p>Reading the game, positioning and smart decisions.</p>
            </div>
            <div className="why-item">
              <span className="why-icon ic-yellow" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <path d="M7 4h10v3.5a5 5 0 0 1-10 0z" />
                  <path d="M7 5.5H4.5v1a3.5 3.5 0 0 0 3 3.5M17 5.5h2.5v1a3.5 3.5 0 0 1-3 3.5" />
                  <path d="M12 12.5v3M9 20h6M10 15.5h4l1 4.5H9z" />
                </svg>
              </span>
              <h3>Competitive Play</h3>
              <p>Real matches against strong opponents, every season.</p>
            </div>
            <div className="why-item">
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" strokeWidth="1.6">
                  <circle cx="12" cy="7.5" r="3" />
                  <path d="M6 20c.6-3.4 2.9-5.3 6-5.3s5.4 1.9 6 5.3" />
                </svg>
              </span>
              <h3>Player Character</h3>
              <p>Discipline, resilience and teammates for life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-inner">
          <div>
            <h2>Think your player is ready?</h2>
            <p>Tryouts are free. Registration is required, and every player must attend to earn a roster spot.</p>
          </div>
          <Link to="/tryouts" className="btn btn-yellow">
            Register for Tryouts
          </Link>
        </div>
      </section>
    </Page>
  );
}
