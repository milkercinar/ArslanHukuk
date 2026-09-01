"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` sunucuda uyarı üretir; GSAP kurulumlarını ilk boyamadan
 * önce yapabilmek için istemcide layout, sunucuda normal effect kullanılır.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
