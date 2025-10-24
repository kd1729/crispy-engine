export default function Header({ name, className }) {
  return (
    <h1
      className={`my-8 text-4xl font-bold text-transparent text-white sm:text-5xl sm:my-12 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text ${className}`}
    >
      {name}
    </h1>
  );
}
