import { Link } from 'react-router-dom';
import logo from 'images/Logo.png';
import voteLogo from 'images/vote-table.png';
import breedsLogo from 'images/pet-breeds.png';
import galleryLogo from 'images/images-search.png';

export const AppMenu = () => {
  return (
    <div>
      <a href="*">
        <img src={logo} alt="Logo" className="mb-[75px]" />
      </a>
      <h1 className="mb-[10px] font-bold text-[44px] leading-[58px] text-[#1D1D1D]">
        Hi Intern!
      </h1>
      <p className="mb-[60px] font-normal text-[20px] leading-[29px] text-[#8C8C8C]">
        Welcome to MI 2022 Front-end test
      </p>
      <h2 className="mb-[20px] font-medium text-[20px] leading-[29px] text-[#1D1D1D]">
        Lets start using Cat API
      </h2>

      <ul className="flex justify-center align-center ml-[6px]">
        <li className="mr-[10px] group">
          <Link to={'voting'}>
            <div className="mb-[10px] bg-[#B4B7FF] rounded-[20px] border-[4px] border-[rgba(255, 255, 255, 0.6)] group-hover:border-[#FFFFFF]">
              <img
                src={voteLogo}
                alt="Voting"
                className="py-[37px] px-[19px]"
              />
            </div>
            <p className="text-[#FF868E] text-[12px] leading-[16px] text-center font-medium rounded-[10px] bg-[#FFFF] group-hover:bg-[#FBE0DC] py-[10px]">
              VOTING
            </p>
          </Link>
        </li>
        <li className="mr-[10px] group">
          <Link to={'breeds'}>
            <div className="mb-[10px] bg-[#97EAB9] rounded-[20px] border-[4px] border-[rgba(255, 255, 255, 0.6)] group-hover:border-[#FFFFFF]">
              <img
                src={breedsLogo}
                alt="Breeds"
                className="py-[18px] px-[11px]"
              />
            </div>
            <p className="text-[#FF868E] text-[12px] leading-[16px] text-center font-medium rounded-[10px] bg-[#FFFF] group-hover:bg-[#FBE0DC] py-[10px]">
              BREEDS
            </p>
          </Link>
        </li>
        <li className="group">
          <Link to={'gallery'}>
            <div className="mb-[10px] bg-[#FFD280] rounded-[20px] border-[4px] border-[rgba(255, 255, 255, 0.6)] group-hover:border-[#FFFFFF]">
              <img
                src={galleryLogo}
                alt="Gallery"
                className="py-[4px] px-[13px]"
              />
            </div>
            <p className="text-[#FF868E] text-[12px] leading-[16px] text-center font-medium rounded-[10px] bg-[#FFFF] group-hover:bg-[#FBE0DC] py-[10px]">
              GALLERY
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
