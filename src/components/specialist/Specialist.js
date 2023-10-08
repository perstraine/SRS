import ImageCarousel from "../carousel/ImageCarousel";
import styles from "./Specialist.module.css";
import image1 from "./assets/1.jpg";
import image3 from './assets/3.jpg'
import image4 from "./assets/4.jpg";


export default function Specialist() {
  const images = [image1, image3, image4];
  return (
    <>
      <ImageCarousel images={images} />
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <div id={styles.title}>Specialist Seismic Restraint</div>
          <p>
            An often-overlooked component within a building fitout that requires
            seismic restraint is specialist equipment and feature items. Whether
            it is floor mounted AHU's and distribution boards or architectural
            lighting and shopfront signage, the team at SRS Engineering strive
            to achieve the most viable solutions for our clients.
          </p>
          <p>
            More often than not, specialist equipment has a significant weight
            attached to them and can pose a high risk not only to the function
            of a building but to human life. Through our teams experience we
            have encountered and overcome many difficult scenarios involving
            this type of equipment or architectural feature items and understand
            the need for bespoke designs to fit unique situations.
          </p>
          <p>
            The seismic restraint of architectural features can be a difficult
            problem to solve with the need to keep any restraints hidden or
            disguised. Bringing us in at the concept stages of the design is
            often beneficial here as we will work alongside the architects to
            form a buildable yet aesthetic solution.
          </p>
          <p>
            At SRS Engineering we always seek to add value at every stage of the
            project, from the concept design stage to construction. Our
            engineers use their extensive construction knowledge to overcome
            complex problems and provide reliable and practical solutions which
            we can monitor the build of, to ensure compliance.
          </p>
        </div>
        <div id={styles.special}>
          <div id={styles.specialContainer}>
            <div id={styles.specialTitle}>What We Offer:</div>
            <div id={styles.specialtext}>
              <ul>
                <li>Seismic bracing design and PS1 documentation</li>
                <li>Construction monitoring and PS4 documentation</li>
                <li>Design reviews</li>
                <li>Assessment of existing seismic bracing</li>
                <li>
                  Seismic restraint assessment of existing specialist equipment
                  or feature items
                </li>
                <li>Assessment as part of Technical Due Diligence</li>
                <li>Remedial design</li>
                <li>Consultancy services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
