import med from "../assets/Emojis/meh.webp";
import bulls from "../assets/Emojis/bulls-eye.webp";
import thumbs from "../assets/Emojis/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Imojis = ({ rating }: Props) => {
  if (rating < 3) return null;
  const images: { [key: number]: ImageProps } = {
    3: { src: med, alt: "med" },
    4: { src: bulls, alt: "bulls" },
    5: { src: thumbs, alt: "thumbs" },
  };
  return <Image {...images[rating]} width={"35px"} />;
};

export default Imojis;
