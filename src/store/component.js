import App from "../components/App/App";

export const Component = ({ state, setTasks }) => (
  <div>
    <App state={state} setTasks={setTasks} />
  </div>
);
