import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel의 어댑터가 배포 출력을 직접 생성한다. standalone은 Docker 빌드에서만 사용한다.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const })
};

export default nextConfig;
