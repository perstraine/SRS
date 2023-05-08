import styles from './About.module.css'
import image from './hero.jpg'

export default function About() {
    return (
      <div id={styles.outerContainer}>
        <img id={styles.hero} src={image} alt="Placeholder"></img>
        <div id={styles.innerContainer}>
          <div id={styles.title}>About Us</div>
          <p>
            SRS Engineering is a dynamic and agile consultancy in the field of
            non-structural seismic engineering. The team collectively has many
            years of experience in the seismic bracing of building components
            within Aotearoa.
          </p>
          <p>
            We are a consultancy that strives for code compliant solutions that
            are client-orientated, easily buildable, cost effective and most
            importantly, coordinated with other consultants in the project.
            Thus, ensuring that there are as few unforeseen costs and delays as
            possible.
          </p>
          <p>
            From our gathered experience we understand that what is shown on a
            drawing isn't necessarily achievable or practical on site, and that
            modifications to standard details are often required. By working
            with the site teams and installers we have come to pride ourselves
            on our ability to think outside the box and provide job specific
            solutions to our clients.
          </p>
          <p>
            The team in their time have worked on a vast range of projects, from
            small shop fit-outs to some of the most prestigious buildings in the
            country. These are just a few of the projects we have worked on:
          </p>
          <ul>
            <li>Shopping Complexes and Malls</li>
            <li>International Airports</li>
            <li>Domestic Airports</li>
            <li>Hospital Buildings and Facilities</li>
            <li>Large Scale Supermarkets</li>
            <li>University Buildings and Campus Facilities</li>
            <li>Retirement Villages</li>
            <li>Hotels and Accommodation Buildings</li>
            <li>Prison Buildings</li>
            <li>National Buildings and Facilities</li>
          </ul>
        </div>
      </div>
    );
}