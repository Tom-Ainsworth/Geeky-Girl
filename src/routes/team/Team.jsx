import styles from "./Team.module.css";
import bossman from "../../assets/images/bossman.jpeg"
import benji from "../../assets/images/benji.jpeg"
import ignus from "../../assets/images/ignus.png"
import rockman from "../../assets/images/rockman.jpeg"
import tindy from "../../assets/images/tindy.jpeg"


const Team = () => {
  return (

	<div>

	<h1>Meet the Dev Team</h1>
	<div className={styles.container}>

        <div className={styles.box}>
            <div className={styles.image}>
                <img src={bossman} alt="our fearless leader tom"/>
            </div>
            <h1>tom</h1>
            <h2>Full Stack Developer</h2>
                  <p>Hey, I'm Tom! I'm a Junior Full Stack Developer at Commodities Engineering mainly using Java, and I love working with React in my own time.</p>
            <div className={styles.icons}>
                <a href="www.github.com" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

		<div className={styles.box}>
            <div className={styles.image}>
                <img src={tindy} alt="our creative director and the real boss"/>
            </div>
            <h1>tindy</h1>
            <h2>Full Stack Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro incidunt amet vel quisquam optio commodi aperiam eligendi.
            </p>
            <div className={styles.icons}>
                <a href="www.github.com" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

		<div className={styles.box}>
            <div className={styles.image}>
                      <img src={rockman} alt="does as it says on the tin he is a rock"/>
            </div>
            <h1>roman</h1>
            <h2>Full Stack Developer</h2>
                  <p>Junior Software Developer,Father and a Husband!!
                      I’m currently learning Django
                      👯 I’m looking to collaborate with other developers
                      🥅 2022 Goals: Learn more about backend technologies
                      My hobbies are Reading, coding and ocassionaly gaming</p>
            <div className={styles.icons}>
                <a href="www.github.com" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

		<div className={styles.box}>
            <div className={styles.image}>
                <img src={ignus} alt="the man with all the plans"/>
            </div>
            <h1>ignus</h1>
            <h2>student at ci</h2>
                  <p>Hey, I'm ignus I'm a student at CI ,having fun learning</p>
            <div className={styles.icons}>
                <a href="www.github.com" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

		<div className={styles.box}>
            <div className={styles.image}>
                <img src={benji} alt="the support"/>
            </div>
            <h1>benji</h1>
            <h2>student at ci</h2>
                  <p>Hey, I'm benji! I'm a student at CI ,having fun learning.</p>
            <div className={styles.icons}>
                <a href="www.github.com" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div>

		{/* <div className={styles.box}>
            <div className={styles.image}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwN34CvIbQcZeL5q75BmLgyUwlba6BzZWAXeXyWUBVBQ&s" alt=""/>
            </div>
            <h1>Member Name</h1>
            <h2>Full Stack Developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro incidunt amet vel quisquam optio commodi aperiam eligendi.
            </p>
            <div className={styles.icons}>
                <a href="www.github.com" target={"_blank"}><i className="fa fa-github"></i></a>
            </div>
        </div> */}


    </div>

	</div>
	

     
  );
};

export default Team;
