import "./globals.css";

export const metadata = {
  title: "Navy Todo",
  description: "A premium todo app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
