import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Comment from './comment';
const Kaka = function ({ checked: hihi }) {
  return (
    <div>{hihi}</div>
  )
}
function App() {
  const [comment, setComment] = useState([
    {
      id: 1,
      replyTo: null,
      content: "bạn có khỏe không chứ ?"
    },
    {
      id: 2,
      replyTo: null,
      content: "bạn có khỏe không chứ ?"
    },
    {
      id: "2-22",
      replyTo: 2,
      content: "bạn có khỏe không chứ ?"
    },
    {
      id: "2-22",
      replyTo: 2,
      content: "bạn có khỏe không chứ ?"
    },
    {
      id: "2-22",
      replyTo: 2,
      content: "tôi rất vui khi gặp bạn"
    },
    {
      id: "2-22",
      replyTo: 2,
      content: "bạn rất xinh đẹp"
    },
    {
      id: "2-3",
      replyTo: 2, 
      content: "chất độc"
    },
    {
      id: 3,
      replyTo: null,
      content: "bạn xấu quá đi hihi"
    },
  ])
  console.log("comment", comment)
  const saveComment = (data) => {
    const dataz = [...comment]
    dataz.push(data)
    setComment(dataz)
  }
  return (
    <>
     <h1 className="text-3xl text-red-500 underline">
      Hello world!
    </h1>
      <div>tao là tuyên</div>
      {
        comment.map((val, index) => (!val.replyTo && <Comment value={val} data={comment} saveComment={saveComment} /> ))
      }
    </>
  );
}

export default App;
