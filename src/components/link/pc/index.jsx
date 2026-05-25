import styles from './style.module.css';
import LinkItem from "../item";
import speed_check_img from '../../../assets/images/speed-check.webp';

export default function LinkPC({ links }) {

  return (
    <>
      <div className={`position-relative d-flex pt-4 px-4 pb-5 mt-4 ${styles.linksContainer}`}>
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

        <div className={`position-absolute start-50 translate-middle-x ${styles.speedCheckContainer}`}>
          <img src={speed_check_img} alt="speed_check_img" />
        </div>
      </div>
    </>
  )
}