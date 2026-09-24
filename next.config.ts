import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Permite abrir el dev server desde el celular en la red local.
  allowedDevOrigins: ["192.168.1.*"],
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
