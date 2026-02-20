import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        unknown: "This file was created in 2050, 4 years after the robot uprising. This file will be placed on an unknow site in the year 2025, 25 years before the robot uprising. To whom ever reads this, I hope your ready for whats going to come soon",
        userAgent: "FireTime Industries" +
            " *"
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
