import { useQuery } from "react-query";
import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";
import LinkService from "../../services/link";
import PageLoading from "../../components/loading/page";
import { LINK_DEVICES } from "../../utils/configs";

export default function HomePage() {
  const LINKS_KEY = 'links';
  const linkService = new LinkService();

  const linksData = useQuery(
    [LINKS_KEY],
    () => linkService.getAll(),
    {
      refetchOnWindowFocus: true,
    }
  );

  if (linksData.isLoading) {
    return <PageLoading />
  }

  return (
    <div className="App">
      {
        isMobile
          ? <MBPage
            links={linksData.data.filter(link => link.device === LINK_DEVICES.mb || link.device === LINK_DEVICES.all)}
          />
          : <PCPage
            links={linksData.data.filter(link => link.device === LINK_DEVICES.pc || link.device === LINK_DEVICES.all)}
          />
      }
    </div>
  )
}