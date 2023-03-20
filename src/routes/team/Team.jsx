import styles from "./Team.module.css";
import bossman from "../../assets/images/bossman.jpeg"
import benji from "../../assets/images/benji.jpeg"
import ignus from "../../assets/images/ignus.png"
import rockman from "../../assets/images/rockman.jpeg"
import tindy from "../../assets/images/tindy.jpeg"


const Team = () => {
  return (

	<div>

<h1>Meet Our Team</h1>

<div className={styles.container}>
    <div className={styles.faders}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
    </div>

    <div className={styles.items}>
        <div className={styles.entry}>
            <p className={styles.name}>Tom</p>
            <img src={bossman} alt="our fearless leader tom"/>
            <p className={styles.quote}>Hey, I'm Tom! I'm a Junior Full Stack Developer at Commodities Engineering mainly using Java, and I love working with React in my own time.</p>
            <div className={styles.icons}>
                <a href="https://github.com/Tom-Ainsworth" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

        <div className={styles.entry}>
            <p className={styles.name}>Tindy</p>
            <img src={tindy} alt="our creative director and the real boss"/>
            <p className={styles.quote}>Passionate Coder and chinchilla mum! When I'm not coding, you'll find me training Brazilian jujitsu or skydiving - I love a good sweat and adrenaline rush!</p>
            <div className={styles.icons}>
                <a href="https://github.com/tindyc" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

        <div className={styles.entry}>
            <p className={styles.name}>Roman</p>
            <img src={rockman} alt="does as it says on the tin he is a rock"/>
            <p className={styles.quote}>Junior Software Developer,Father and a Husband!! I’m looking to collaborate with other developers. My hobbies are Reading, coding and ocassionaly gaming.</p>
            <div className={styles.icons}>
                <a href="https://github.com/rockroman" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

        <div className={styles.entryStudent}>
            <p className={styles.name}>Ignas</p>
            <img src={ignus} alt="the man with all the plans"/>
            <p className={styles.quote}>Hey, I'm ignas I'm a student at CI, having fun learning.</p>
            <div className={styles.icons}>
                <a href="https://github.com/ignasvilkas" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

        <div className={styles.entryStudent}>
            <p className={styles.name}>Benji</p>
            <img src={benji} alt="the support"/>
            <p className={styles.quote}>Hey, I'm benji! I'm a student at CI, having fun learning.</p>
            <div className={styles.icons}>
                <a href="https://github.com/Benjamin-Riordan" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>
 
    </div>


</div>


	</div>
	

     
  );
};

export default Team;
