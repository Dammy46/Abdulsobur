import "@/styles/globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../public/Rubik-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Rubik-SemiBold.ttf",
      weight: "500",
      style: "semibold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Abdulsobur Abdulazeez • Web Developer",
  icons: "/images/abdulsobur.jpg",
  openGraph: {
    type: "website",
    title: "Abdulsobur Portfolio",
    description: "My Website Description",
    siteName: "Abdulsobur",
    images: 'https://res-console.cloudinary.com/heasyresource/thumbnails/v1/image/upload/v1707579021/YWJkdWxzb2J1cl9xbGJxaGo=/grid_landscape'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
