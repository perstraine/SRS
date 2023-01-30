import styles from './Intro.module.css'
import image from '../../assets/home/hero.jpg'

export default function Intro() {
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
            <li>Commercial Bay</li>
            <li>Various Auckland University buildings</li>
            <li>Auckland Airport</li>
            <li>New Waikeria Prison</li>
            <li>Westfield Newmarket</li>
            <li>Christchurch Airport Hotel</li>
            <li>Horizon Hotel, Auckland</li>
            <li>Langlands Hotel, Invercargill</li>
            <li>Queenstown Airport</li>
            <li>Hamilton Airport</li>
            <li>Various Countdown stores</li>
            <li>Various Hospital Buildings</li>
            <li>Various Retirement Villages</li>
          </ul>
        </div>
      </div>
    );
}