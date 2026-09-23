import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Page, PageHero, PracticeBand, SecTitle } from "../components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BSTC | Brazilian Soccer Training Center - Aventura, FL" },
      {
        name: "description",
        content:
          "Contact BSTC: 786.522.7577, info@bstcsoccer.com. Highland Oaks Park, 20300 NE 24th Ave, Aventura, FL 33180. Questions about programs, registration or tryouts.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Website inquiry - ${f.get("interest") || "General"} (${f.get("player") || "player"})`;
    const body = [
      `Parent / Guardian: ${f.get("parent") || ""}`,
      `Player name: ${f.get("player") || ""}`,
      `Player age: ${f.get("age") || ""}`,
      `Email: ${f.get("email") || ""}`,
      `Phone: ${f.get("phone") || ""}`,
      `Interested in: ${f.get("interest") || ""}`,
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:info@bstcsoccer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Page>
      <PageHero crumb="Contact" title={<>Contact BSTC</>}>
        <p>
          Have questions about programs, registration, tryouts or your child's training? Our team
          is here to help.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="contact-rows">
            <div>
              <SecTitle>
                Get in <span className="t-green">touch</span>
              </SecTitle>
              <ul className="ico-list">
                <li>
                  <span className="ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" strokeWidth="1.6">
                      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="k">Phone</div>
                    <div className="v">
                      <a href="tel:+17865227577">786.522.7577</a>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" strokeWidth="1.6">
                      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  </span>
                  <div>
                    <div className="k">Email</div>
                    <div className="v">
                      <a href="mailto:info@bstcsoccer.com">info@bstcsoccer.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" strokeWidth="1.6">
                      <path d="M12 21s-6.5-5.6-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.4-6.5 10-6.5 10z" />
                      <circle cx="12" cy="11" r="2.4" />
                    </svg>
                  </span>
                  <div>
                    <div className="k">Training Location</div>
                    <div className="v">
                      Highland Oaks Park
                      <br />
                      20300 NE 24th Ave
                      <br />
                      Aventura, FL 33180
                    </div>
                  </div>
                </li>
                <li>
                  <span className="ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="M12 7v5l3.5 2" />
                    </svg>
                  </span>
                  <div>
                    <div className="k">Office Hours</div>
                    <div className="v">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: by appointment - Sunday: closed
                    </div>
                  </div>
                </li>
                <li>
                  <span className="ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" strokeWidth="1.6">
                      <circle cx="12" cy="7.5" r="3" />
                      <path d="M6 20c.6-3.4 2.9-5.3 6-5.3s5.4 1.9 6 5.3" />
                    </svg>
                  </span>
                  <div>
                    <div className="k">Who to Contact</div>
                    <div className="v">
                      Matthew De Moraes - Operations &amp; Coaching
                      <br />
                      <a href="mailto:matthew@bstcsoccer.com" style={{ overflowWrap: "anywhere" }}>matthew@bstcsoccer.com</a>
                      <br /><br />
                      Marina De Moraes - Communications &amp; Marketing
                      <br />
                      <a href="mailto:marina@bstcsoccer.com" style={{ overflowWrap: "anywhere" }}>marina@bstcsoccer.com</a>
                      <br />
                      <a href="tel:+17863858345">(786) 385-8345</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="map-shell" style={{ marginTop: 10 }}>
                <iframe
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to Highland Oaks Park"
                  src="https://www.google.com/maps?q=Highland%20Oaks%20Park%2C%2020300%20NE%2024th%20Ave%2C%20Aventura%2C%20FL%2033180&output=embed"
                />
              </div>
            </div>

            <div className="form-card">
              <SecTitle>
                Send us a <span className="t-green">message</span>
              </SecTitle>
              <form onSubmit={onSubmit} className="form-grid">
                <div className="field">
                  <label htmlFor="parent">Parent / Guardian Name *</label>
                  <input id="parent" name="parent" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="player">Player Name *</label>
                  <input id="player" name="player" required />
                </div>
                <div className="field">
                  <label htmlFor="age">Player Age *</label>
                  <input id="age" name="age" required inputMode="numeric" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="field full">
                  <label htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div className="field full">
                  <label htmlFor="interest">I'm interested in *</label>
                  <select id="interest" name="interest" required defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>After-School Soccer (Co-ed)</option>
                    <option>Pink Panthers (Girls)</option>
                    <option>Boys Travel Teams</option>
                    <option>Private / Small Group Training</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required />
                </div>
                <div className="full">
                  <button type="submit" className="btn btn-green">
                    Send Message
                  </button>
                  <p className="form-note">
                    {sent
                      ? "Your email app should have opened with your message ready to send. We typically respond within 24 hours."
                      : "Sending opens your email app with the message prefilled. We typically respond within 24 hours."}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <PracticeBand />
    </Page>
  );
}
