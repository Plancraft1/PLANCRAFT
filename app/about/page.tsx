import { Metadata } from "next";
import Button from "../../components/Button/Button";
import ClientQuote from "../../components/ClientQuote/ClientQuote";
import DividerHeader from "../../components/Divider/DividerHeader";
import FigureBanner from "../../components/FigureBanner/FigureBanner";
import NumberedList from "../../components/NumberedList/NumberedList";
import PageIntro from "../../components/PageIntro/PageIntro";
import Partners from "../../components/Partners/Partners";
import RevealAnimation from "../../components/TextAnimation/RevealAnimation";
import { Medium } from "../../components/Typography/Medium";
import { Mini } from "../../components/Typography/Mini";
import {
  AboutTeam,
  AboutTeamClaim,
  AboutTeamClaimHeader,
  AboutTeamClaimImage,
  AboutTeamClaimInner,
  AboutTeamFigureBanner,
  AboutTeamIntro,
  AboutValues,
  StyledAbout,
} from "./(client)/StyledAbout";
import { aboutData } from "./(client)/aboutData";

export const metadata: Metadata = {
  title: aboutData.name,
  description: aboutData.introPerex,
  openGraph: {
    images: aboutData.figureBanner.image.src,
    title: aboutData.heroHeader,
    description: aboutData.introPerex,
  },
};

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <StyledAbout>
      <PageIntro
        heroHeader={aboutData.heroHeader}
        figureBanner={aboutData.figureBanner}
        introPerex={aboutData.introPerex}
        scrollFigureBanner={aboutData.scrollFigureBanner}
      />
      {/* <AboutValues>
        <DividerHeader>
          <Mini className='uppercase'>Naše hodnoty</Mini>
        </DividerHeader>
        <NumberedList items={aboutData.numberedList} />
      </AboutValues> */}
      <AboutTeam>
        <AboutTeamIntro>
          <DividerHeader>
            <Mini className="uppercase">Náš tým</Mini>
          </DividerHeader>
          {/* <AboutTeamFigureBanner>
            <FigureBanner
              className='flip align-top'
              src={aboutData.ourTeam.figureBanner.image.src}
              width={aboutData.ourTeam.figureBanner.image.width}
              height={aboutData.ourTeam.figureBanner.image.height}
              alt={aboutData.ourTeam.figureBanner.image.alt}>
              <RevealAnimation delay={0.5}>
                <Mini>{aboutData.ourTeam.figureBanner.perex}</Mini>
              </RevealAnimation>
            </FigureBanner>
          </AboutTeamFigureBanner> */}
        </AboutTeamIntro>
        <AboutTeamClaim>
          <RevealAnimation>
            <AboutTeamClaimHeader>
              <Medium className="wide">{aboutData.ourTeam.teamClaim}</Medium>
            </AboutTeamClaimHeader>
          </RevealAnimation>
          <AboutTeamClaimInner>
            <RevealAnimation>
              <AboutTeamClaimImage
                src={aboutData.ourTeam.teamClaimImage.src}
                width={aboutData.ourTeam.teamClaimImage.width}
                height={aboutData.ourTeam.teamClaimImage.height}
                alt={aboutData.ourTeam.teamClaimImage.alt}
              />
            </RevealAnimation>
            <RevealAnimation noCrop>
              <Button href={"/kontakt"}>{"Napište nám"}</Button>
            </RevealAnimation>
          </AboutTeamClaimInner>
        </AboutTeamClaim>
        <ClientQuote
          quote={aboutData.quote.quote}
          client={aboutData.quote.client}
        />
      </AboutTeam>
      <Partners />
    </StyledAbout>
  );
};

export default page;
