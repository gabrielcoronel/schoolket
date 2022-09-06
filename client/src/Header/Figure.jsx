import logo from './logo.jpeg';

const Figure = () => {
  return (
    <div
      className="flex flex-row justify-between items-center gap-2"
    >
      <img
        className="rounded-full w-16 h-16"
        src={logo}
        alt=''
      />

      <span
        className="text-3xl"
      >
        Schoolket
      </span>
    </div>
  );
};

export default Figure;