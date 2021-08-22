import dynamic from "next/dynamic";
import { useRouter } from "next/dist/client/router";
const HomePage = dynamic(() => import("../components/homePage/HomePage"));
const UseCases = dynamic(() => import("../components/useCases/UseCases"));
const Pricing = dynamic(() => import("../components/pricing/Pricing"));

export default function Home() {
  const router = useRouter();
  const page = router.query.page || "home";
  const whichPage = {
    home: HomePage,
    usecases: UseCases,
    pricing: Pricing,
  };
  const Content = whichPage[page] || HomePage;

  return <Content />;
}
