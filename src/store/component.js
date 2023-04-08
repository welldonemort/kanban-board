import App from "../components/App/App";

export const Component = ({ state, setTasks, setAccounting }) => (
  <div>
    <App state={state} setTasks={setTasks} setAccounting={setAccounting} />
  </div>
);
