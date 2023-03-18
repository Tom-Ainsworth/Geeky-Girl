import styles from "./Resources.module.css";

const Resources = () => {


	const resourceList = [{
		id:1, 
		title:"Free React Courses",
		body: "Learn how to build powerful interactive applications with one of the most popular JavaScript libraries. In fact, this site is built by React!",
		links: [{
			url:"https://www.codecademy.com/learn/react-101",
			title:"CodeCademy - Learn React"},
			{url:"https://www.udemy.com/course/react-tutorial",
			title:"Udemy - React JS FrontEnd"},
			{url:"https://legacy.reactjs.org/docs/getting-started.html",
			title:"React Documentation"},
	]}]
	
	

	return    ( <div className={styles.resources}>
        <h1>Resources</h1>
        <ul className="cards">

          <li className={styles.cards_item}>
            <div className={styles.card}>
              <div className={styles.card_image}><img src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"/></div>
              <div className={styles.card_content}>
                <h2 className={styles.card_title}>Free React Courses</h2>
                <p className={styles.card_text}>Learn how to build powerful interactive applications with one of the most popular JavaScript libraries. In fact, this site is built by React!</p>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn} htmlFor="btnControl">Links </button>
                    <div className={styles.dropdown_content}>
                      <a href="https://www.codecademy.com/learn/react-101">CodeCademy - Learn React</a>
                      <a href="https://www.udemy.com/course/react-tutorial/">Udemy - React JS FrontEnd</a>
                      <a href="https://legacy.reactjs.org/docs/getting-started.html">React Documentation</a>
                    </div>
                  </div>
              </div>
            </div>
          </li>


        </ul>
      </div> )
};

export default Resources;
