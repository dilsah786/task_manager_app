import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Users from "./Pages/Users";
import Trash from "./Pages/Trash";
import TaskDetail from "./Pages/TaskDetail";
import Login from "./Pages/Login";

function App() {
  const theme = "light";

  return (
    <main className={`w-full min-h-screen bg-[#f3f4f6]`}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/team" element={<Users />} />
          <Route path="/trashed" element={<Trash />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
