import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Question from './question.tsx'; // 这是你的 Question 组件
import Question2 from './question2.tsx';
import Question3 from './question3.tsx';
import Question4 from './question4.tsx';
import Question5 from './question5.tsx';
import End from './end.tsx';
import Chat from './ChatRoom.tsx';
import Select from './select.tsx';
import Task from './task.tsx';
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
          <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
        <Route path="/question5" element={<Question5 />} />
        <Route path="/end" element={<End />} />
        <Route path="/ChatRoom" element={<Chat />} />
        <Route path="/select" element={<Select />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
