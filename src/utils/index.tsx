import { Facebook, Instagram, Pinterest, Twitter } from "../data/icons";

export const getSocialLogo = (
  socialName: string,
  className: string
): JSX.Element | null => {
  switch (socialName) {
    case "Facebook":
      return <Facebook className={className} />;

    case "Twitter":
      return <Twitter className={className} />;

    case "Instagram":
      return <Instagram className={className} />;

    case "Pinterest":
      return <Pinterest className={className} />;

    default:
      return null;
  }
};
