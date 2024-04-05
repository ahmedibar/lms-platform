/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Use remotePatterns instead of domains
        remotePatterns: [
            {
                // Specify the hostname of the remote pattern
                hostname: "utfs.io",
                // Optionally, you can specify other parts of the URL such as protocol, port, and pathname
                // protocol: "https",
                // port: 443,
                // pathname: "/images/",
            },
        ],
    },
};

export default nextConfig;
