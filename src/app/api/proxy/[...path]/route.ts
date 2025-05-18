import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;

const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
} as const;

async function handleRequest(
  request: NextRequest,
  path: string[],
  method: string = "GET"
) {
  try {
    const url = new URL(`${BACKEND_URL}/api/${path.join("/")}`);
    if (method === "GET") {
      url.search = request.nextUrl.search;
    }

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (request.headers.get("Authorization")) {
      headers["Authorization"] = request.headers.get("Authorization")!;
    }

    const options: RequestInit = {
      method,
      headers,
    };

    if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
      try {
        const body = await request.json();
        options.body = JSON.stringify(body);
      } catch (e) {
        // If no body is present, continue without it
      }
    }

    const response = await fetch(url, options);

    let responseData;
    const contentType = response.headers.get("content-type");

    try {
      responseData = contentType?.includes("application/json")
        ? await response.json()
        : await response.text();
    } catch (e) {
      responseData = {};
    }

    return NextResponse.json(responseData, {
      status: response.status,
      headers: {
        "Content-Type": contentType || "application/json",
        ...DEFAULT_HEADERS,
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
        headers: DEFAULT_HEADERS,
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...DEFAULT_HEADERS,
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, "GET");
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, "POST");
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, "PUT");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params.path, "DELETE");
}
