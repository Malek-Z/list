import React, { useState } from 'react';

import '../css/todo.css';

export const Todo = () => {

  const [categories] = useState([
    { id: 1, name: "Cours en ligne" },
    { id: 2, name: "Devoirs_maison" },
    { id: 3, name: "Administration" },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, text: "cour génie logiciel", completed: false, category: "Cours en ligne", priority: "Élevée" },
    { id: 2, text: "préparer présentation projet paw", completed: true, category: "Devoirs_maison", priority: "Moyenne" },
    { id: 3, text: "remplir le formulaire de bourse ", completed: false, category: "Administration", priority: "Faible" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Moyenne"); // Priorité par défaut
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [editTaskPriority, setEditTaskPriority] = useState("");

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setNewTaskText("");
    setNewTaskPriority("Moyenne");
  };

  const handleAddTask = () => {
    if (newTaskText.trim() === "") {
      alert("La tâche ne peut pas être vide !");
      return;
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        text: newTaskText,
        completed: false,
        category: selectedCategory,
        priority: newTaskPriority,
      },
    ]);
    setNewTaskText("");
    setNewTaskPriority("Moyenne");
  };

  const handleEditTask = (taskId, currentText, currentPriority) => {
    setEditingTaskId(taskId);
    setEditTaskText(currentText);
    setEditTaskPriority(currentPriority);
  };

  const handleSaveTask = () => {
    if (editTaskText.trim() === "") {
      alert("Le texte de la tâche ne peut pas être vide !");
      return;
    }
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTaskId
          ? { ...task, text: editTaskText, priority: editTaskPriority }
          : task
      )
    );
    setEditingTaskId(null);
    setEditTaskText("");
    setEditTaskPriority("");
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <h3>{category.name}</h3>
            <button>Voir les tâches</button>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="tasks">
          <h2>Tâches pour {selectedCategory}</h2>
          <div className="add-task">
            <input
              type="text"
              placeholder="Ajouter une nouvelle tâche..."
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
            >
              <option value="Élevée">Élevée</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Faible">Faible</option>
            </select>
            <button onClick={handleAddTask}>Ajouter</button>
          </div>
          {tasks
            .filter((task) => task.category === selectedCategory)
            .sort((a, b) => {
              const priorityOrder = { Élevée: 1, Moyenne: 2, Faible: 3 };
              return priorityOrder[a.priority] - priorityOrder[b.priority];
            })
            .map((task) => (
              <div
                key={task.id}
                className={`task ${task.completed ? "completed" : ""}`}
              >
                {editingTaskId === task.id ? (
                  <div className="edit-task">
                    <input
                      type="text"
                      value={editTaskText}
                      onChange={(e) => setEditTaskText(e.target.value)}
                    />
                    <select
                      value={editTaskPriority}
                      onChange={(e) => setEditTaskPriority(e.target.value)}
                    >
                      <option value="Élevée">Élevée</option>
                      <option value="Moyenne">Moyenne</option>
                      <option value="Faible">Faible</option>
                    </select>
                    <button onClick={handleSaveTask}>Enregistrer</button>
                    <button onClick={() => setEditingTaskId(null)}>Annuler</button>
                  </div>
                ) : (
                  <>
                    <span>{task.text}</span>
                    <span className="priority">[{task.priority} priorité]</span>
                    <div className="task-actions">
                      <button
                        className="complete"
                        onClick={() => handleCompleteTask(task.id)}
                      >
                        {task.completed ? "Annuler" : "Terminer"}
                      </button>
                      <button
                        className="edit"
                        onClick={() =>
                          handleEditTask(task.id, task.text, task.priority)
                        }
                      >
                        Modifier
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        Supprimer
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Todo;