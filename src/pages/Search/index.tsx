import { useState } from 'react';
import './styles.scss';
import ButtonIcon from '../../core/components/ButtonIcon';
import { makeRequest } from '../../core/utils/request';
import MainUserDataBox from './components/MainUserDataBox';
import NumberedInformationBox from './components/NumberedInformationBox';

type UserState = {
    avatar_url?: string;
    public_repos?: string;
    followers?: number;
    following?: number;
    company?: string;
    blog?: string;
    location?: string;
    created_at?: string;
    html_url?: string;
}

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState<UserState>({});

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        makeRequest({ url: `/users/${username}` })
        .then(response =>{
            setUserData({
                avatar_url: response.data.avatar_url,
                public_repos: response.data.public_repos,
                followers: response.data.followers,
                following: response.data.following,
                company: response.data.company,
                blog: response.data.blog,
                location: response.data.location,
                created_at: response.data.created_at,
                html_url: response.data.html_url
            });
        });
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="search-page-container">
                    <div className="form-container">
                        <div className="form-title">
                            <h1>Encontre um perfil Github</h1>
                        </div>
                        <input 
                            value={username}
                            name="username"
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                        />
                        <div className="button-icon">
                            <ButtonIcon text="Encontrar" />
                        </div>
                    </div>
                    <div className="response-container">
                        <div className="image-button-container">
                            <img src={userData.avatar_url} alt={username} className="user-image" />
                            <div className="see-profile-button">
                                <ButtonIcon text="Ver perfil" />
                            </div>
                        </div>
                        <div className="informations-container">
                            <div className="numbered-information-container">
                                <NumberedInformationBox text={`Repositórios públicos: ${userData.public_repos}`}/>
                                <NumberedInformationBox text={`Seguidores: ${userData.followers}`}/>
                                <NumberedInformationBox text={`Seguindo: ${userData.following}`}/>
                            </div>
                            <div className="user-informations-container">
                                <h4 className="informations-container-title">Informações</h4>
                                <MainUserDataBox name={"Empresa"} value={`${userData.company}`} />
                                <MainUserDataBox name={"Website/Blog"} value={`${userData.blog}`} />
                                <MainUserDataBox name={"Localidade"} value={`${userData.location}`} />
                                <MainUserDataBox name={"Membro desde"} value={`${userData.created_at}`} />
                            </div>
                        </div>
                    </div>
            </div>
        </form>
    );
}

export default Search;