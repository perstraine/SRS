import styles from './Services.module.css'
import image from "../../assets/services.jpg";

export default function Services() {
    return (
      <div id={styles.outerContainer}>
        <img id={styles.hero} src={image} alt="Placeholder"></img>
        <div id={styles.innerContainer}>
          <div id={styles.title}>Services Seismic Restraint</div>
          <p>
            Due to them often being hidden in walls and ceiling spaces, it is
            easy to overlook a building's services. These services include HVAC
            systems, fire protection pipework, hydraulic and refrigeration
            pipework, medical gas pipework, and electrical services. These
            systems are generally required for the continuing function of the
            building and all need to be designed for seismic loads as per NZS
            1170.5 and in accordance with NZS 4219:2009.
          </p>
          <p>
            With our teams' experience in a wide variety of buildings - from
            hospitals to chain supermarkets we have come across a lot of tricky
            and demanding sites where we face multiple service clashes,
            clearance issues, and large plenum spaces. In the past, we have
            overcome all these issues with bespoke designs, combined braced
            trapezes, and utilising appropriate brace types for the situation.
            We work closely with our clients and contractors to meet their needs
            and make the build as easy and cost-effective as possible.
            Generally, there are two types of services bracing - compression/
            tension bracing (strut braces) or tension braces(wire braces). Each
            type of bracing has its pros and cons which we are happy to discuss
            with our clients prior to design and incorporate their preferred
            type where suitable.
          </p>
          <p>
            The team at SRS can provide a seismic design for one or multiple
            building services for your projects, depending on your needs.
            However, we recommend a coordinated design with all the combined
            services to help avoid any potential clashes and related delays on
            site. During the construction phase, we also provide construction
            monitoring to ensure any defects or outliers have been picked up
            early, thus avoiding project delays.
          </p>
        </div>
        <div id={styles.special}>
          <div id={styles.specialTitle}>What We Offer:</div>
          <div id={styles.specialtext}>
            Seismic bracing design and PS1 documentation | Construction
            monitoring and PS4 documentation | Design reviews | Assessment of
            existing building services seismic bracing | Seismic restraint
            assessment of existing floor fixed units | Assessment as part of
            Technical Due Diligence | Remedial design | Consultancy services
          </div>
        </div>
      </div>
    );
}