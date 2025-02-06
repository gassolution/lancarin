import { MetadataRoute } from "next";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.lancarin.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(), // Optional: Add lastModified date
        },
        {
            url: `${baseUrl}/tentang`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/layanan`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel/jangan-nunggu-ac-rusak-baru-panik`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel/minyak-bekas-bikin-ribet-ini-solusinya`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/artikel/saluran-lancar-hidup-tenang-tips-ampuh-atasi-pipa-mampet`,
            lastModified: new Date().toISOString(),
        },
    ];
}
