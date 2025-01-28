import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
    return {
        rules: {
            // all the user agents from all Search engines
            userAgent: '*',
            allow: ["/"],
            disallow: []
        },
        sitemap: 'gas-solution.com/sitemap.xml'
    }
}