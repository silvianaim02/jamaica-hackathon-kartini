import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Navbar from "../components/navbar";
import { BiPlay } from "react-icons/bi";
const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const EditorPage = () => {
  return (
    <>
      <Navbar />
      <div className="lg:px-40 px-0 my-4">
        <form className="grid space-y-2">
          <div className="flex justify-end items-end">
            <button className="flex px-4 py-2 bg-accent-9 items-center text-accent-1 rounded-full">
              <BiPlay className="w-6 h-6 text-accent-1 items-center" />
              Publish
            </button>
          </div>
          <input
            type="text"
            placeholder="Judul"
            className="border-b-2 border-gray-300 p-2 rounded-md hover:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2 transition duration-300"
          />

          <input
            type="text"
            placeholder="React, PHP, Python, atau lainnya"
            className="border-b-2 border-gray-300 p-2 rounded-md hover:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2 transition duration-300"
          />
          
          {/*<input type="file" className="border p-2 border-gray-300 rounded-md hover:border-accent-2" />*/}
          <ReactQuill modules={modules} formats={formats} />
        </form>
      </div>
    </>
  );
}

export default EditorPage;
