import Image from "next/image";
import img1 from "@/public/frame1.png";
import img2 from "@/public/frame2.png";
import img3 from "@/public/frame3.png";
import bg from "@/public/gradient.png";

const Frame = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <h2 className="text-2xl text-center py-10">
        You are
        <span className="font-bold text-[#23A2FC]"> 90% more likely</span> to
        get hired if you use AI Apply
      </h2>
      <section className="flex justify-center pb-5 gap-5">
        <div className="p-5">
          <Image src={img1} alt="Frame 1" />
        </div>
        <div className="p-5">
          <Image src={img2} alt="Frame 2" />
        </div>
        <div className="p-5">
          <Image src={img3} alt="Frame 3" />
        </div>
      </section>
    </div>
  );
};

export default Frame;
