import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <button className="button-properties">
        <h5 className="button-text">{text}</h5>
    </button>
);

export default ButtonIcon;