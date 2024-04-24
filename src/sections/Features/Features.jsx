
import Card from "../../components/Card.jsx";

export function Features() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <Card
            title={"Fresh new layout"}
            content={
              "With Bootstrap 5, we've created a fresh new layout for this template!"
            }
            icon={"bi bi-collection"}
          />
          <Card
            title={"Free to download"}
            content={
              " As always, Start Bootstrap has a powerful collectin of free templates."
            }
            icon={"bi bi-cloud-download"}
          />
          <Card
            title={"Jumbotron hero header"}
            content={
              "The heroic part of this template is the jumbotron hero header!"
            }
            icon={"bi bi-card-heading"}
          />
          <Card
            title={"Feature boxes"}
            content={
              "We've created some custom feature boxes using Bootstrap icons!"
            }
            icon={"bi bi-bootstrap"}
          />
          <Card
            title={"Simple clean code"}
            content={
              "We keep our dependencies up to date and squash bugs as they come!."
            }
            icon={"bi bi-code"}
          />
          <Card
            title={"A name you trust"}
            content={
              "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
            }
            icon={"bi bi-patch-check"}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;