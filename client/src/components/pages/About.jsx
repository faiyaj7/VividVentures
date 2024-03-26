import React from "react";
import furniture1 from "../../assets/furniture1.webp";
import furniture2 from "../../assets/furniture2.webp";
import useDocumentTitle from "../ComponentTitle";
const About = () => {
  useDocumentTitle("VividVentures | About");
  return (
    <section className="px-4 mt-10">
      <h1 className="font-bold text-2xl lg:w-[35%] mx-auto text-center w-full">
        Makes everything so much easier it's even more with melor
      </h1>
      <p className="font-medium text-lg w-full text-center mb-6 text-black/75">
        We believe that when we take care of our home ,they take care of us.
        That's why we make premium quality sheets, sdfa
      </p>
      <div className="flexContainer flex-col lg:flex-row mx-auto px-4 w-[75%] lg:h-[60vh] gap-20 mb-10">
        <img
          src={furniture1}
          alt="furniture1"
          className="w-full h-full object-cover"
        />
        <img
          src={furniture2}
          alt="furniture2"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="w-full lg:w-1/2 mx-auto text-black/85 font-light text-sm mt-3 text-start lg:text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
        exercitationem consequatur quibusdam aliquam velit quo commodi dicta
        atque perspiciatis animi molestiae voluptates minima reiciendis repellat
        repellendus alias quasi blanditiis unde? Voluptates quasi perspiciatis
        repudiandae doloribus praesentium minima molestiae vel commodi, magni
        fugiat. Deleniti dolor consequuntur ea, illo incidunt accusantium iure
        alias tempore placeat quisquam doloremque culpa maxime qui expedita
        velit voluptatem? Deleniti earum eum consectetur dignissimos assumenda
        rem deserunt molestias in. Corrupti quidem pariatur odio eum inventore
        accusantium sit! A iste facilis dolorum accusantium, commodi
        reprehenderit nisi aliquid deserunt quisquam, autem impedit. Adipisci
        vero nihil dolores inventore, cum praesentium distinctio.
      </p>
    </section>
  );
};

export default About;
