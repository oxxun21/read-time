import { ImageResponse } from "next/server";
import og_img from "@/assets/og_img.png";
export const runtime = "edge";
export async function GET() {
  return new ImageResponse(
    (
      <div>
        <img src={og_img} alt="og image" />
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
