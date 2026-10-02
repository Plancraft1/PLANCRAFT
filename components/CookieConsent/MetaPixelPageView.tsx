"use client";

import { useConsentManager } from "@c15t/nextjs";
import { metaPixelEvent } from "@c15t/scripts/meta-pixel";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

// Initial PageView is queued by c15t when the pixel installs;
// this only tracks client-side route changes.
const MetaPixelPageView = () => {
  const { has } = useConsentManager();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrl = useRef<string | null>(null);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (lastUrl.current === null) {
      lastUrl.current = url;
      return;
    }
    if (lastUrl.current === url) return;
    lastUrl.current = url;
    if (has("marketing") && typeof window.fbq === "function") {
      metaPixelEvent("PageView");
    }
  }, [pathname, searchParams, has]);

  return null;
};

export default MetaPixelPageView;
