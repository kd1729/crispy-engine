export default function MyName() {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold">Hi, I&#39;m </h1>
      <h1 className="text-6xl text-white font-bold">Kaustubh <span className="text-emerald-500">Dwivedi</span></h1>
      <div class="wrapper flex flex-row">
        <div class="static-txt">I&#39;m a</div>
        <ul class="dynamic-txts">
          <li>
            <span>Student</span>
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
