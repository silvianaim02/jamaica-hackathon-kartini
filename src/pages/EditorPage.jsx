import useInput from '../hooks/useInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { BiPlay } from "react-icons/bi";
import Navbar from "../components/Navbar/NavbarMain";
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

const EditorPage = () => {
  const navigate = useNavigate();
  const [title, onTitleChangeHandler] = useInput('');
  const [category, setCategory] = useState();
  const [body, setBody] = useState('');

  async function onArticlePostHandler(user) {
    const { error, msg } = await api.postArticle(user);
    if (!error) {
      alert('berhasil menambahkan artikel');
      navigate('/');
    } else {
      alert(msg);
    }
  }

  const onArticlePostSubmit = (e) => {
    e.preventDefault();
    onArticlePostHandler({ title, category, body });
  };

  const handleCategoryChange = (e) => {
    const arrValue = e.target.value.split(',').map((item) => item.trim());
    setCategory(arrValue);
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  return (
    <>
      <Navbar />
      <div className="lg:px-40 px-0 my-4">
        <form onSubmit={onArticlePostSubmit} className="grid space-y-2">
          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="flex px-4 py-2 bg-accent-9 items-center text-accent-1 rounded-full"
            >
              <BiPlay className="w-6 h-6 text-accent-1 items-center" />
              Publish
            </button>
          </div>
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={onTitleChangeHandler}
            className="border-b-2 border-gray-300 p-2 rounded-md hover:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2 transition duration-300"
          />

          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            placeholder="React,PHP,Python"
            className="border-b-2 border-gray-300 p-2 rounded-md hover:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2 transition duration-300"
          />
          {/*<input type="file" className="border p-2 border-gray-300 rounded-md hover:border-accent-2" />*/}
          <ReactQuill
            modules={modules}
            formats={formats}
            onChange={handleBodyChange}
            value={body}
          />
        </form>
      </div>
    </>
  );
};

export default EditorPage;
