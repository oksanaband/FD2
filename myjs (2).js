// Список пользователей
const users = [
    { id: 1, name: 'Oksana' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Vlad' },
];

// Список задач
const tasks = {
    1: [{ id: 1, title: 'Task 1 for Oksana' }, { id: 2, title: 'Task 2 for Oksana' }],
    2: [{ id: 3, title: 'Task 1 for Dima' }],
    3: [{ id: 4, title: 'Task 1 for Dima' }, { id: 5, title: 'Task 2 for Dima' }, { id: 6, title: 'Task 3 for Dima' }],
};

// Функция для получения пользователей
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });
}

// Функция для получения задач для конкретного пользователя
function fetchTasksForUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tasks[userId] || []);
        }, 1000);
    });
}

// Основная функция для загрузки данных пользователей и задач
async function loadUserData(taskThreshold) {
    try {
        const usersList = await fetchUsers();

        // Получаем задачи для каждого пользователя
        const tasksPromises = usersList.map(user =>
            fetchTasksForUser(user.id).then(userTasks => ({
                ...user,
                tasks: userTasks
            }))
        );

        // Параллельное выполнение всех запросов на задачи
        const usersWithTasks = await Promise.all(tasksPromises);

        // Фильтрация пользователей по количеству задач
        const filteredUsers = usersWithTasks.filter(user => user.tasks.length > taskThreshold);

        // Отображение результата в консоли
        console.log('Filtered Users:', filteredUsers);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Вызов основной функции с порогом задач, например 1
loadUserData(1);