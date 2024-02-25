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
    description: "Abdulsobur is a frontend developer with proven experience, passionate about creating user-friendly websites using HTML, CSS, JavaScript, and frameworks like React!",
    siteName: "Abdulsobur",
    images: 'https://res-console.cloudinary.com/heasyresource/thumbnails/v1/image/upload/v1708877576/U2NyZWVuc2hvdF8yMDI0LTAyLTI1XzE3MTIxM19zbGl1bHI=/grid_landscape'
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
