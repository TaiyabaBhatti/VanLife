import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import Button from "../../components/ui/Button";
import VanCard from "./VanCard";

export default function Vans() {
  return (
    <>
      <Wrapper className="mb-10 space-y-10 mt-14">
        <div className="space-y-5">
          <h1 className="font-bold text-3xl">Explore our van options</h1>
          <div className="flex flex-row gap-3  items-center ">
            <Button
              text="Simple"
              bgColor="bg-dull-orange"
              textColor="text-gray-600"
            />
            <Button
              text="Luxury"
              bgColor="bg-dull-orange"
              textColor="text-gray-600"
            />
            <Button
              text="Rugged"
              bgColor="bg-dull-orange"
              textColor="text-gray-600"
            />

            <button className="text-base text-gray-600 underline">
              Clear filters
            </button>
          </div>
        </div>

        {/* vans list */}
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-12 justify-start">
          <VanCard />
        </div>
      </Wrapper>
    </>
  );
}
