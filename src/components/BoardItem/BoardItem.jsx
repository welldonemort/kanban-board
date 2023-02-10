import React from "react";
import "./BoardItem.css";
import TasksList from "../TasksList/TasksList.jsx";
import AddMeBtn from "../AddMeBtn/AddMeBtn.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

class BoardItem extends React.Component {
  render() {
    const { title, tasksList, addBtnHandler, count, dataMock } = this.props;

    const popUp = () => (
      <div className="popup">
        <div className="popup__header">
          <h3 className="popup__header__title">{title}</h3>
          <Route>
            <NavLink to="/" className="popup__header__btn">
              <img src="./line-1.svg" alt="ic: close" />
              <img className="btn__line-2" src="./line-2.svg" alt="ic: close" />
            </NavLink>
          </Route>
        </div>
        <div className="popup__header__description">
          Это был темный лес, издали казавшийся непроходимым. Там Пахапиль
          охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока
          русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся.
          Он появился в Раквере, где советский капитан наградил его медалью.
          Медаль была украшена четырьмя непонятными словами, фигурой и
          восклицательным знаком.
        </div>
      </div>
    );

    return (
      <Router>
        <div className="board-item">
          <NavLink to={`/${title.toLowerCase()}`} className="board-item__title">
            {title}
          </NavLink>

          <Switch>
            <Route path={`/${title.toLowerCase()}`} component={popUp} />
          </Switch>

          <div
            className="scroll-holder"
            id={`column-${count}`}
            onDrop={() => addBtnHandler(title, `btn-${count}`)}
          >
            <TasksList
              className="tasks-list"
              tasks={tasksList}
              id={`list-${count}`}
              addBtnHandler={addBtnHandler}
              title={title}
            />
            <AddMeBtn
              addBtnHandler={addBtnHandler}
              title={title}
              id={`btn-${count}`}
              dataMock={dataMock}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default BoardItem;
