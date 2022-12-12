export default function ResumeDownload() {
  return (
    <div
      className="flex flex-row justify-center mt-20 ml-80 w-max text-lg bg-white px-5 py-3 rounded-lg text-emerald-700 font-bold
                hover:shadow-[0_10px_20px_-15px_#ffffffff] shadow-[0_10px_20px_-15px_#000000ff]
                ease-in-out duration-300
                hover:text-xl hover:cursor-pointer hover:text-emerald-600
              active:text-emerald-800"
    >
      <a
        href="https://drive.google.com/file/d/1YwT4s3vg5co1AGdN-TABs_qZEhYiF-e6/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        My Resume
      </a>
    </div>
  );
}
