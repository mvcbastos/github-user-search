import { useState } from 'react';
import './styles.scss';
import ButtonIcon from '../../core/components/ButtonIcon';
import { makeRequest } from '../../core/utils/request';
import MainUserDataBox from './components/MainUserDataBox';
import NumberedInformationBox from './components/NumberedInformationBox';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { useEffect } from 'react';
import dayjs from 'dayjs';

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
    const [isLoading, setIsLoading] = useState(false);
    const [isDataSubmmited, setIsDataSubmmited] = useState(false);

    useEffect(() => {
        setIsDataSubmmited(false);
    },[]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsDataSubmmited(true);
        setIsLoading(true);
        makeRequest({ url: `/users/${username}` })
            .then(response => {
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
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (

        <div className="search-page-container">
            <div className="form-container">
                <form onSubmit={handleOnSubmit}>
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
                </form>
            </div>
            {isDataSubmmited ? (
            <div className="response-container">
                {isLoading ? <ImageLoader /> : (
                    <div className="image-button-container">
                        <img src={userData.avatar_url} alt={username} className="user-image" />
                        <div className="see-profile-button">
                            <a href={userData.html_url}  rel="noopener noreferrer" target="_blank">
                                <ButtonIcon text="Ver perfil" />
                            </a>
                        </div>
                    </div>
                )}
                {isLoading ? <InfoLoader /> : (
                    <div className="informations-container">
                        <div className="numbered-information-container">
                            <NumberedInformationBox text={`Repositórios públicos: ${userData.public_repos}`} />
                            <NumberedInformationBox text={`Seguidores: ${userData.followers}`} />
                            <NumberedInformationBox text={`Seguindo: ${userData.following}`} />
                        </div>
                        <div className="user-informations-container">
                            <h4 className="informations-container-title">Informações</h4>
                            <MainUserDataBox name={"Empresa"} value={`${userData.company}`} />
                            <MainUserDataBox name={"Website/Blog"} value={`${userData.blog}`} />
                            <MainUserDataBox name={"Localidade"} value={`${userData.location}`} />
                            <MainUserDataBox name={"Membro desde"} value={`${dayjs(userData.created_at).format('DD/MM/YYYY')}`} />
                        </div>
                    </div>
                )}
            </div>
            ) : (
                <div className="empty-container">
                </div>
            )}
        </div>
    );
}

export default Search;