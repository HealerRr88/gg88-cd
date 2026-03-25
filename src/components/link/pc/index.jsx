import styles from './style.module.css';
import { DEFAULT_LINKS, LINK_DEVICES, LINK_KEYS } from "../../../utils/configs";
import LinkItem from "../item";
import { useEffect, useState } from 'react';
import speed_check_img from '../../../assets/images/speed-check.webp';

export default function LinkPC({ links }) {
  const [linksState, setLinksState] = useState([]);

  useEffect(() => {
    const pcLinks = links.filter(x => x.device === LINK_DEVICES.pc && x.key.startsWith(LINK_KEYS.PRE_KEY.pc));
    const allLinks = links.filter(x => x.device === LINK_DEVICES.all && x.key.startsWith(LINK_KEYS.PRE_KEY.all));

    if (pcLinks && pcLinks.length > 0) {
      setLinksState(pcLinks)
    }
    else if (allLinks && allLinks.length > 0) {
      setLinksState(allLinks)
    }
  }, [links])


  return (
    <>
      <div className={`position-relative d-flex pt-4 px-4 pb-5 mt-4 ${styles.linksContainer}`}>
        {
          linksState && linksState.length > 0 ? (
            linksState.map((link, index) => (
              <LinkItem
                key={index}
                index={index}
                url={link.url}
              />
            ))
          ) : (
            DEFAULT_LINKS.LINKS.map((link, index) => (
              <LinkItem
                key={index}
                index={index}
                url={link.pc}
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