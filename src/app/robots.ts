import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*", // Izinkan semua bot
                allow: ["/"],
            },
        ],
        sitemap: "https://lancarin.com/sitemap.xml",
    };
}
