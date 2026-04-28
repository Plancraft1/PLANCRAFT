import Link from "../../../components/Link/Link";

export const contactData = {
  name: "Kontakt",
  header: "Společně změníme vaše vize ve skutečnost",
  contactCover: {
    src: "/img/contactpage-2.jpg",
    alt: "Společně změníme vaše vize ve skutečnost",
    width: 840,
    height: 600,
  },

  items: [
    {
      header: "Ing. Daniel Ryšavý",
      body: (
        <Link href={"tel:+420774987654"} className="underline" noArrow>
          +420 732 870 325
        </Link>
      ),
    },
    {
      header: "Email",
      body: (
        <Link href={"mailto:info@plancraft.eu"} className="underline" noArrow>
          info@plancraft.eu
        </Link>
      ),
    },
    { header: "IČO", body: "10856587" },
    {
      header: "Sídlo",
      body: "Bratislavská 206/21,\nZábrdovice, 602 00 Brno ",
    },
    {
      header: "Provozovna",
      body: "Plynárenská 499/1,\n602 00 Brno-střed",
    },
  ],
};
