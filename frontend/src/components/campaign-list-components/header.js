import '../styles/campaign-content.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ handleSearch, handleSort }) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/create');
    };
    return (
        <nav class="navbar" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="navbar-brand bolden">Campaigns</div>
                <div class="d-flex flex-grow-2">
                    <div class="btn-group me-2">
                        <SearchComponent handleSearch={handleSearch} />
                        <div className="dropdown">
                            <button type="button" class="btn border dropdown-toggle filter-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" onClick={() => handleSort(true)}>Sort by Remaining Rewards Asc.</a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => handleSort(false)}>Sort by Remaining Rewards Desc.</a></li>
                            </ul>
                        </div>
                    </div>
                    <button class="btn btn-primary create-campaign-btn" onClick={handleRedirect}><span class="me-2">Create Campaign</span>
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

const SearchComponent = ({ handleSearch }) => {
    const handleChange = (event) => {
        const searchText = event.target.value;
        handleSearch(searchText);
    }
    return (
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
    );
}