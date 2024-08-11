import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<AddTodo/>}/>
        <Route path="/search" element={<SearchTodo/>}/>
        <Route path="/view" element={<ViewAll/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
