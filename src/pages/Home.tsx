import HomeHeader from "../components/home/HomeHeader";
import Services from "../components/home/Services";
import { Container } from "../style/global.style";

const Home = () => {
  return (
    <Container>
      <HomeHeader />
      <Services />
    </Container>
  );
};

export default Home;
