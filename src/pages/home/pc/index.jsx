import AppDownloadComponent from "../../../components/app_download";
import HeaderComponent from "../../../components/header";
import LinkPC from "../../../components/link/pc";
import styles from './style.module.css';
import bg_video from '../../../assets/videos/background.mp4';
import { createRef, Fragment, useRef } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";
import { buildFileUrl } from "../../../utils/functions";
import { DEVICES, LINK_PREFIX, R2_BUCKET_URL } from "../../../utils/config";

export default function PCPage({ links, gifs }) {

  const gifsRef = useRef([]);

  const getGifRef = (index) => {
    if (!gifsRef.current[index]) {
      gifsRef.current[index] = createRef();
    }

    return gifsRef.current[index];
  };

  return (
    <>
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
            links={
              links.filter(link => link.key.startsWith(LINK_PREFIX) && (link.device === DEVICES.DESKTOP || link.device === DEVICES.ALL))
            }
          />
          <AppDownloadComponent
            links={links}
          />
        </div>
      </div>

      {
        gifs.length > 0 && gifs.map((item, index) => {
          const gifRef = getGifRef(index);

          return (
            <Fragment key={index}>
              {
                item.file && (
                  <Draggable
                    axis="both"
                    defaultPosition={{ x: 0, y: 0 }}
                    nodeRef={gifRef}
                  >

                    <div
                      ref={gifRef}
                      style={{
                        position: 'fixed',
                        right: `${item.xPosition}${item.xPositionUnit}`,
                        bottom: `${item.yPosition}${item.yPositionUnit}`,
                        zIndex: 9999,
                      }}
                    >
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onDragStart={(event) => event.preventDefault()}
                      >
                        <img
                          className={`object-fit-cover`}
                          style={{ width: item.width ? `${item.width}${item.widthUnit}` : 200, height: item.height ? `${item.height}${item.heightUnit}` : 'auto' }}
                          src={buildFileUrl(R2_BUCKET_URL, item.file?.path)}
                          alt={item.title}
                          onDragStart={(event) => event.preventDefault()}
                        />
                      </Link>
                      <div
                        className={`position-absolute top-0 start-100 translate-middle cursor-pointer ${styles.closeButton}`}
                        onClick={() => {
                          if (gifRef.current) {
                            gifRef.current.style.display = 'none';
                          }
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                        </svg>
                      </div>
                    </div>
                  </Draggable>

                )
              }
            </Fragment>
          );
        })
      }
    </>
  );
}