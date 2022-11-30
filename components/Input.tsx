interface InputProps {
  placeholder?: string;
}

const Input = ({ placeholder }: InputProps): JSX.Element => {
  return (
    <input
      className="border-b-black border-2 border-t-0 border-l-0 border-r-0 h-12 w-full text-gray-700 font-bold py-1 px-2 leading-tight focus:outline-none focus:border-t-2 focus:border-t-black focus:border-l-2 focus:border-l-black focus:border-r-2 focus:border-r-black"
      type="text"
      placeholder={placeholder}
    />
  );
};
export default Input;
