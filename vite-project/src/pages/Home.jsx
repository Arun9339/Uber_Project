import React from "react";

const Home = () => {
  return (
    <div className=" bg-cover bg-center bg-[url(https://imgs.search.brave.com/wwFuwSz6vSg9qsRukmX4PHGVibN6e6k_jFlReVNjayQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnJp/ZGVzdGVyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OC91YmVyX2xlYXNl/XzEuanBnP3Jlc2l6/ZT04NDAsNDczJnNz/bD0x)]  h-screen w-full flex flex-col justify-between bg-black text-white">
      {/* Logo Section */}
      <div className="flex justify-center pt-10">
        <img
          src="https://imgs.search.brave.com/2-ETdqgg6kcI7QUMz2PjVNGAO2G5jXgkh17yvlZreFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvdWJlci1s/b2dvLXBuZ19zZWVr/bG9nby0zMzg4NzIu/cG5n"
          alt="Uber Logo"
          className="h-20"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Get Started With Uber
        </h2>
        <Link className="  flex-items-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
          Continue
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 py-4 text-sm">
        © 2025 Uber Clone | Made by Arun 🚀
      </div>
    </div>
  );
};

export default Home;
