import styles from './Intro.module.css'

export default function Intro() {
    return (
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <p>
            SRS Engineering is a dynamic and agile consultancy in the field of
            non-structural seismic engineering.
          </p>
          <p>
            The team collectively has more than 15 years of experience in the
            seismic bracing of building components within Aotearoa.
          </p>
          <p>
            We are a consultancy that strives for code compliant solutions that
            are client-orientated, easily buildable, cost effective and most
            importantly, coordinated with other consultants in the project; thus
            ensuring that there are as few unforeseen costs and delays as
            possible.
          </p>
          <p>
            From our gathered experience we understand that what is shown on a
            drawing isn’t necessarily achievable or practical on site and that
            modifications to standard details are often required. By working
            with the site teams and installers we have come to pride ourselves
            on our ability to think outside the box and provide job specific
            solutions to our clients.
          </p>
          <p>
            The team in their time have worked on a vast range of projects, from
            small shop fit-outs to some of the most prestigious buildings in the
            country:
          </p>
          <ul>
            <li>NZICC</li>
            <li>Various Auckland University buildings</li>
            <li>New Waikeria Prison</li>
            <li>Paremoremo Prison</li>
            <li>Commercial Bay</li>
            <li>Westfield Newmarket</li>
            <li>Auckland Airport</li>
            <li>Christchurch Airport Hotel</li>
            <li>Horizon Hotel, Auckland</li>
            <li>Langlands Hotel, Invercargill</li>
            <li>Queenstown Airport</li>
            <li>Hamilton Airport</li>
            <li>Various Countdown stores</li>
            <li>Various Hospital Buildings</li>
          </ul>
          <p>
            These are just a few of the projects we have worked on, and we are
            ready to tackle any design ideas you throw at us.
          </p>
          <p>
            In the world of building components, coordination with other
            consultants, the architect, and the client are crucial to the
            success of the job. At SRS Engineering we do not measure the success
            of job on if it was managed to be constructed but on how easily it
            was constructed and the satisfaction of the parties involved during
            and after it has been constructed.
          </p>
          <p>
            Therefore, communication is part of our company DNA. We believe that
            any architect’s or client’s idea can be engineered to achieve the
            desired intent, and anything can be solved within the project
            timelines with continued and honest communication between everyone
            involved.
          </p>
          <h2 id={styles.offer}>What We Offer</h2>
          <p>As part of our services, we provide the following:</p>
          <ul>
            <p>PS1 documentation for:</p>
            <li>
              Seismic and wind bracing design of suspended internal ceilings
            </li>
            <li>
              Seismic and wind bracing design of suspended external soffits
            </li>
            <li>
              Seismic, wind and impact design for internal and external non-load
              bearing partitions/walls
            </li>
            <li>
              Seismic bracing design of building services (such as mechanical,
              electrical, hydraulic, fire protection, gas, etc.)
            </li>
            <li>
              Seismic bracing design of joinery and architectural features
            </li>
            <li>
              Seismic bracing design of medical and any other specialistic
              equipment
            </li>
            <li> Structural design of small building alterations</li>
            <li>
              Specific gravity designs of building components where required
            </li>
            <li>
              Site monitoring, inspections, coordination for our designs or
              designs of others if needed with PS4 documentation
            </li>
            <li>
              Consulting services in the field of seismic bracing of building
              components and remedial design of the existing non-structural
              elements to achieve code compliance and health and safety
              requirements
            </li>
          </ul>
          <p>
            We can provide our services for residential or commercial buildings
            and get involved at any stage of the project directly under a
            project manager, general contractor or subcontractor.
          </p>
          <p>
            However, from experience, we suggest getting us involved at the
            earliest possible stage. Our knowledge and expertise usually proves
            very beneficial from the coordination stages onwards to ensure as
            many road blocks as possible are avoided, from service and brace
            coordination issues to delays in obtaining building consents due to
            missing seismic restraint designs
          </p>
          <p>
            The team at SRS look forward to hearing from you in the near future.
          </p>
        </div>
      </div>
    );
}