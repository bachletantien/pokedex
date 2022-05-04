/** @jsxImportSource @emotion/react */
import './footer.scss';
import tw from 'twin.macro';
import { ReactComponent as FaceBook } from '../../assets/svg/facebook.svg';
import { ReactComponent as Insta } from '../../assets/svg/instagram.svg';
import { ReactComponent as Github } from '../../assets/svg/github.svg';

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social">
        <li>
          <a href="" css={tw`text-[#2155CD] hover:bg-[#2155CD] hover:text-white`}>
            <FaceBook />
          </a>
        </li>
        <li>
          <a href="" css={tw`text-[#FF6FB5] hover:bg-[#FF6FB5] hover:text-white`}>
            <Insta />
          </a>
        </li>
        <li>
          <a href="" css={tw`text-[#006E7F] hover:bg-[#006E7F] hover:text-white`}>
            <Github />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
