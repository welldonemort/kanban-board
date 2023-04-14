const tasks_local = localStorage.getItem("tasks");
const accounting_local = localStorage.getItem("accounting");

let tasks = {
  dataMock: [
    {
      title: "Backlog",
      issues: [
        {
          id: "task1",
          name: "Login page – performance issues",
        },
        {
          id: "task2",
          name: "Sprint bugfix",
        },
        {
          id: "task3",
          name: "Shop page – performance issues",
        },
        {
          id: "task4",
          name: "Checkout bugfix",
        },
        {
          id: "task5",
          name: "Shop bug1",
        },
        {
          id: "task6",
          name: "Shop bug2",
        },
        {
          id: "task7",
          name: "Shop bug3",
        },
        {
          id: "task8",
          name: "Shop bug4",
        },
        {
          id: "task9",
          name: "Shop bug5",
        },
        {
          id: "task10",
          name: "Shop bug6",
        },
        {
          id: "task11",
          name: "Shop page – performance issues",
        },
        {
          id: "task12",
          name: "User page – performance issues",
        },
        {
          id: "task13",
          name: "Auth bugfix",
        },
        {
          id: "task14",
          name: "Main page – performance issues",
        },
        {
          id: "task15",
          name: "Main page bugfix",
        },
      ],
    },
    {
      title: "In progress",
      issues: [],
    },
    {
      title: "Ready",
      issues: [],
    },
    {
      title: "Finished",
      issues: [],
    },
  ],
};

let accounting = [
  {
    id: 1,
    title: "income",
    items: [
      { name: "ЗП", balance: 0 },
      { name: "Стипендия", balance: 0 },
    ],
  },
  {
    id: 2,
    title: "storage",
    items: [
      { name: "Кошелек", balance: 0, icon: "wallet" },
      { name: "Банковский счет", balance: 0, icon: "bank" },
    ],
  },
  {
    id: 3,
    title: "category",
    items: [
      { name: "Продукты", balance: 0 },
      { name: "Еда вне дома", balance: 0 },
      { name: "Транпорт", balance: 0 },
      { name: "Покупки", balance: 0 },
      { name: "Дом. хоз-во", balance: 0 },
      { name: "Развлечения", balance: 0 },
      { name: "Улуги", balance: 0 },
    ],
  },
  {
    id: 4,
    title: "limit",
    value: 200000,
  },
];

if (tasks_local) {
  tasks = JSON.parse(tasks_local);
}

if (accounting_local) {
  accounting = JSON.parse(accounting_local);
}

export const globalState = (state = { tasks, accounting }, action) => {
  switch (action.type) {
    case "SET_TASKS":
      localStorage.setItem("tasks", JSON.stringify(action.payload));
      return { tasks: action.payload, accounting };
    case "SET_ACCOUNTING":
      localStorage.setItem("accounting", JSON.stringify(action.payload));
      return { tasks, accounting: action.payload };
    default:
      return state;
  }
};
