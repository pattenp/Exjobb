import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AddProject, AddTodo, ProjectDetail, TodoDetail } from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useTodo, useProject } from "./lib/hooks";

function App() {
  const [todos, addTodo, toggleTodo, removeTodo] = useTodo();
  const [projects, addProject] = useProject();

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Router>
        <div>
          <header>
            <h1>Todo</h1>
          </header>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home projects={projects} todos={todos} />}
            />
            <Route
              exact
              path="/add-todo/:id"
              element={<AddTodo addTodo={addTodo} />}
            />
            <Route
              exact
              path="/project"
              element={<AddProject addProject={addProject} />}
            />
            <Route
              exact
              path="/project/:id"
              element={
                <ProjectDetail
                  projects={projects}
                  todos={todos}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                />
              }
            />
            <Route
              exact
              path="/todo/:id"
              element={
                <TodoDetail
                  todos={todos}
                  deleteTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
