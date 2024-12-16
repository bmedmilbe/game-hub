import React from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaLinux,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaXRay,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const PlatformList = ({ platforms }: Props) => {
  const Icons: { [key: string]: IconType } = {
    // linux: FaLinux,
    // pc: FaWindows,
    // playstation: FaPlaystation,
    // xbox: FaXbox,
    // xray: FaXRay,
    // mac: FaApple,
    // nintendo: SiNintendo,
    // android: FaAndroid,
    // ios: MdPhoneIphone,
    // web: BsGlobe,
  };
  return (
    <>
      {platforms.map(
        (platform) => (
          <Text key={platform.id}>{platform.name}</Text>
        )
        // <Icon as={Icons[platform.slug]} />
      )}
    </>
  );
};

export default PlatformList;
