import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            id="experience"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>We are the best in the business!</p>
            </article>
          </AccordionItem>
          <AccordionItem
            className="accordion-item"
            id="tour-guide"
            title="Love working with tour guides"
          >
            <article>
              <p>Tour guides are important</p>
              <p>So you don't get lose</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
