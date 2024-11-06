import LifeSciencesAPIProductsCard from "@/components/LifeSciencesAPIProductsCard";
import { lifeSciencesAPIProducts } from "@/constants";

const LifeSciencesAPIProducts = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex flex-col bg-white px-5 lg:px-10">
        <div className="w-full flex flex-col lg:flex-row justify-start lg:gap-[300px] py-[60px] lg:py-[80px]">
          <p className="font-subHeading text-black font-medium text-[14px] lg:text-[18px] mb-10">
          Enhance Therapeutic Applications with our APIs
          </p>
          <h3 className="font-subHeading text-[24px] leading-8 lg:text-[18px] lg:leading-[26px]  lg:w-[600px]">
          We focus on providing high-quality APIs for a wide range of therapeutic applications. Our products are versatile and blend into various medication categories such as Anti-Diabetic, Anti-Inflammatory, Pain Management, Anti-Alzhdeimer, CNS disorder, and many more.
          </h3>
        </div>
        <div
          id="life-sciences-api-products"
          className=" w-full h-fit items-center justify-start gap-x-10 flex flex-row flex-wrap mb-10 lg:mb-0"
          //   style={{ border: "2px solid black" }}
        >
          {/* In this div, purposefully added a padding-x because the card width is becoming too large for desktop sizes */}
          {lifeSciencesAPIProducts.map((product, index) => (
            <LifeSciencesAPIProductsCard
              key={index}
              title={product.title}
              description={product.description}
              EmpiricalFormula={product.EmpiricalFormula}
              CASNumber={product.CASNumber}
              MolecularWeight={product.MolecularWeight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeSciencesAPIProducts;
