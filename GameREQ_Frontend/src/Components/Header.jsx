import '../Styles/Header.css';
import Search from './Search';

export default function Header() {
    return (
        <>
        <div className="Header">
        <h1 className="Header-title">GameREQ</h1>
         <Search/>
        <ul className="Header-list">
            <li className="Header-item">Home</li>
            <li className="Header-item">Popular</li>
            <li className="Header-item">Favourites</li>
           
           
        </ul>
        </div>
        </>
    );
}
