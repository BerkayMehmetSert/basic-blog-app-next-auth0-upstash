import Link from 'next/link';

export default function Header() {
  return (
    <header className='max-w-2xl mx-auto py-6'>
      <nav className='space-x-4'>
        <Link href='/'>
          <a>Hakkımda</a>
        </Link>
        <Link href='/blog'>
          <a>Bloglar</a>
        </Link>
      </nav>
    </header>
  );
}
