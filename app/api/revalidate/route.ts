import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { CACHE_TAGS } from "../../../lib/cms";

const ALLOWED_ORIGIN = "https://prepr.io";

function getCorsHeaders(origin: string | null) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : "",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-revalidate-secret",
  };
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");

  return NextResponse.json(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (origin && origin !== ALLOWED_ORIGIN) {
    return NextResponse.json(
      { error: "Origin not allowed" },
      { status: 403, headers: corsHeaders }
    );
  }

  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: "Invalid secret" },
      { status: 401, headers: corsHeaders }
    );
  }

  for (const tag of Object.values(CACHE_TAGS)) {
    revalidateTag(tag);
  }

  return NextResponse.json(
    {
      revalidated: true,
      tags: Object.values(CACHE_TAGS),
    },
    { headers: corsHeaders }
  );
}
