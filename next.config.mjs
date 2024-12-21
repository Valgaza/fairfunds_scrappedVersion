/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
      buildActivity: false,            // Disables the build activity indicator
      buildActivityPosition: 'bottom-right', // Optional: position setting (if keeping it)
      autoPrerender: false,            // Disables the static route indicator
    },
  };
  
  export default nextConfig;
  