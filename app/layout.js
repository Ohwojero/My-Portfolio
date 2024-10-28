import localFont from "next/font/local";
import "./globals.css";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { ThemeProvider } from "./Provider";
import Footer from "./components/Footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Portfolio",
  description: "My Experience and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <FloatingNavDemo />
        {children}

        {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
