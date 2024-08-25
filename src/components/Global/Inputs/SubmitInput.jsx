const SubmitInput = ({className}) => {
  return (
    <button
      className={"w-min hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" + className}
      type="submit">
      ذخیره
    </button>
  );
}

export default SubmitInput;
