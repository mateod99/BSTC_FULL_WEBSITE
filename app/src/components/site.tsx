import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { FIELD_STATUS, FIELD_STATUS_LABEL } from "../lib/field-status";

/* ---------------- Field status strip ---------------- */
export function StatusStrip() {
  const s = FIELD_STATUS;
  return (
    <div className={`status-strip ss-${s.status}`} role="status" aria-live="polite">
      <div className="wrap ss-inner">
        <span className="ss-label">
          <span className="ss-dot" aria-hidden="true" />
          {FIELD_STATUS_LABEL[s.status]}
        </span>
        <span className="ss-msg">{s.message}</span>
        <span className="ss-updated">Updated {s.updated}</span>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
const NAV = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/travel", label: "Travel" },
  { to: "/tryouts", label: "Tryouts" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header${open ? " open" : ""}`}>
      <div className="wrap header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/assets/logo.png" alt="BSTC shield crest" width={54} height={68} />
          <span className="brand-name">
            BSTC<small>Brazilian Soccer Training Center</small>
          </span>
        </Link>
        <nav className="nav">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "active" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/tryouts" className="btn-nav" onClick={() => setOpen(false)}>
            Register Now
          </Link>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

/* ---------------- Brush accents ---------------- */
export function Brush({ color, side }: { color: "green" | "yellow"; side: "l" | "r" }) {
  return <span className={`brush brush-${color} brush-${side}`} aria-hidden="true" />;
}

/* ---------------- Page hero (interior) ---------------- */
export function PageHero({
  crumb,
  title,
  children,
}: {
  crumb: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <Brush color="yellow" side="l" />
      <Brush color="green" side="r" />
      <div className="wrap">
        <span className="crumb">BSTC - {crumb}</span>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

/* ---------------- Section title (centered) ---------------- */
export function SecTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="sec-title">
      <h2>{children}</h2>
      {sub ? <p>{sub}</p> : null}
    </div>
  );
}

/* ---------------- Practice-on band ---------------- */
export function PracticeBand() {
  return (
    <section className="practice-band">
      <div className="wrap pb-inner">
        <div>
          <h2>Is practice on today?</h2>
          <p>Weather and field updates are posted at the top of every page.</p>
        </div>
        <Link to="/" className="btn btn-yellow">
          Check Field Status
        </Link>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  return (
    <footer className="site-footer">
      <Brush color="yellow" side="l" />
      <Brush color="green" side="r" />
      <div className="wrap footer-cols">
        <div>
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="BSTC crest" width={58} height={73} />
            <strong>
              BSTC
              <span>Brazilian Soccer Training Center</span>
            </strong>
          </div>
          <p>
            Developing, guiding and producing young players since 1996 through elite training,
            character development and a passion for the game.
          </p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a href="tel:7865227577">786.522.7577</a>
          <a href="mailto:info@bstcsoccer.com">info@bstcsoccer.com</a>
          <p className="footer-addr">
            Highland Oaks Park
            <br />
            20300 NE 24th Ave
            <br />
            Aventura, FL 33180
          </p>
          <a
            href="https://maps.google.com/?q=Highland+Oaks+Park,+20300+NE+24th+Ave,+Aventura,+FL+33180"
            target="_blank"
            rel="noopener"
            className="footer-map"
          >
            View Map
          </a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/programs">Programs</Link>
          <Link to="/travel">Travel Teams</Link>
          <Link to="/tryouts">Tryouts</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Have Questions?</h4>
          <p>We're here to help you find the right program for your child.</p>
          <Link to="/contact" className="btn btn-green footer-cta">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>(c) 2026 Brazilian Soccer Training Center. All rights reserved.</span>
        <span>
          <Link to="/privacy">Privacy Policy</Link> - <Link to="/terms">Terms of Use</Link>
        </span>
      </div>
    </footer>
  );
}

/* ---------------- Shared page shell ---------------- */
export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="site-body">
      <StatusStrip />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
