import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { randomInterger } from '../../../utils/functions';
import { isMobile } from 'react-device-detect';
import styles from './style.module.css';
import link_bg from '../../../assets/images/link-bg.webp';

export default function LinkItem({
  index,
  url,
}) {
  const [speed, setSpeed] = useState(randomInterger(100, 200));

  useEffect(() => {
    const intervalTime = randomInterger(1000, 5000);
    const interval = setInterval(() => {
      const newSpeed = randomInterger(100, 200);
      setSpeed(newSpeed);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Link to={url} className={`col-md-2 col-4 px-md-3 px-2 ${(isMobile && index >= 3 ? 'mt-2' : '')}`} target="_blank" rel="noopener noreferrer">
      <div className="position-relative px-md-4">
        <img className="w-100" src={link_bg} alt="link_bg" />
        <div className={`position-absolute top-50 start-50 translate-middle d-flex align-items-center gap-1 fw-bold ${styles.speedContainer}`}>
          <div>{speed}</div>
          <div>ms</div>
        </div>
      </div>
      <div className={`text-white text-center fw-bold rounded-pill mt-1 ${styles.linkBtn}`}>
        LINK {index + 1}
      </div>
    </Link>
  )
}