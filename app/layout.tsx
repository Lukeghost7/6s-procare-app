export const metadata = {
  title: "6S ProCare Services",
  description: "End-to-end home care & property management services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f5f7f6",
        }}
      >
        {children}
      </body>
    </html>
  );
}
