import './styles.scss';

type Props = {
    text: string;
}

const NumberedInformationBox = ({ text }: Props) => (
    <div className="numbered-box-properties">
        <h5 className="box-text-content">{text}</h5>
    </div>
);

export default NumberedInformationBox;