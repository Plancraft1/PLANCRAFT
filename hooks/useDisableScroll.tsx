"use client";

import { useEffect } from "react";

export const useDisableScroll = (disabled: boolean) => {
  useEffect(() => {
    if (!disabled) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [disabled]);
};
