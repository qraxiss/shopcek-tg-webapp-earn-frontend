import React, { useState } from "react";
import logo from "../../assets/images/ShopcekLogo.png";
import Instagram from "../../assets/images/Instagram.png";
import Telegram from "../../assets/images/telegram.png";
import Twitter from "../../assets/images/twitter.png";
import Youtube from "../../assets/images/youtube.png";
import BlueTick from "../../assets/images/bluetick.png";
import { Image } from "react-bootstrap";
import { taskSelector } from "../../slices/task/slice";
import { useSelector, useDispatch } from "react-redux";
import { claim } from "../../slices/task/api";
import { AppDispatch } from "../../store";

// Define the Task type
interface Task {
  id: number;
  name: string;
  image: string;
  reward: string;
  status: "go" | "claim";
  completed: boolean;
  claimed: boolean;
}

export const Task: React.FC = () => {
  // const [tasks, setTasks] = useState<Task[]>([
  //   {
  //     id: 1,
  //     name: "Subscribe to Shopcek Telegram",
  //     image: Telegram,
  //     reward: "+10,000",
  //     status: "go", // Initially set to "go"
  //     completed: true,
  //     claimed: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Follow Shopcek On X ",
  //     image: Twitter,
  //     reward: "+10,000",
  //     status: "go", // Initially set to "go"
  //     completed: false,
  //     claimed: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Join Shopcek Instagram ",
  //     image: Instagram,
  //     reward: "+10,000",
  //     status: "go", // Initially set to "go"
  //     completed: true,
  //     claimed: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Follow Shopcek on YouTube",
  //     image: Youtube,
  //     reward: "+10,000",
  //     status: "go", // Initially set to "go"
  //     completed: false,
  //     claimed: false,
  //   },
  // ]);

  const tasks = useSelector(taskSelector);
  const dispatch: AppDispatch = useDispatch();

  return (
    <section className="task-section">
      <div className="task-container mt-4 mb-5">
        <Image src={logo} alt="Task" className="task-image" />
      </div>
      <p className="heading my-3">EARN MORE COINS</p>
      <div className="task d-flex flex-column align-items-center">
        {tasks.map(({ task, isClaimed }: any) => (
          <div
            key={task.id}
            onClick={() => {
              dispatch(claim.initiate({ taskId: task.id }));
              window.open(task.link, "_blank");
            }}
            className="d-flex justify-content-between align-items-center follow-container my-1 p-2"
          >
            <div className="d-flex align-items-center">
              <div>
                <Image
                  src={task.icon}
                  alt={task.title}
                  className={`follow-images ${
                    task.title === "Follow Shopcek On X " ? "x-image" : ""
                  }`}
                />
              </div>
              <div className=" px-1 ">
                <p className="m-0 task-heading">{task.title}</p>
                <div className="d-flex align-items-center">
                  <img src={logo} alt="" className="logo me-2" />
                  <h4 className="reward m-0">{task.reward}</h4>
                </div>
              </div>
            </div>
            <div className="tick-container">
              {isClaimed ? (
                <Image
                  src={BlueTick}
                  alt="Completed"
                  className="completed-tick"
                />
              ) : (
                <button className="claim btn">
                  {task.status === "go" ? "Go" : "Claim"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
