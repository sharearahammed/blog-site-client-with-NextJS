export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>This is contact layout</h1>
        {children}
      </body>
    </html>
  );
}
