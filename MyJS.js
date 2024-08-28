document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const addTaskBtn = document.getElementById("add-task-btn");

    // Функция для добавления новой задачи
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;
            // Добавляем кнопки Edit и Delete
            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    };

    // Обработчик события для добавления задачи по клику на кнопку
    addTaskBtn.addEventListener("click", addTask);

    // Делегирование событий для управления задачами
    taskList.addEventListener("click", (event) => {
        const target = event.target;
        const li = target.closest("li");

        if (!li) return;

        if (target.tagName === "BUTTON") {
            if (target.textContent === "Delete") {
                li.remove(); // Удаление задачи
            } else if (target.textContent === "Edit") {
                const newTaskText = prompt("Редактируйте задачу:", li.firstChild.textContent);
                if (newTaskText) {
                    li.firstChild.textContent = newTaskText; // Обновление текста задачи
                }
            }
        } else {
            li.classList.toggle("completed"); // Отметка задачи как выполненной
        }
    });
});