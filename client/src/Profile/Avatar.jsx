const Avatar = ({ url }) => {
  return (
    <img
      className="rounded-full w-40 h-40"
      src={url}
      alt=''
    />
  );
};

export default Avatar;