interface TextFieldProps {
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <div className='relative border rounded-md'>
      <input
        className='block w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete='off'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
