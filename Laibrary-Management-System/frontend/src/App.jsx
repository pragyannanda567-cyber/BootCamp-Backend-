import { Routes, Route } from "react-router-dom";
import EditBook from "./pages/EditBook";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AddBook from "./pages/AddBook";
import ViewBooks from "./pages/ViewBooks";

function App() {
    return (
        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route
                path="/student-dashboard"
                element={<StudentDashboard />}
            />

            <Route path="/add-book" element={<AddBook />} />

            <Route path="/view-books" element={<ViewBooks />} />
            <Route path="/edit-book/:id" element={<EditBook />} />

        </Routes>
    );
}

export default App;