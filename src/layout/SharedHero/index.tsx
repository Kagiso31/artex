import sharedHeroBg from "../../assets/shared/banner.jpg";

const SharedHero = () => {
  return (
    <div
      className="shared-hero"
      style={{ backgroundImage: `url('${sharedHeroBg}')` }}
    />
  );
};

export default SharedHero;
