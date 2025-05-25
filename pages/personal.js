import Link from 'next/link';

export default function Personal() {
    return (
      <div className="container">
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Me</Link></li>
              <li><Link href="/tech">Tech Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>Personal Blogs</h1>
          <p>In this section, I share my personal experiences and stories from my life.</p>
        </main>
      </div>
    )
  }
  