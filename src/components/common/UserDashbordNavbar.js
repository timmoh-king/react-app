/**
 * @Author: Your name
 * @Date:   2022-06-17 09:50:16
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-06-19 18:04:00
 */

function UserDashbordNavbar() {
  return (
    <div className="bg-bima-white w-full h-25 h-[50px] drop-shadow-xl">
      <div className="container d-flex inline-flex">
        <p className="basis-3/12 font-semibold text-bima-title text-xl mt-3 text-start ">
          <span className="text-bima-green">Business</span> Logo
        </p>
        <ul className="basis-3/12 inline-flex mt-3 text-bima-grey space-x-6 justify-items-center">
          <li className="text-bima-green  ">Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <div className="basis-3/12 bg-white mt-3 inline-flex ml-10">
          <img src="https://i.pinimg.com/originals/41/c3/5a/41c35acc2b28b5d62faab64cbd59555f.jpg"className="rounded-full h-[20px] w-[20px] mt-1 ml-14" alt="profile "/>
          <p className="text-bima-grey ml-2 items-end ">Software Developer</p>
        </div>
        <div className="basis-3/12 bg-bima-white items-end content-end text-end">
          <button className="bg-bima-skyblue min-w-[145px] h-[30px] rounded-md text-bima-white mt-2 items-end content-end ">
            Sign up
          </button>
        </div>
      </div>
      {/* <img className="bg-bima-grey w-[246px] h-[43px]" src = "images/BimalinkLogo.png" alt="Bimalink Logo" /> */}
    </div>
  );
}

export default UserDashbordNavbar;
