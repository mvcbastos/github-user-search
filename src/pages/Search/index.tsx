import { useState } from 'react';
import './styles.scss';
import ButtonIcon from '../../core/components/ButtonIcon';

const Search = () => {
    const [username, setUsername] = useState();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <form>
            <div className="search-page-container">
                    <div className="form-container">
                        <div className="form-title">
                            <h1>Encontre um perfil Github</h1>
                        </div>
                        <input 
                            type="text"
                            className="form-control"
                        />
                        <div className="button-icon">
                            <ButtonIcon text="Encontrar" />
                        </div>
                    </div>
            </div>
        </form>
    );
}

export default Search;