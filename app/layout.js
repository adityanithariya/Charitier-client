import "./globals.css";

export const metadata = {
    title: "Chariter",
    description: "Charitier",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
