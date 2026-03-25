import { Link } from 'react-router-dom';
import { DEFAULT_LINKS, LINK_KEYS } from '../../utils/configs';
import { isMobile } from 'react-device-detect';
import styles from './style.module.css';
import logo from '../../assets/images/logo.webp';
import back_home_img from '../../assets/images/back-home.webp';
import { getLinkByKey } from '../../utils/functions';
import slogan_mb from '../../assets/images/slogan-mb.webp';
import ball_deck from '../../assets/images/ball-deck.webp';
import ball_gif from '../../assets/images/ball.gif';
import title_img from '../../assets/images/title.webp';

export default function HeaderComponent({ links }) {

  return (
    <>
      <div className='pt-4'>
        <div className='position-relative'>
          {
            !isMobile && (
              <Link className={`h-100 position-absolute top-0 start-0 d-flex align-items-center ${styles.backHomeBtn}`} to={
                getLinkByKey(links, LINK_KEYS.HOME, isMobile, DEFAULT_LINKS.TRANG_CHU)
              }>
                <img className='w-100' src={back_home_img} alt="" />
              </Link>
            )
          }
          <div className={`mx-auto ${styles.logo}`}>
            <Link to={
              getLinkByKey(links, LINK_KEYS.HOME, isMobile, DEFAULT_LINKS.TRANG_CHU)
            }>
              <img className='w-100' src={logo} alt="logo" />
            </Link>
            {
              isMobile && (
                <img className='w-100' src={slogan_mb} alt="slogan_mb" />
              )
            }

          </div>
        </div>
      </div>
      <div className='position-relative d-flex justify-content-center mt-4'>
        <div className={`position-relative ${styles.ballDeck}`}>
          <img className='w-100' src={ball_deck} alt="ball_deck" />
          <div className={`position-absolute start-50 translate-middle-x ${styles.ballGif}`}>
            <img className='w-100' src={ball_gif} alt="ball_gif" />
          </div>
        </div>
        <div className={`w-100 text-center position-absolute start-0 ${styles.title}`}>
          <img className='col-md-7 col-12' src={title_img} alt="title_img" />
        </div>
      </div>
    </>
  );
}