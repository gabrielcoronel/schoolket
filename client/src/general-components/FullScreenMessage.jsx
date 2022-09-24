const FullScreenMessage = ({ message }) => {
  return (
    <div className="w-full h-96 flex flex-row justify-center items-center text-blue-800 text-2xl">
      {message}
    </div>
  );
};

export default FullScreenMessage;