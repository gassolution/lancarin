const token =
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzQzOTMyOTY4LCJqdGkiOiI2YWYwMjU1MC0yZDcyLTQ0MDQtYmI1ZC02N2UyNTBiZjA3NjYiLCJ1c2VyX3V1aWQiOiIyNDc4NmI4Yy1kMDIzLTRkZWYtYTAyYi05MGZjODY3MDM1M2IifQ.6mzVMXyCoBoSWem9B3pv8SUYw76TOSte4SKngyfuLe85MSVKWUo5AB8-21v9Uqa1QhUhejALwyOpga8cgEifOw";

const user_uri =
  "https://api.calendly.com/users/24786b8c-d023-4def-a02b-90fc8670353b";

export const fetchCalendlyEventTypes = async () => {
  try {
    const response = await fetch(
      `https://api.calendly.com/event_types?user=${user_uri}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Calendly event types: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.collection; // Returns an array of event types
  } catch (error) {
    console.error("Error fetching Calendly event types:", error);
    return [];
  }
};
