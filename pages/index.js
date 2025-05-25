// import Layout from '../components/Layout'
// import Image from 'next/image'
// import { Typewriter } from 'react-simple-typewriter'
// import styles from '../styles/Home.module.css'


// export default function Home() {
//   return (
//     <Layout>
//       <div className={styles.hero}>
//         <Image
//           src="/Omkar Photo.jpg"
//           alt="My Profile"
//           width={450}
//           height={450}
//           className={styles.profileImage}
//         />
//         <h1 className={styles.typingText}>
//           <Typewriter
//             words={['Hi, I’m Omkar. I love turning data into insight. Welcome to my blog!']}
//             loop={1}
//             cursor
//             cursorStyle="|"
//             typeSpeed={80}
//             deleteSpeed={0}
//             delaySpeed={2000}
//           />
//         </h1>
//       </div>
//     </Layout>
//   )
// }

import Layout from '../components/Layout'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image
          src="/omkar.jpg"
          alt="My Profile"
          width={450}
          height={450}
          className={styles.profileImage}
        />
        <h1 className={styles.typingText}>
          <Typewriter
            words={['Hi, I’m Omkar. I love turning data into insight. Welcome to my blog!']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={2000}
          />
        </h1>
      </div>

      {/* Creative About Section */}
      <section className={styles.aboutSection}>
        <h2 className={styles.aboutHeading}>🧠 Passion Meets Purpose</h2>
        <p className={styles.aboutText}>
          I am passionate about data and the insights it can reveal—working with data feels like mining for hidden gold.
          Each dataset presents a new challenge and an opportunity to explore unfamiliar domains, where I can apply my skills and learn through real-world problems.
        </p>
        <p className={styles.aboutText}>
          Recently, I’ve started blogging as a way to document my learning journey, reflect on experiences, and contribute to the wider community of data enthusiasts.
        </p>
        <p className={styles.aboutText}>
          Outside of work, I love reading, writing, and discovering new places. I believe in living life to the fullest and staying curious.
        </p>
        <p className={styles.aboutText}>
          This website is my digital space to showcase the projects I’ve built, the stories I’ve written, and the knowledge I continue to explore in the world of data science.
        </p>
      </section>
    </Layout>
  )
}
