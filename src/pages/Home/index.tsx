import './styles.scss';
import ButtonIcon from '../../core/components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="home-title">
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </div>
        <div className="home-content">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /> <br /> Favor observar as instruções passadas no capítulo sobre a <br /> elaboração deste projeto. <br /> <br /> Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki: antforfigma@gmail.com
        </div>
        <div className="button-margins">
            <Link to="/search">
                <ButtonIcon text="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;