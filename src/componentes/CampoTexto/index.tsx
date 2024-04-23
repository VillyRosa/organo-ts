import { ChangeEvent } from 'react';
import './CampoTexto.css';

interface CampoTextoProps {
    label: string;
    valor: string;
    obrigatorio?: boolean;
    placeholder: string;
    tipo?: 'text' | 'email' | 'password' | 'date' | 'number'; 
    aoAlterado: (valor: string) => void;
};

const CampoTexto = ({ label, valor, placeholder, aoAlterado, tipo = 'text', obrigatorio= false }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento: ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
              type={tipo}
              value={valor} 
              onChange={aoDigitado} 
              required={obrigatorio} 
              placeholder={placeholderModificada}
            />
        </div>
    );
};

export default CampoTexto;