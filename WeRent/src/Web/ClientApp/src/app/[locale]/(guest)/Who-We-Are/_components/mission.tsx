import Image from "next/image";
import React from "react";
import imgMission from '@/src/assets/images/rentalView.png'

function Mission() {
  return (
    <div className="mb-24">
      <h2 className="text-2xl text-center text-blue mb-4">Our mission</h2>
      <h3 className="text-3xl text-center mb-4">Epowering Rental Business</h3>
      <p className="text-grayMedium text-xl text-center font-Regular max-w-[970px] mx-auto mb-6 leading-8">
        At okoRent, we empower businesses to streamline their rental processes
        with our advanced software solutions. Founded with the vision to
        simplify rental management, our platform enhances the efficiency and
        customer experience for companies across the globe
      </p>
      <Image
        alt="mission"
        width={842.27}
        height={704.48}
        src={imgMission}
        className="max-w-[840px] w-full block mx-auto h-auto"
      />
    </div>
  );
}

export default Mission;
