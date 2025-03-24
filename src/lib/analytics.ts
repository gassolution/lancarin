// analytics.ts - Basic version for Lancarin engineering services website
// Tracks basic user interactions and page visits, storing data in localStorage

interface PageView {
  page: string;
  timestamp: string;
  referrer: string;
  deviceType: string;
}

interface ServiceInteraction {
  serviceName: string;
  interactionType: string; // 'view', 'click', 'inquiry'
  timestamp: string;
  pageLocation: string;
}

class LancarinAnalytics {
  private websiteId: string;
  private sessionId: string;
  private pageViews: PageView[];
  private serviceInteractions: ServiceInteraction[];
  private initialized: boolean;

  constructor(websiteId: string) {
    this.websiteId = websiteId;
    this.sessionId = this.generateSessionId();
    this.pageViews = [];
    this.serviceInteractions = [];
    this.initialized = false;
    // Load any previously stored data from localStorage
    this.loadData();
  }

  private generateSessionId(): string {
    return "lancarin_" + Math.random().toString(36).substring(2, 15);
  }

  private getDeviceType(): string {
    if (typeof window === "undefined") return "unknown";

    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }

  public initialize(): void {
    // Ensure this is running in a browser environment
    if (typeof window === "undefined") return;
    if (this.initialized) return;

    // Record the initial page view
    this.recordPageView();

    // Track clicks on service links (if any exist)
    this.trackServiceLinks();

    // Track main homepage button clicks (Hubungi Kami, Drain Cleaning, AC Cleaning, Grease Trap)
    this.trackMainButtons();

    // Track form submissions (if applicable)
    this.trackFormSubmissions();

    this.initialized = true;
    console.log("Lancarin analytics initialized");
  }

  private recordPageView(): void {
    const pageData: PageView = {
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      referrer: document.referrer || "direct",
      deviceType: this.getDeviceType(),
    };

    this.pageViews.push(pageData);
    console.log("Page view recorded:", pageData.page);
    this.updateLocalStorage();

    // If the current page is one of our tracked pages, record a "view" interaction.
    if (this.isTrackedPage(pageData.page)) {
      this.recordServiceInteraction(this.getPageName(pageData.page), "view");
    }
  }

  private isTrackedPage(path: string): boolean {
    // Only track these pages: /layanan, /tentang, /artikel
    const trackedPages = ["/layanan", "/tentang", "/artikel"];
    return trackedPages.includes(path);
  }

  private getPageName(path: string): string {
    // Map paths to friendly names
    const pageMap: { [key: string]: string } = {
      "/layanan": "Layanan",
      "/tentang": "Tentang",
      "/artikel": "Artikel",
    };
    return pageMap[path] || "Unknown Page";
  }

  private trackServiceLinks(): void {
    // Existing logic for service links if your site uses anchor elements with
    // hrefs containing "/services/" or a data-service attribute.
    document.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as Element;
      const serviceLink = target.closest(
        'a[href*="/services/"], a[data-service]'
      );

      if (serviceLink) {
        const serviceName =
          serviceLink.getAttribute("data-service") ||
          this.getServiceNameFromLink(serviceLink as HTMLAnchorElement);

        this.recordServiceInteraction(serviceName, "click");
      }
    });
  }

  private getServiceNameFromLink(link: HTMLAnchorElement): string {
    const href = link.getAttribute("href") || "";
    const serviceMap: { [key: string]: string } = {
      "drain-cleaning": "drain-cleaning",
      "ac-cleaning": "ac-cleaning",
      "grease-trap": "grease-trap",
    };

    for (const key in serviceMap) {
      if (href.includes(key)) {
        return serviceMap[key];
      }
    }

    // Fallback to link text
    return link.innerText.trim() || "Unknown Service";
  }

  private trackMainButtons(): void {
    // Listen for clicks on buttons and record interactions based on their text
    document.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.tagName.toLowerCase() === "button") {
        const buttonText = target.textContent?.trim().toLowerCase();
        if (!buttonText) return;

        if (buttonText === "hubungi kami") {
          this.recordServiceInteraction("Hubungi Kami", "click");
        } else if (buttonText === "drain cleaning") {
          this.recordServiceInteraction("Drain Cleaning", "click");
        } else if (buttonText === "ac cleaning") {
          this.recordServiceInteraction("AC Cleaning", "click");
        } else if (buttonText === "grease trap") {
          this.recordServiceInteraction("Grease Trap", "click");
        }
      }
    });
  }

  private trackFormSubmissions(): void {
    document.addEventListener("submit", (e: Event) => {
      const form = e.target as HTMLFormElement;

      // Check if it's a contact or service request form based on id, action, or CSS class
      if (
        form.id.includes("contact") ||
        form.id.includes("service") ||
        form.action.includes("contact") ||
        form.classList.contains("contact-form")
      ) {
        const serviceInput = form.querySelector(
          '[name="service"], [name="service-type"]'
        );
        const serviceName = serviceInput
          ? (serviceInput as HTMLInputElement).value
          : "General Inquiry";

        this.recordServiceInteraction(serviceName, "inquiry");
      }
    });
  }

  public recordServiceInteraction(
    serviceName: string,
    interactionType: string
  ): void {
    const interaction: ServiceInteraction = {
      serviceName,
      interactionType,
      timestamp: new Date().toISOString(),
      pageLocation: window.location.pathname,
    };

    this.serviceInteractions.push(interaction);
    console.log(
      `Service interaction recorded: ${interactionType} - ${serviceName}`
    );
    this.updateLocalStorage();

    // When a threshold is reached, simulate sending the data
    if (this.serviceInteractions.length >= 5) {
      this.sendData();
    }
  }

  private updateLocalStorage(): void {
    if (typeof window === "undefined") return;

    const data = {
      websiteId: this.websiteId,
      sessionId: this.sessionId,
      pageViews: this.pageViews,
      serviceInteractions: this.serviceInteractions,
    };

    localStorage.setItem("lancarinAnalyticsData", JSON.stringify(data));
  }

  private loadData(): void {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("lancarinAnalyticsData");
    if (stored) {
      try {
        const data = JSON.parse(stored);
        this.pageViews = data.pageViews || [];
        this.serviceInteractions = data.serviceInteractions || [];
      } catch (err) {
        console.error("Failed to parse analytics data from localStorage:", err);
      }
    }
  }

  private sendData(): void {
    if (this.pageViews.length === 0 && this.serviceInteractions.length === 0)
      return;

    const payload = {
      websiteId: this.websiteId,
      sessionId: this.sessionId,
      pageViews: [...this.pageViews],
      serviceInteractions: [...this.serviceInteractions],
    };

    // In a production implementation, send this payload to your backend server.
    console.log("Sending Lancarin analytics data:", payload);

    // After "sending" data, clear the local arrays and update localStorage.
    this.pageViews = [];
    this.serviceInteractions = [];
    this.updateLocalStorage();
  }

  public getServicePopularity(): { [service: string]: number } {
    return this.serviceInteractions.reduce((popularity, interaction) => {
      const service = interaction.serviceName;
      popularity[service] = (popularity[service] || 0) + 1;
      return popularity;
    }, {} as { [service: string]: number });
  }
}

// Create a singleton instance.
let analyticsInstance: LancarinAnalytics | null = null;

// Export a function to get the analytics instance.
export function getLancarinAnalytics(
  websiteId: string = "lancarin-site"
): LancarinAnalytics {
  if (typeof window === "undefined") {
    // During SSR, return a dummy instance.
    return new LancarinAnalytics(websiteId);
  }

  if (!analyticsInstance) {
    analyticsInstance = new LancarinAnalytics(websiteId);
    analyticsInstance.initialize();
  }

  return analyticsInstance;
}
