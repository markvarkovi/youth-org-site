import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-yellow-300 bg-opacity-90 text-black text-3xl bold flex justify-center font-bold tracking-widest overflow-hidden py-4">
        <p>🚀 LISTING $DAXWEEDER IS LIVE ON PUMP.FUN 🚀 &nbsp;</p>
      </div>
      <header className="text-gray-50 mb-0 px-4 w-full flex items-center justify-center">
        <div className="flex items-center space-x-10 2xl:space-x-40 tracking-widest text-sm 2xl:text-2xl cursor-pointer">
          <div id="pictures" className="flex mt-8">
            <img
              src="https://i.ibb.co/9HH8g8X/photo-2024-04-18-01-27-03.jpg"
              className="w-40 h-40 rounded-full border border-4 border-gray-50"
              alt="logo"
              onClick={() => window.location.reload()}
            />
          </div>
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <Link to="/about">ABOUT</Link>
          </div>
          <div>
            <Link to="/ruglist">LIST OF WEEDERS</Link>
          </div>
          <div>
            <Link to="/social">SOCIALS</Link>
          </div>
          <div>
            <Link to="/report">JOIN WEEDERS</Link>
          </div>
        </div>
      </header>
    </>
  );
}
