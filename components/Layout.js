// import Link from 'next/link'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Layout({ children }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>My Blog</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <nav className={styles.navbar}>
//         <div className={styles.links}>
//           <Link href="/">About Me</Link>
//           <Link href="/contact">Contact</Link>
//           <Link href="/projects">Projects</Link>
//           <Link href="/techblogs">Tech Blogs</Link>
//           <Link href="/personalblogs">Personal Blogs</Link>
//         </div>
        
//       </nav>

//       <main className={styles.main}>
//         {children}
//       </main>
//     </div>
//   )
// }

import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Omkar Joshi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.navHeader}>
          <div className={styles.logo}></div>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
          <Link href="/">About Me</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/techblogs">Tech Blogs</Link>
          <Link href="/personalblogs">Personal Blogs</Link>
        </div>
      </nav>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
