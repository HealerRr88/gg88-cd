import { LINK_KEYS } from "../../../utils/configs";
import LinkItem from "../item";
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import { LINK_DEVICES, DEFAULT_LINKS } from "../../../utils/configs";
import speed_check_img from '../../../assets/images/speed-check.webp';

export default function LinkMB({ links }) {

  const [linksState, setLinksState] = useState([]);

  useEffect(() => {
    const mbLinks = links.filter(x => x.device === LINK_DEVICES.mb && x.key.startsWith(LINK_KEYS.PRE_KEY.mb));
    const allLinks = links.filter(x => x.device === LINK_DEVICES.all && x.key.startsWith(LINK_KEYS.PRE_KEY.all));

    if (mbLinks && mbLinks.length > 0) {
      setLinksState(mbLinks)
    }
    else if (allLinks && allLinks.length > 0) {
      setLinksState(allLinks)
    }
  }, [links])

  return (
    <>
      <div className={`position-relative d-flex flex-wrap pt-3 pb-5 px-2 mt-4 ${styles.linksContainer}`}>
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
                url={link.mb}
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