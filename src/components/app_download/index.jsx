import { LINK_KEYS } from '../../utils/config';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import styles from './style.module.css';
import app_android from '../../assets/images/app-android.webp';
import app_ios from '../../assets/images/app-ios.webp';
import { getLinkByKey } from '../../utils/functions';

export default function AppDownloadComponent({ links }) {

  return (
    <div className={`col-md-6 col-12 mx-auto mt-md-5 my-4 p-md-4 p-3 rounded-4 d-flex align-items-center justify-content-center ${styles.appDownloadContainer}`}>
      <Link
        to={
          getLinkByKey(links, LINK_KEYS.TAI_APP_ANDROID, isMobile)
        }
        className='flex-fill'
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={app_android} alt="app_android" className={`w-100`} />
      </Link>
      <Link
        to={
          getLinkByKey(links, LINK_KEYS.TAI_APP_IOS, isMobile)
        }
        className='flex-fill ms-md-4 ms-3'
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={app_ios} alt="app_ios" className={`w-100`} />
      </Link>
    </div>
  )
}