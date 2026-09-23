import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "../components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Use | BSTC Soccer" }] }),
  component: Terms,
});

function Terms() {
  return (
    <Page>
      <PageHero crumb="Terms" title={<>Terms of Use</>} />
      <section className="section">
        <div className="wrap prose">
          <p>
            This website is provided by the Brazilian Soccer Training Center (BSTC) for
            informational purposes about our programs in Aventura, Florida.
          </p>
          <h2>Program participation</h2>
          <p>
            Registration details, schedules and pricing shown on this site can change between
            seasons. Participation in any BSTC program requires a completed registration and a
            signed player waiver on file.
          </p>
          <h2>Field status</h2>
          <p>
            The field status shown on this site is updated by BSTC staff as conditions change.
            When in doubt about weather, check the status at the top of the homepage or contact
            us directly.
          </p>
          <h2>Contact</h2>
          <p>Questions about these terms: info@bstcsoccer.com or <a href="tel:+17865227577">786.522.7577</a>.</p>
        </div>
      </section>
    </Page>
  );
}
