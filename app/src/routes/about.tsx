import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, SecTitle } from "../components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BSTC | Brazilian Soccer Training Center - Aventura, FL" },
      {
        name: "description",
        content:
          "Since 1996, BSTC has developed young soccer players through professional training, positive coaching and a love for the game. Meet the club and its values.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { name: "Integrity", text: "We do the right thing, on and off the field." },
  { name: "Respect", text: "We treat every player, family and opponent with respect." },
  { name: "Excellence", text: "We strive to be our best in everything we do." },
  { name: "Passion", text: "We play and coach with genuine love for the game." },
  { name: "Teamwork", text: "We believe good things happen when we work together." },
];

function About() {
  return (
    <Page>
      <PageHero
        crumb="About"
        title={
          <>
            Developing players.
            <br />
            Building character.
            <br />
            <span className="l-green">Inspiring the future.</span>
          </>
        }
      >
        <p>
          Since 1996, BSTC has been dedicated to developing young soccer players through
          professional training, positive coaching and a love for the game.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <SecTitle>
                More than soccer. <span className="t-green">A foundation for life.</span>
              </SecTitle>
              <p style={{ color: "var(--muted)", maxWidth: "60ch" }}>
                Our mission is to develop, guide and produce young players since 1996 by combining
                technical training, character building and meaningful life lessons. We strive to
                create a supportive environment where players grow on and off the field.
              </p>
            </div>
            <div className="hero-photo">
              <img
                src="/assets/team-sunset.jpg"
                alt="BSTC players running across the field together at sunset"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SecTitle>
            BSTC <span className="t-green">by the numbers</span>
          </SecTitle>
          <div className="numbers-grid">
            <div className="number-item">
              <div className="num">30</div>
              <div className="lbl">Years of Excellence</div>
              <p>Training South Florida players since 1996.</p>
            </div>
            <div className="number-item">
              <div className="num">1000s</div>
              <div className="lbl">Players Developed</div>
              <p>Across recreational and competitive programs.</p>
            </div>
            <div className="number-item">
              <div className="num">U6-U15</div>
              <div className="lbl">Age Groups</div>
              <p>A pathway for every stage of the game.</p>
            </div>
            <div className="number-item">
              <div className="num">1</div>
              <div className="lbl">Home Field</div>
              <p>Highland Oaks Park, Aventura, Florida.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecTitle>
            Our <span className="t-green">core values</span>
          </SecTitle>
          <div className="why-grid cols-5">
            {VALUES.map((v, i) => (
              <div className="why-item" key={v.name}>
                <span
                  className={`why-icon${i % 3 === 1 ? " ic-navy" : i % 3 === 2 ? " ic-yellow" : ""}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" strokeWidth="1.6" fill="none">
                    <path d="M12 3l7 2.5v5c0 5-3 8.5-7 10.5-4-2-7-5.5-7-10.5v-5z" />
                    <path d="M9 12l2 2 4-4.5" />
                  </svg>
                </span>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="hero-photo">
              <img src="/assets/private.jpg" alt="A BSTC coach working one-on-one with a young player" />
            </div>
            <div>
              <SecTitle>
                Built on experience. <span className="t-green">Focused on the future.</span>
              </SecTitle>
              <p style={{ color: "var(--muted)", marginBottom: 12 }}>
                Founded in 1996 in South Florida by former Brazilian professional player Joao
                Moraes, BSTC was created with a simple goal: to provide high-quality training that
                helps young players reach their full potential.
              </p>
              <p style={{ color: "var(--muted)", marginBottom: 12 }}>
                After testing locations across Miami, the club found its permanent home at Highland
                Oaks Park in Aventura. Today, we continue to evolve, embrace new methodologies and
                build meaningful experiences that prepare players for the next level, on the field
                and in life.
              </p>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>
                The club is family-run: Joao Moraes (Founder &amp; Co-owner), Matthew De Moraes
                (Director of Operations &amp; Coaching) and Marina De Moraes (Communications &amp;
                Marketing).
              </p>
              <div style={{ marginBottom: 18, overflowWrap: "anywhere" }}>
                <p><strong>Matthew De Moraes</strong><br />
                  Email: <a href="mailto:matthew@bstcsoccer.com">matthew@bstcsoccer.com</a>
                </p>
                <p style={{ marginTop: 12 }}><strong>Marina De Moraes</strong><br />
                  Email: <a href="mailto:marina@bstcsoccer.com">marina@bstcsoccer.com</a><br />
                  Phone: <a href="tel:+17863858345">(786) 385-8345</a>
                </p>
              </div>
              <Link to="/contact" className="btn btn-green">
                Come Meet Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band green">
        <div className="wrap cta-inner">
          <div>
            <h2>Come see us</h2>
            <p>
              Highland Oaks Park · 20300 NE 24th Ave, Aventura, FL 33180<br />
              After-school: Tuesday &amp; Thursday, 5:00–6:30 PM<br />
              Travel team: Monday, Tuesday &amp; Thursday, 5:00–6:30 PM
            </p>
          </div>
          <Link to="/tryouts" className="btn btn-yellow">
            Register Today
          </Link>
        </div>
      </section>
    </Page>
  );
}
