import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.gas-solution.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

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
            url: `${baseUrl}/artikel`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/information`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel/pentingnya-servis-ac-berkala-untuk-kenyamanan-dan-efisiensi`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel/saluran-lancar-hidu-tenang-tips-ampuh-atasi-pipa-mampet`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel/minyak-bekas-bikin-ribet-ini-solusinya`,
            lastModified: new Date().toISOString(),
        },
    ];
}
