import Link from 'next/link';
import logoImg from '@/assets/logo.png';

function MainHeaders() {
  return (
    <header>
      <Link href='/'>
        <img src={logoImg.src} alt='A plate with food on it' />
        NextLevel Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeaders;
