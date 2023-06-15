import ImageCarousel from "../carousel/ImageCarousel";
import styles from "./Wall.module.css";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";

export default function Wall() {
  const images = [image1, image2, image3, image4];
  return (
    <>
      <ImageCarousel images={images} />
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <div id={styles.title}>Wall & Partition Seismic Restraint</div>
          <p>
            Non-load bearing walls can make up a large portion of a building's
            internal fit-out and are typically framed with timber or light-gauge
            steel studs. These walls or partitions are generally constructed as
            either full-height, part-height, or bulkhead walls. While they do
            not support gravity loads from the primary building structure, they
            still need to be designed for earthquake, wind, and impact loads in
            accordance with AS/NZS 1170.2, AS/NZS 1170.5, NZS 3603, and NZS
            4600.
          </p>
          <p>
            The specific design of partitions has often been an overlooked part
            of a build. However, from our teams' experience with builds across
            Aotearoa, cookie-cutter solutions rarely cut it and end up being
            extremely costly when they need to be re-designed and re-installed.
            Whilst a lot of walls can look the same on the surface, there are
            generally many different characteristics that will dictate the
            design of a wall. These include but are not limited to, wall height,
            heavy or multiple linings, wall openings, large glazing fill-in
            partitions, acoustic studs, external or internal wind pressures, and
            wall-mounted equipment or features.
          </p>
          <p>
            Non-load-bearing walls are also increasingly used as a part of the
            external envelope and thus potentially exposed to high external wind
            loads, which can sometimes exceed seismic loads.
          </p>
          <p>
            Throughout our years of experience, the team at SRS has seen and
            done it all - from glass brick walls to full-height atrium walls,
            from stone-lined feature walls to fire-rated bulkhead walls, and by
            using this experience our team will strive to come up with the most
            cost-effective solution that meets each builds requirements
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
                <li>
                  Assessment of existing wall and partition seismic restraint
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
