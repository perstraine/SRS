import styles from "./Ceiling.module.css";
import image from "../../assets/ceiling.jpg";

export default function Ceiling() {
  return (
    <div id={styles.outerContainer}>
      <img id={styles.hero} src={image} alt="Placeholder"></img>
      <div id={styles.innerContainer}>
        <div id={styles.title}>Susupended Ceiling Seismic Restraint</div>
        <p>
          Suspended ceilings are an integral part of a building space. In recent
          times, numerous different types of ceiling grids have been developed
          with different support mechanisms. However, every ceiling needs to be
          seismically restrained.
        </p>
        <p>
          Suspended ceilings need to be designed to resist earthquake loads in
          accordance with NZS 1170.5:2004, AS/NZS 2785, and NZS 4600. Whether it
          is concealed grid plasterboard ceilings, exposed grid tile ceilings,
          fire-rated ceilings, floating ceilings, baffle ceilings, or a bespoke
          ceiling, we've dealt with it all.
        </p>
        <p>
          We have experience with multiple seismic bracing methods such as
          ceilings with fix/float edge fixings, rigid or wire back-braces,
          specialised bracing, or no braces at all. Our team at SRS can help you
          figure out what the best solution is for your project.
        </p>
        <p>
          We also know that clients, based on their own experiences, have
          preferences when it comes to the type of bracing design, or the
          specific products used. Our engineers are experts in the field and can
          work with you to develop a seismic bracing design that you are
          satisfied with.
        </p>
      </div>
      <div id={styles.special}>
        <div id={styles.specialTitle}>What We Offer:</div>
        <div id={styles.specialtext}>
          Seismic bracing design and PS1 documentation | Construction monitoring
          and PS4 documentation | Design reviews | Assessment of existing
          ceiling seismic bracing | Assessment as part of Technical Due
          Diligence | Remedial design | Consultancy services
        </div>
      </div>
    </div>
  );
}
