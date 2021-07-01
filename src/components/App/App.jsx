import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Board from '../Board/Board.jsx';
import Footer from '../Footer/Footer.jsx';
import ReactRouterRoute from '../../routing/Router.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataMock: [
        {
          title: 'Backlog',
          issues: [
            {
              id: 'task1',
              name: 'Login page – performance issues'
            },
            {
              id: 'task2',
              name: 'Sprint bugfix'
            },
            {
              id: 'task3',
              name: 'Shop page – performance issues'
            },
            {
              id: 'task4',
              name: 'Checkout bugfix'
            },
            {
              id: 'task5',
              name: 'Shop bug1'
            },
            {
              id: 'task6',
              name: 'Shop bug2'
            },
            {
              id: 'task7',
              name: 'Shop bug3'
            },
            {
              id: 'task8',
              name: 'Shop bug4'
            },
            {
              id: 'task9',
              name: 'Shop bug5'
            },
            {
              id: 'task10',
              name: 'Shop bug6'
            },
            {
              id: 'task11',
              name: 'Shop page – performance issues'
            },
            {
              id: 'task12',
              name: 'User page – performance issues'
            },
            {
              id: 'task13',
              name: 'Auth bugfix'
            },
            {
              id: 'task14',
              name: 'Main page – performance issues'
            },
            {
              id: 'task15',
              name: 'Main page bugfix'
            },
          ]
        },
        {
          title: 'Ready',
          issues: []
        },
        {
          title: 'In progress',
          issues: []
        },
        {
          title: 'Finished',
          issues: []
        }
      ],
    }
  }

  backLogHandle = () => {
    //переменные
    const { dataMock } = this.state;
    const backlogList = document.querySelector('#list-1');
    const backlogColumn = document.querySelector('#column-1');
    const btnAdd = document.querySelector('#btn-1');
    const input = document.createElement("input");
    const btnSubmit = document.createElement("button");

    //после нажатия add
    btnAdd.style.display = "none";
    input.classList.add("input");
    backlogList.appendChild(input);
    btnSubmit.classList.add("submit-btn");
    btnSubmit.innerText = "Submit";
    backlogColumn.appendChild(btnSubmit);

    //после нажатия submit
    btnSubmit.addEventListener('click', () => {
      if (input.value !== '') {
        dataMock[0].issues.push({ id: 'dvscfds', name: input.value });
        this.setState({ dataMock: dataMock });
        btnAdd.style.display = "flex";
        input.style.display = "none";
        btnSubmit.style.display = "none";
      } else {
        alert('Please, make sure the name of task is not blank!');
      }
    })
  }

  othersHandle = (id) => {
    //переменные
    const { dataMock } = this.state;
    const currentColumnTasks = dataMock[`${id.slice(4) - 2}`].issues;

    const currentList = document.querySelector(`#list-${id.slice(4)}`);
    const currentColumn = document.querySelector(`#column-${id.slice(4)}`);
    const btnAdd = document.querySelector(`#btn-${id.slice(4)}`);
    const dropdown = document.createElement("select");
    const btnSubmit = document.createElement("button");

    //после нажатия add
    btnAdd.style.display = "none";
    dropdown.classList.add("dropdown");
    currentList.appendChild(dropdown);
    btnSubmit.classList.add("submit-btn");
    btnSubmit.innerText = "Submit";
    currentColumn.appendChild(btnSubmit);
    //наполнение дропдауна
    currentColumnTasks.forEach((item) => {
      const option = document.createElement("option");
      option.appendChild(document.createTextNode(`${item.name}`));
      // option.value = `${item.name}`;
      dropdown.appendChild(option);
    });

    //после нажатия submit
    btnSubmit.addEventListener('click', () => {
      const opt = dropdown.options[dropdown.selectedIndex].innerHTML;
      dataMock[`${id.slice(4) - 1}`].issues.push({ id: 'dvscfds', name: opt });

      //убираем задачу из предыдущего столбца
      for (let i = 0; i < dataMock[`${id.slice(4) - 2}`].issues.length; i++) {
        if (dataMock[`${id.slice(4) - 2}`].issues[i].name === opt) {
          dataMock[`${id.slice(4) - 2}`].issues.splice(i, 1);
          break;
        }
      }
      this.setState({ dataMock: dataMock });
      btnAdd.style.display = "flex";
      dropdown.style.display = "none";
      btnSubmit.style.display = "none";
    })
  }

  addBtnHandler = (title, id) => {
    if (title === 'Backlog') {
      this.backLogHandle();
    }
    else {
      this.othersHandle(id);
    }
  }

  render() {
    return (
      <>
        {/* <ReactRouterRoute /> */}
        <Header />
        <Board dataMock={this.state.dataMock} addBtnHandler={this.addBtnHandler}/>
        <Footer dataMock={this.state.dataMock}/>
      </>
    )
  }
}

export default App;