//this code is used to test calendly api

import { NextResponse } from "next/server";
import { fetchCalendlyEventTypes } from "@/lib//calendly"; // Adjust this if your calendly file is in a different location

export async function GET() {
  const data = await fetchCalendlyEventTypes();
  return NextResponse.json(data);
}
