import React, { useState } from "react";
import logo from "../../assets/images/icon.svg";
import Discord from "../../assets/images/discord.svg";
import Telegram from "../../assets/images/telegram.png";
import Twitter from "../../assets/images/twitter.png";
import Youtube from "../../assets/images/youtube.png";
import BlueTick from "../../assets/images/bluetick.png";
import { Image } from "react-bootstrap";

export const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Join Our Telegram",
      image: Telegram,
      reward: "+10,000",
      completed: true,
    },
    {
      id: 2,
      name: "Follow Our X Account",
      image: Twitter,
      reward: "+10,000",
      completed: false,
    },
    {
      id: 3,
      name: "Join Our Discord",
      image: Discord,
      reward: "+10,000",
      completed: true,
    },
    {
      id: 4,
      name: "Join Our Youtube",
      image: Youtube,
      reward: "+10,000",
      completed: false,
    },
  ]);

  const handleTaskCompletion = (id: any) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <section className="task-section">
      <div className="task-container my-5">
        <Image src={logo} alt="Task" className="task-image" />
      </div>
      <p className="heading my-3">Earn More Coins</p>
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="d-flex justify-content-between align-items-center follow-container my-3 p-3"
            onClick={() => handleTaskCompletion(task.id)}
          >
            <div className="d-flex align-items-center">
              <Image
                src={task.image}
                alt={task.name}
                className={`follow-images ${
                  task.name === "Follow Our X Account" ? "x-image" : ""
                }`}
              />
              <div>
                <p className="m-0 task-heading">{task.name}</p>
                <div className="d-flex align-items-center">
                  <img src={logo} alt="" className="logo me-2" />
                  <h4 className="m-0">{task.reward}</h4>
                </div>
              </div>
            </div>
            <div>
              {task.completed && (
                <Image
                  src={BlueTick}
                  alt="Completed"
                  className="completed-tick"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
