import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "../components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | BSTC Soccer" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <Page>
      <PageHero crumb="Privacy" title={<>Privacy Policy</>} />
      <section className="section">
        <div className="wrap prose">
          <p>
            The Brazilian Soccer Training Center (BSTC) respects your family's privacy. This page
            describes how we handle information you share with us.
          </p>
          <h2>What we collect</h2>
          <p>
            When you contact us by phone, email or the contact form, we receive the details you
            choose to share, such as your name, your player's name and age, and how to reach you.
            This website does not run advertising trackers.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information only to respond to your inquiry, manage program registration
            and share club updates you ask for. We do not sell personal information.
          </p>
          <h2>Questions</h2>
          <p>
            Contact us at info@bstcsoccer.com or <a href="tel:+17865227577">786.522.7577</a> with any questions about your
            information.
          </p>
        </div>
      </section>
    </Page>
  );
}
