import React from 'react'
import Link from 'next/link'

const Main = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    
    // Banner
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Sec B Portal By CR/ACR
        <strong className="font-extrabold text-[#2b6b66] sm:block">
        Leatest NEWS
        </strong>
      </h1>
      <p className="mt-4 sm:text-xl sm:leading-relaxed">
      Update Date  {date}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <div class="grid grid-cols-4 gap-4">
{/* AI Practical */}
    <div><Link href="https://www.mediafire.com/folder/qog0ryktxqwh4/AI+Practical"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  AI Practical
</a></Link></div> 
{/* AI Theory */}
<div><Link href="https://www.mediafire.com/folder/wf0klc8ysf6i4/AI+Theory"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  AI Theory
</a></Link></div> 
{/* Computer Graphics */}
<div><Link href="https://www.mediafire.com/folder/jlmif9hq4wt20/Computer+Graphics"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  Computer Graphics
</a></Link></div> 
{/* Computer Graphics Practical */}
<div><Link href="https://www.mediafire.com/folder/azvl4lfz3hgru/Computer+Graphics+Practical"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  Computer Graphics Practical
</a></Link></div> 
{/* Data & Analysis Of Algoritham */}
<div><Link href="https://www.mediafire.com/folder/c5katwb3euhev/Data+&+Analysis+Of+Algoritham"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  Data & Analysis Of Algoritham
</a></Link></div> 
{/* Information Security */}
<div><Link href="https://www.mediafire.com/folder/ekw3ygjvkzs40/Information+Security"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  Information Security
</a></Link></div> 
{/* Numerical Aalysis */}
<div><Link href="https://www.mediafire.com/folder/lxcxko902h11e/Numerical+Aalysis"><a class="bg-[#0D9488] hover:bg-[#2b6b66]] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  Numerical Aalysis
</a></Link></div> 
  
  
</div>
      </div>
    </div>
  </div>
</section>
// Banner End
  )
}

export default Main