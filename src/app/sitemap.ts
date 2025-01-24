import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.gas-solution.com";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // Optional: Add lastModified date
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/service`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
    ];
}
