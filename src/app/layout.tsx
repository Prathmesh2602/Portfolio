import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const BASE_URL = "https://prathmeshjadhav.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Prathmesh Jadhav | Senior Full Stack Engineer",
    template: "%s | Prathmesh Jadhav",
  },
  description: "Senior Full Stack Engineer with 4+ years building SaaS, HRMS, and B2B platforms. React, Next.js, Node.js, TypeScript, AWS. Commercially shipped products serving 60,000+ users.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "Node.js", "TypeScript", "AWS", "SaaS", "HRMS", "B2B", "Pune", "Prathmesh Jadhav"],
  authors: [{ name: "Prathmesh Jadhav", url: BASE_URL }],
  creator: "Prathmesh Jadhav",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Prathmesh Jadhav",
    title: "Prathmesh Jadhav | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer with 4+ years building SaaS, HRMS, and B2B platforms. React, Next.js, Node.js, TypeScript, AWS.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prathmesh Jadhav — Senior Full Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathmesh Jadhav | Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer with 4+ years building SaaS, HRMS, and B2B platforms.",
    images: ["/og-image.png"],
    creator: "@prathmesh_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prathmesh Jadhav",
              url: BASE_URL,
              email: "prathmeshjadhav1014@gmail.com",
              jobTitle: "Senior Full Stack Engineer",
              worksFor: { "@type": "Organization", name: "Gadgetopia Technologies" },
              address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
              sameAs: [
                "https://www.linkedin.com/in/prathmesh-jadhav-68a65b1b8/",
                "https://github.com/Prathmesh1014",
              ],
              knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL", "SaaS Architecture"],
            }),
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
      
    </html>
  );
}

