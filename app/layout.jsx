import './globals.css';
import Link from 'next/link';
import Header from './Header';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col relative'}>
       <Header />
        <div className='flex'>
          {children}
        </div>
        <footer className='flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-4 md:p-8'>
          <Link href={"/"}>
          <i className='fa-brands ml-4 fa-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
          </Link>
          <Link href={"/"}>
          <i className='fa-brands ml-4 fa-facebook text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
          </Link>
          <Link href={"/"}>
          <i className='fa-brands ml-4 fa-twitter text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
          </Link>
          <Link href={"/"}>
          <i className='fa-brands ml-4 fa-linkedin text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl'></i>
          </Link>
        </footer>
        <div id="portal"></div>
     </body>
    </html>
  );
};

export default RootLayout;