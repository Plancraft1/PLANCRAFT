"use client";

import { usePathname } from "next/navigation";
import { spaces } from "../../consts/spaces";
import Divider from "../Divider/Divider";
import Link from "../Link/Link";
import Logo from "../Svgs/Logo";
import { Medium } from "../Typography/Medium";
import { Micro } from "../Typography/Micro";
import { Mini } from "../Typography/Mini";
import {
  FooterContact,
  FooterContactAddress,
  FooterContactLinks,
  FooterContactText,
  FooterCopywrite,
  FooterLogo,
  FooterPublicity,
  PublicityLogo,
  PublicityLogos,
  StyledFooter,
} from "./StyledFooter";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const pathname = usePathname();
  const pageWithSimpleFooter = ["/kontakt", "/contact"];
  if (pageWithSimpleFooter.includes(pathname)) return null;

  return (
    <StyledFooter data-hide-navbar key={pathname}>
      <Divider fill='white' />
      <FooterContact>
        <FooterContactText>
          <Mini className='white'>
            Hledáte pomoc s vaším projektem? Nabízíme konzultace, rady a návrhy
            pro optimální řešení. Kontaktujte nás a společně postavíme váš
            projekt na pevné základy.
          </Mini>
        </FooterContactText>
        <FooterContactLinks>
          <Link href={"tel: +420732870325"}>
            <Medium className='white'>+420 732 870 325</Medium>
          </Link>
          <Link href={"mailto:info@plancraft.eu"}>
            <Medium className='white'>info@plancraft.eu</Medium>
          </Link>
        </FooterContactLinks>
        <FooterContactAddress>
          <Mini className='break-lines white'>
            {`Plancraft s.r.o.\nIČO: 10856587\nBratislavská 206/21,\nZábrdovice, 602 00 Brno`}
          </Mini>
        </FooterContactAddress>
      </FooterContact>
      <Divider fill='white' hidePlus />
      <FooterLogo>
        <Logo fill='white' />
      </FooterLogo>
      <Divider fill='white' hidePlus />
      <FooterCopywrite>
        <Mini className='white'>{new Date().getFullYear()} PLANCRAFT</Mini>
        <Mini className='white tar'>
          Made with Style & Ease by{" "}
          <Link
            noArrow
            className='underline inline'
            href={"https://steezy.studio"}
            target={"_blank"}
          >
            steezy.studio
          </Link>
        </Mini>
      </FooterCopywrite>
      {/* <Divider fill='white' /> */}
      <FooterPublicity>
        <Micro className='primary400' as={"div"}>
          <p style={{ marginBottom: spaces.xs }}>
            V roce 2025 dochází k čerpání dotace z Výzvy č. 464 - Kreativní
            vouchery III v rámci Národního plánu obnovy - iniciativa Kreativní
            vouchery komponenty 4.5 Rozvoj kulturního a kreativního sektoru.
            Projekt je realizován za finanční spoluúčasti Evropské unie
            prostřednictvím Národního plánu obnovy a Ministerstva kultury České
            republiky.
          </p>
          <p>
            V roce 2023 dochází k čerpání dotace z Výzvy č. 0383 - Kreativní
            vouchery v rámci Národního plánu obnovy - iniciativa Kreativní
            vouchery komponenty 4.5 Rozvoj kulturního a kreativního sektoru s
            názvem: Plancraft_Kreativní voucher. Projekt je realizován za
            finanční spoluúčasti Evropské unie prostřednictvím Národního plánu
            obnovy a Ministerstva kultury České republiky.
          </p>
        </Micro>
        <PublicityLogos>
          <PublicityLogo src={"/img/financovano-eu.svg"} />
          <PublicityLogo src={"/img/narodni-plan-obnovy.svg"} />
          <PublicityLogo src={"/img/ministrstvo-kultury.svg"} />
        </PublicityLogos>
      </FooterPublicity>
    </StyledFooter>
  );
};

export default Footer;
