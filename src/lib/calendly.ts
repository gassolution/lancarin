const token =
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzQyNTQwMTEzLCJqdGkiOiI5MTYzZTAyNS1kZmQwLTQ1NDktYWQ4MS1jZTFmNmZkNTY4YjkiLCJ1c2VyX3V1aWQiOiJjZDJlZGU4YS1kMDQ4LTQ4MjgtOGY2Zi1kNjhlMDEyMjBhNjQifQ.a3h2j64CtXdILnWNUaV_EP_O2VexDvcTxMZ3Rz2x3RWUD0vCmQvyoibWyp3k510WWzJ9-Cdq_0JPT7LI36IvxQ";
const user_uri =
  "https://api.calendly.com/users/cd2ede8a-d048-4828-8f6f-d68e01220a64";

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
