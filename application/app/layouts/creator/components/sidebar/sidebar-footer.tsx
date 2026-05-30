import Tiktok from "@svg/facebook.svg";
import Instagram from "@svg/MdiInstagram.svg";
import Youtube from "@svg/MdiYoutube.svg";
import Facebook from "@svg/facebook.svg";
import XIcon from "@svg/RiTwitterXFill.svg";
import LinkedIn from "@svg/MdiLinkedin.svg";
import Discord from "@svg/IcBaselineDiscord.svg";
import ChevronLeft from "@svg/MaterialSymbolsChevronLeft.svg";
import * as Base from "./sidebar-footer.styled";

export default function SidebarFooter() {
  return (
    <Base.Wrapper>
      <Base.SocialGrid>
        <Tiktok />
        <Instagram />
        <Youtube />
        <Facebook />
        <XIcon />
        <LinkedIn />
        <Discord />
      </Base.SocialGrid>
      <Base.Content>
        <Base.TextContainer>
          <Base.Copyright>&copy; 2024 Dadan Hidyt</Base.Copyright>
          <Base.Text>Build With ❤️ For All Creator</Base.Text>
        </Base.TextContainer>
      </Base.Content>
    </Base.Wrapper>
  );
}
