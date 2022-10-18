import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Main from './Main'
import Mobile from './Mobile'


export default function Home() {
  return (
   <>
  {/* Mobile View */}
  <div className="grid grid-row-3 gap-0 md:hidden ">
        <Navbar />
        <div>
          <Mobile/>
        </div>
        <div>
        <Footer/>
        </div>
      </div>
{/* Mobile View End */}
<div className="hidden  md:visible md:grid md:grid-col-1 md:gap-0 ">

<Navbar />
        <div>
          <Main/>
        </div>
        <div>
        <Footer/>
        </div>
</div>
   </>
  )
}
