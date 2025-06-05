import Link from 'next/link';

export default function MainHeader() {
  return (
    <header id='main-header'>
      <div id='logo'>
        <div id='page'>
          <Link href='/'>NextNews</Link>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/news'>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
