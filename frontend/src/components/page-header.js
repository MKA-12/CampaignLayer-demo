import logo from '../assets/campaign.png';
import './styles/main-header.css';

export default function MainHeader() {
    return (
        <nav class="navbar header-main">
            <div class="container-fluid header-content">
                <a class="navbar-brand" href="#">
                    <img class="header-logo" src={logo} />
                </a>
            </div>
        </nav>
    );
}