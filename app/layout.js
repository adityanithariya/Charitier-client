import "./globals.css";

export const metadata = {
    title: "Chariter",
    description: "Charitier",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body>{children}</body>
        </html>
    );
}
