import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks.store";
import ModalConfirm from "../Utilities/ModalConfirm";
import { ReactComponent as Trash } from "../../assets/trash.svg";


const DeleteTasks: React.FC = () => {
  const dispatch = useAppDispatch();

  const [showModal, setIsModalShown] = useState<boolean>(false);

  const deleteAllDataHandler = () => {
    dispatch(tasksActions.deleteAllData());
  };

  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="All data will be deleted permanently."
          onConfirm={deleteAllDataHandler}
        />
      )}
      <button
        className="text-left text-slate-button hover:text-slate-button dark:hover:text-yellow-700 transition sm:mr-7"
        onClick={() => setIsModalShown(true)}
      >
          <Trash />
      </button>
    </>
  );
};

export default React.memo(DeleteTasks);
