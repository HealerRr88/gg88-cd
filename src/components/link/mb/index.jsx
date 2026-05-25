import LinkItem from "../item";
import styles from './style.module.css';
import speed_check_img from '../../../assets/images/speed-check.webp';

export default function LinkMB({ links }) {

  return (
    <>
      <div className={`position-relative d-flex flex-wrap pt-3 pb-5 px-2 mt-4 ${styles.linksContainer}`}>
        {
          links && links.length > 0 && (
            links.map((link, index) => (
              <LinkItem
                key={index}
                index={index}
                url={link.url}
              />
            ))
          )
        }

        <div className={`w-100 text-center position-absolute start-50 translate-middle-x ${styles.speedCheckContainer}`}>
          <img src={speed_check_img} alt="speed_check_img" />
        </div>
      </div>
    </>
  )
}