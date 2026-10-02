"use client";

import {
  ConsentBanner,
  ConsentDialog,
  ConsentManagerProvider,
} from "@c15t/nextjs";
import { metaPixel } from "@c15t/scripts/meta-pixel";
import { ReactNode, Suspense } from "react";
import MetaPixelPageView from "./MetaPixelPageView";
import { cookieConsentTheme } from "./theme";
import { csTranslations } from "./translations";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const scripts = FB_PIXEL_ID ? [metaPixel({ pixelId: FB_PIXEL_ID })] : [];

const CookieConsent = ({ children }: { children: ReactNode }) => {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "marketing"],
        overrides: { country: "CZ", language: "cs" },
        i18n: {
          locale: "cs",
          detectBrowserLanguage: false,
          messages: { cs: csTranslations },
        },
        scripts,
        theme: cookieConsentTheme,
        colorScheme: "light",
      }}
    >
      <ConsentBanner hideBranding primaryButton="accept" />
      <ConsentDialog hideBranding />
      <Suspense>
        <MetaPixelPageView />
      </Suspense>
      {children}
    </ConsentManagerProvider>
  );
};

export default CookieConsent;
