import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { menusActions } from "../../store/Menu.store";
import { useAppDispatch } from "../../store/hooks";
import DarkMode from "../AccountSection/DarkMode";
import DeleteTasks from "../AccountSection/DeleteTasks";
import TasksDone from "../AccountSection/TasksDone";
import BtnAddTask from "../Utilities/BtnAddTask";
import Notification from "./Notification";
import SearchField from "./SearchField";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  let [BackState, BackSet] = useState(false);

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth();
  const day: number = date.getDate();

  const monthName: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}}`;

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex ">
      <SearchField />
      <div className="flex justify-start text-center">
        <span className="text-slate-600 dark:text-slate-200 uppercase font-bold text-base block xl:hidden">
          TO-DO MANAGER
        </span>
        <TasksDone />
      </div>
      <div className="flex flex-1">
        <Notification />
        <DeleteTasks />
        <DarkMode />
        <BtnAddTask className="hidden xl:block shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />
      </div>
      <button
        className="flex justify-end xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <MenuIcon />
      </button>
    </header>
  );
};

export default HeaderTasks;
