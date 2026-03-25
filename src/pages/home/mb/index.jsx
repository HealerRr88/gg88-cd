import AppDownloadComponent from "../../../components/app_download";
import HeaderComponent from "../../../components/header";
import LinkMB from "../../../components/link/mb";
import bg_video_mb from '../../../assets/videos/background-mb.mp4';

export default function MBPage({ links }) {

  return (
    <div className="position-relative">
      <div className={`w-100 h-100 position-fixed top-0 start-0 overflow-hidden`}>
        <video autoPlay loop muted className={`w-100 h-100 object-fit-cover object-position-center`}>
          <source src={bg_video_mb} type="video/mp4" />
        </video>
      </div>
      <div className={`container position-absolute top-0 start-50 translate-middle-x`}>
        <HeaderComponent
          links={links}
        />
        <LinkMB
          links={links}
        />
        <AppDownloadComponent
          links={links}
        />
      </div>
    </div>
  );
}