import App from "../components/App/App";

export const Component = ({ tasks, setTasks }) => (
  <div>
    <App tasks={tasks} setTasks={setTasks} />
  </div>
);
