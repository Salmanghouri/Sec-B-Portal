import React from "react";
import Link from "next/link";

const Mobile = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
     <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Sec B Portal By CR/ACR<br/>
        <strong className="font-extrabold text-[#2b6b66] sm:block">
        Leatest NEWS
        </strong>
      </h1>
      <p className="mt-4 sm:text-xl sm:leading-relaxed">
      Update Date  {date}
      </p>

      </div>
      </div>
      </section>
     <div className="grid grid-cols-1 gap-2 px-1 py-1 mt-2 ml-1 mb-2 ">
  <button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/qog0ryktxqwh4/AI+Practical"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
  AI Practical
</a></Link></div></button>
<button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/wf0klc8ysf6i4/AI+Theory"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
AI Theory
</a></Link></div></button>
<button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/jlmif9hq4wt20/Computer+Graphics"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
Computer Graphics
</a></Link></div></button>
<button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/azvl4lfz3hgru/Computer+Graphics+Practical"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
Computer Graphics Practical
</a></Link></div></button>
<button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/c5katwb3euhev/Data+&+Analysis+Of+Algoritham"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
Data & Analysis Of Algoritham
</a></Link></div></button>
<button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/ekw3ygjvkzs40/Information+Security"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
Information Security
</a></Link></div></button>
<button className=" place-items-center p-3 bg-[#0D9488] border-separate"><div ><Link href="https://www.mediafire.com/folder/lxcxko902h11e/Numerical+Aalysis"><a class=" hover:bg-[#2b6b66] inline-flex font-bold text-xl font-sans items-center">
Numerical Aalysis
</a></Link></div></button>



   

  </div>
          </>
  );
};

export default Mobile;
