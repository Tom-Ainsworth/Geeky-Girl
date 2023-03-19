import styles from "./Home.module.css";
import hero from "../../assets/images/hero.png"
import SuccessStories  from "../success-stories/SuccessStories";
const Home = () => <div className={styles.Home}>
    <div className={styles.hero_image_outer}>
        <img className={styles.hero_img} src={hero} alt="geeky girl home page main images inside there is some text" />
    </div> 
    <div className={styles.info_woman}>
        <h3>A current look at woman in the industry </h3>
        <p className={styles.info_woman_p}>As of 2023, women hold 26.7% of technology jobs.
            Taking a closer look, we see that of the 141,038 women who work in the tech industry,
            56% or 79,163 are women of color. Mid-size tech-sector companies led the way in promoting
            workplace diversity, boasting more than 53% of the industry's leading employers.</p>
        <h3>pay disparity</h3>
        <p className={styles.info_woman_p}>Its overall national mean gender pay gap is 15.4pc,
            while its median is 13.8pc. Like a lot of companies
            on this list, HPE said the gap is skewed in favour of men
            because of the low representation of women in higher-paid jobs
        </p>
    </div>
        <SuccessStories/>
    </div>;

           
export default Home;
