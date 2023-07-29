import Image from 'next/image'
import Link from 'next/link'
// import Razsorhub from '../public/Razsorhub .jpg'
import Razsorhub2 from '../public/Razsorhub 2.jpg'

 function Navbar() {
  return (
    <header>
        <div className=' container flex flex-wrap items-center justify-between mx-auto py-4 px-6'>
            <Link href='/'> 
                <Image src={Razsorhub2} width={100} height={50} priority alt='logo' />
            </Link>
            
            <nav className='flex text-2xl'>
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
                <li>
                <Link href='/'>
                  <button className='border border-teal-700 rounded-md text-[rgb(1,83,83)] ml-5 px-3 py-1 hover:bg-[rgb(237,199,147)] hover:text-white hover:border-none'>
                    Let's Talk
                  </button>
                </Link> 
              </li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar;