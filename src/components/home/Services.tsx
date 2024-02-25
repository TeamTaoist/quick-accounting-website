import styled from "styled-components";
import arrow from "../../assets/images/home/arrow.svg";
import daoIcon from "../../assets/images/home/dao-icon.svg";

const Services = () => {
  return (
    <ServiceSection>
      <h3>SERVICE FOR</h3>
      <ServiceList>
        <Service>
          <ServiceLogo>
            <img src={daoIcon} alt="" />
          </ServiceLogo>
          <p>DAO(Decentralized autonomous organization)</p>
          <a href="#">
            Learn more <img src={arrow} alt="" />
          </a>
        </Service>
        <Service>
          <ServiceLogo>
            <img src={daoIcon} alt="" />
          </ServiceLogo>
          <p>DAO(Decentralized autonomous organization)</p>
          <a href="#">
            Learn more <img src={arrow} alt="" />
          </a>
        </Service>
        <Service>
          <ServiceLogo>
            <img src={daoIcon} alt="" />
          </ServiceLogo>
          <p>DAO(Decentralized autonomous organization)</p>
          <a href="#">
            Learn more <img src={arrow} alt="" />
          </a>
        </Service>
      </ServiceList>
    </ServiceSection>
  );
};

export default Services;

const ServiceSection = styled.section`
  text-align: center;
  h3 {
    font-size: 32px;
    font-weight: 600;
  }
`;
const ServiceList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  margin-top: 24px;
`;
const Service = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  max-width: 400px;
  background-color: #5d98ae;
  z-index: 1;
  p {
    font-size: 18px;
    color: var(--text-primary);
  }
  a {
    font-size: 13px;
    display: flex;
    gap: 6px;
    text-decoration: none;
    color: var(--text-yellow);
  }
  a > img {
    width: 18px;
  }
`;
const ServiceLogo = styled.section`
  img {
    width: 80px;
  }
`;
