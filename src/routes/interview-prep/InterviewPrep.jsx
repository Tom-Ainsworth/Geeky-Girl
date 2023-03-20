import styles from "./InterviewPrep.module.css";

const InterviewPrep = () => {
  return (
    <div>
      <div className={styles.main}>
		<h1>Top Interview Questions</h1>
        <ul className={styles.cards}>
          <li className={styles.cards_item}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Why Did You Choose a Career in Software Development?</h2>
              <div className={styles.card_text}>
                <p>
				This may be one of the most general software developer interview questions, but employers use it to gauge your passion for the job. Discussing why you chose a certain career may seem easy, but what you say will have an impact on your interview performance.
                </p>
                <p>
                  <b>How You Could Answer</b>
                  <ul>
                    <li>“I’ve always had a knack for solving problems and I feel that software does just that. I chose a career in software development because I find satisfaction in helping consumers, companies, and organizations find the solutions they need—from creating spreadsheets to designing skyscrapers. Additionally, I have experience with a variety of programming languages and enjoy working with them. For example, while I was in college, I helped a relative build a business website and web app. I also built human resources software at my prior job.”</li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

		  <li className={styles.cards_item}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>What Programming Languages Are You Proficient In?</h2>
              <div className={styles.card_text}>
                <p>
				Programming languages are essential for a software developer. Interview questions about your understanding of and proficiency with programming languages are a common part of the hiring process.
                </p>
                <p>
                  <b>How You Could Answer</b>
                  <ul>
                    <li>
“I first learned how to use JavaScript, CSS, and HTML in college. Those were the languages I used the most when I helped a relative build a business site and web app. But as part of that project, I started learning how to use Python and PHP. In addition, I used C++ and Java to create HR software at my previous job. I found the C++ language to be the most flexible. In fact, it was the primary building block for the HR software I helped develop.”</li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

		  <li className={styles.cards_item}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Describe the Steps Involved in Software Development?</h2>
              <div className={styles.card_text}>
                <p>
				Software development questions about process help the interviewer get a sense of your working style. Remember to be detailed when describing the steps you take to complete a project.
                </p>
                <p>
                  <b>How You Could Answer</b>
                  <ul>
                    <li>“Initial planning and brainstorming is the first step in software development. During this stage, I determine the purpose and functionality of a program. The next step involves team analysis of the project, including the time frame and which tools and team members are needed. Then comes the design stage, where a program is designed by a team of software engineers before moving on to the development stage. Once in development, I step in to transform the design into functional software. It’s then shipped off to quality assurance to identify any defects or bugs. Lastly, the software is officially installed and launched.”</li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

		  <li className={styles.cards_item}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Tell Me About a coding project You Completed Successfully.</h2>
              <div className={styles.card_text}>
                <p>
				Interview questions for experienced software developers will delve more deeply into projects you've successfully completed to give you the chance to explain your process in detail.
                </p>
                <p>
                  <b>How You Could Answer</b>
                  <ul>
                    <li>“At my last job, where I worked for a software development firm, we developed HR software for a variety of companies. The biggest project I took part in was for a financial institution. The company’s original HR system was outdated and time consuming. We developed a new system where they could handle payroll, time tracking, attendance, training, and hiring in the same place. My primary role was coding, and I mostly worked with C++, Java, and Python. But I also took part in QA and testing. The final product helped the company streamline its HR processes and save time and money in the long run.”</li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

		  <li className={styles.cards_item}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>How Do You Ensure Quality and Fix Errors?</h2>
              <div className={styles.card_text}>
                <p>
				Errors and bugs are common software development issues. To be considered for a software developer job, you’ll need to demonstrate proficiency in quality assurance. Software developer interview questions about QA are a measure of your problem-solving abilities.
                </p>
                <p>
                  <b>How You Could Answer</b>
                  <ul>
                    <li>“I usually launch code-based testing to identify and diagnose potential errors. When I helped test the HR software, I asked another member of the team peer review my code. They found one logical error that resulted in incorrect output. Once the coding error was corrected, I used Dynamic Testing to evaluate the software for functionality. By then, it appeared to work as projected.”</li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

		  <li className={styles.cards_item}>
            <div className={styles.card_content}>
              <h2 className={styles.card_title}>Differentiate Between Functional / Object-Oriented Programming?</h2>
              <div className={styles.card_text}>
                <p>
				Both functional and object-oriented programming are commonly used in software development. But they have key differences and purposes that are critical for candidates to know and be able to articulate.
                </p>
                <p>
                  <b>How You Could Answer</b>
                  <ul>
                    <li>“Functional programming relies on mathematical functions, whereas object-oriented programming relies on classes of objects closely associated with functions. When utilizing functional programming, you must work solely with functions. Object-oriented programming, on the other hand, allows you to store functions within objects. Functional programming supports JavaScript, Python, Haskell, and Scala, while object-oriented programming supports Java, Python, C++, Perl, and Lisp.”</li>
                  </ul>
                </p>
              </div>
            </div>
          </li>

		 

		  
        </ul>
      </div>
    </div>
  );
};

export default InterviewPrep;
