import "./globals.css";
import Board from "./components/board";
import "./components/style.css";
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";

export const metadata = {
    title: "Chariter",
    description: "Charitier",
};

export default function RootLayout({ children }) {
    return (
        <div className="App">
        <html lang="en">
            <body>{children}</body>
        </html>
         <div className="container">
    
    <SearchBar placeholder="Enter a Book Name..." data={BookData} />
  </div>
    <div className="App" id="main">
     

      <Board></Board>
    </div>
    </div>
    );
}
