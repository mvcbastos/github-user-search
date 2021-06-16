import './styles.scss';

type Props = {
    name: string;
    value: string;
}

const MainUserDataBox = ({ name, value }: Props) => (
    <div className="box-properties">
        <h5 className="box-text-name">{`${name}:`}</h5>
        <h5 className="box-text-value">{`${value}`}</h5>
    </div>
);

export default MainUserDataBox;