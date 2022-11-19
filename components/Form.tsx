interface IForm {
  placeholder?: string;
}

const Form = ({ placeholder }: IForm): JSX.Element => {
  return (
    <form>
      <div className="flex items-center py-2 ">
        <input
          className="border-b-black border-2 border-t-0 border-l-0 border-r-0 w-96 h-10 text-gray-700 font-bold mr-3 py-1 px-2 leading-tight focus:outline-none hover:border-t-2 hover:border-t-black hover:border-l-2 hover:border-l-black hover:border-r-2 hover:border-r-black"
          type="text"
          placeholder={placeholder}
        ></input>
      </div>
    </form>
  );
};
export default Form;
