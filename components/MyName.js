export default function MyName() {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl text-white font-bold">Hi, I&#39;m </h1>
      <h1 className="sm:text-6xl text-3xl text-white font-bold">Kaustubh <span className="text-emerald-500">Dwivedi</span></h1>
      <div className="wrapper flex flex-row">
        <div className="static-txt">I&#39;m a</div>
        <ul className="dynamic-txts">
          <li>
            <span>Googler</span>
          </li>
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Software Engineer</span>
          </li>
          <li>
            <span>Programmer</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
