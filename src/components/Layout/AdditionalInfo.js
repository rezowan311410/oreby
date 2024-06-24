import React from "react";
import { FaCarSide } from "react-icons/fa";
import { RxReload } from "react-icons/rx";
import { TbNumber2 } from "react-icons/tb";
import Container from "./Container";
import Flex from "./Flex";
const AdditionalInfo = () => {
  return (
    <div className="mt-[-6px] border border-solid border-[#f0f0f0] py-7">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-x-4">
            <TbNumber2 className="text-2xl" />
            <p className="font-dm text-base font-normal text-[#6d6d6d]">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-4">
            <FaCarSide className="text-2xl" />
            <p className="font-dm text-base font-normal text-[#6d6d6d]">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-4">
            <RxReload className="text-2xl" />
            <p className="font-dm text-base font-normal text-[#6d6d6d]">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
