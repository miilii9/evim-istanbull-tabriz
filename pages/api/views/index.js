import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();
export const runtime = "edge";

export default async function view(req) {
  if (req.method !== "POST") {
    return new NextResponse("Request should be POST", { status: 405 });
  }
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("content must be JSON", { status: 400 });
  }

  const body = await req.json();
  let slug = undefined;
  if ("slug" in body) {
    slug = body.slug;
  }

  if (!slug) {
    return new NextResponse("slug not found", { status: 400 });
  }

  const ip = req.ip;
  if (ip) {
    // hash the IP
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip)
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });
    if (!isNew) {
      new NextResponse(null, { status: 200 });
    }
  }
  await redis.incr(["pageviews", "page", slug].join(":"));

  return new NextResponse(null, { status: 200 });
}
