const Avatar = ({ url }) => {
  return (
    <img
      className="border-2 border-blue-800 rounded-full w-40 h-40"
      src={url}
      alt=''
    />
  );
};

export default Avatar;