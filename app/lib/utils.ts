import { BASE_URL } from "@/app/lib/constant";

export function imagePath(path: string) {
  return `${BASE_URL}${path}`;
}
