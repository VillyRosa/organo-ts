import './ListaSuspensa.css';

interface ListaSuspensaProps {
    label: string;
    itens: string[];
    valor: string;
    obrigatorio?: boolean;
    aoAlterado: (valor: string) => void;
};

const ListaSuspensa = ({ label, obrigatorio, valor, itens, aoAlterado }: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} value={valor}>
                <option value=""></option>
                {itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;