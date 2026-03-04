import { Metadata } from "next";
import SimpleFooter from "../../components/SimpleFooter/SimpleFooter";
import Table from "../../components/Table/Table";
import RevealAnimation from "../../components/TextAnimation/RevealAnimation";
import { Medium } from "../../components/Typography/Medium";
import { contactData } from "./(client)/contactData";
import {
  ContactContent,
  ContactCover,
  ContactHero,
  StyledContact,
} from "./(clinet)/StyledContact";

export const metadata: Metadata = {
  title: contactData.name,
  description: contactData.header,
  openGraph: {
    images: contactData.contactCover.src,
    title: contactData.name,
    description: contactData.header,
  },
};

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <StyledContact>
      <ContactHero>
        <ContactContent>
          <RevealAnimation>
            <Medium>{contactData.header}</Medium>
          </RevealAnimation>
          <Table items={contactData.items} delayAnimation={0.5} />
        </ContactContent>
        <RevealAnimation delay={1.5}>
          <ContactCover
            src={contactData.contactCover.src}
            width={contactData.contactCover.width}
            height={contactData.contactCover.height}
            alt={contactData.contactCover.alt}
          />
        </RevealAnimation>
      </ContactHero>
      <SimpleFooter />
    </StyledContact>
  );
};

export default page;
