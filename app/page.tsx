'use cache';
import { unstable_cacheLife as cacheLife } from "next/cache";

export const experimental_ppr = true;

export default function Home() {
  cacheLife("seconds");
  return null;
}
