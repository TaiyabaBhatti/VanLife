import React from "react";
import Wrapper from "../../components/ui/Wrapper";
import Button from "../../components/ui/Button";
import VanCollection from "./VanCollection";
import { Link, useParams } from "react-router-dom";
import TabFilter from "./TabFilter";

export default function Vans() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Wrapper className="mb-10 space-y-10 mt-14">
        <div className="space-y-5">
          <h1 className="font-bold text-3xl">Explore our van options</h1>
          <div className="flex flex-row gap-3  items-center ">
            <TabFilter text="Simple" path={`type=simple`} />
            <TabFilter text="Luxury" path={`type=luxury`} />
            <TabFilter text="Rugged" path={`type=rugged`} />

            {/* . represent current path without any string after ? */}
            <Link to={"."} className="text-base text-gray-600 underline">
              Clear filters
            </Link>
          </div>
        </div>

        {/* vans list */}
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-12 justify-start">
          <VanCollection />
        </div>
      </Wrapper>
    </>
  );
}
