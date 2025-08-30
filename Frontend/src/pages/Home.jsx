import Card from "../components/Card";
import SlideWindow from "../components/SlideWindow";
import Title from "../components/Title";

const Home = () => {
  return (
    <div className="p-5">
      <div className="overflow-hidden">
        <SlideWindow />
      </div>
      <Title text1={"Latest"} text2={"Tractor's"} />

      <div className="outline">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Home;
