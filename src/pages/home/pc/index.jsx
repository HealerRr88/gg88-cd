import AppDownloadComponent from "../../../components/app_download";
import HeaderComponent from "../../../components/header";
import LinkPC from "../../../components/link/pc";
import styles from './style.module.css';
import bg_video from '../../../assets/videos/background.mp4';

export default function PCPage({ links }) {

  return (
    <div className="position-relative">
      <div className={`w-100 h-100 position-fixed top-0 start-0 overflow-hidden`}>
        <video autoPlay loop muted className={`w-100 h-100 object-fit-cover object-position-center`}>
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
      <div className={`container position-absolute top-0 start-50 translate-middle-x`}>
        <HeaderComponent
          links={links}
        />
        <LinkPC
          links={links}
        />
        <AppDownloadComponent
          links={links}
        />
      </div>


    </div>
  );
}