import Image from 'next/image'
import Link from 'next/link'
// import Razsorhub from '../public/Razsorhub .jpg'
import Razsorhub2 from '../public/Razsorhub 2.jpg'

 function Header() {
  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'> 
          <div className='cursor-pointer transition hover:opacity-100'>
            <Image 
              src={Razsorhub2} 
              width={80} 
              height={50} 
              priority 
              alt='logo' />
          </div>
          </Link> 
      </div>
        <nav className='flex-1 items-center justify-center space-x-8 text-2xl'>
          <ul className="flex flex-wrap gap-2">
            <Link href='/'>
              <li className="navList">Home</li>
            </Link>
            <Link href='/'>
              <li className="navList">About</li>
            </Link>
            <Link href='/'>
              <li className="navList">Blog</li>
            </Link>
            <Link href='/'>
              <li className="navList">Projects</li>
            </Link>
            <Link href='/'>
              <li className="navList">Services</li>
            </Link>
          </ul>
        </nav>
        <div class="flex items-center justify-center gap-x-4 md:w-1/5">
          <Link href='/'>
            <button className='border border-teal-700 rounded-md text-[rgb(1,83,83)] ml-5 px-3 py-1 hover:bg-[rgb(237,199,147)] hover:text-white hover:border-none'>
              Contact
            </button>
          </Link> 
        </div>
    </header>
  )
}

export default Header;
