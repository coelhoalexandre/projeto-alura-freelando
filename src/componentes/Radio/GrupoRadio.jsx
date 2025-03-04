import { useFormikContext } from 'formik';
import Radio from './Radio';

const GrupoRadio = ({ opcoes, name }) => {
  const { values } = useFormikContext();

  return (
    <div>
      {opcoes.map((option) => (
        <Radio
          key={option.valor}
          value={option.label}
          label={option.label}
          checked={option.label === values[name]}
          name={name}
        />
      ))}
    </div>
  );
};

export default GrupoRadio;
