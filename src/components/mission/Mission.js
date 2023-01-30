import styles from './Mission.module.css'
import image from '../../assets/mission.jpg'

export default function Mission() {
    return (
      <div id={styles.outerContainer}>
        <div id={styles.innerContainer}>
          <div id={styles.title}>Our Mission</div>
          <p>
            In the world of building components, coordination with other
            consultants, the architect, and the client are crucial to the
            success of the job. At SRS engineering we do not measure the success
            of a job by whether it was constructed or not, but by how easily it
            was constructed, and the satisfaction of the parties involved during
            and after it has been constructed.
          </p>
          <p>
            Therefore, communication is a core part of our company DNA. We
            believe that any architect’s or client’s vision can be engineered to
            achieve the desired intent, and anything can be solved within the
            project timelines, with continued and honest communication between
            everyone involved.
          </p>
          <img id={styles.hero} src={image} alt="Placeholder"></img>

          <p>
            We can provide our services for residential or commercial buildings
            and get involved at any stage of the project directly under a
            project manager, general contractor or subcontractor.
          </p>
          <p>
            However, from experience we suggest getting us involved at the
            earliest possible stage. Our knowledge and expertise usually proves
            very beneficial from the coordination stages onwards, to ensure as
            many road blocks as possible are avoided, from service and brace
            coordination issues to delays in obtaining building consents due to
            missing seismic restraint designs.
          </p>
          <p>
            The team at SRS look forward to hearing from you in the near future.
          </p>
        </div>
      </div>
    );
}