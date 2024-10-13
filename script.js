// Обработчик события на кнопке добавления задачи
document.getElementById('addTaskButton').onclick = function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }

    // Создание нового элемента задачи
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Создание чекбокса
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'me-2';

    // Зачёркивание текста при установке галочки
    checkbox.onchange = function() {
        taskItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    };

    // Создание кнопки для удаления
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    // Добавление всех элементов в элемент задачи
    taskItem.appendChild(checkbox);
    taskItem.appendChild(document.createTextNode(taskText));
    taskItem.appendChild(deleteButton);

    // Добавление задачи в список
    document.getElementById('taskList').appendChild(taskItem);

    // Очистка поля ввода
    taskInput.value = '';
};

// Обработчик события на кнопке сортировки чисел
document.getElementById('sortButton').onclick = function() {
    const numbersInput = document.getElementById('numbers').value;
    const sortOrder = document.getElementById('sortOrder').value;

    // Проверка на ввод только чисел
    const numbersArray = numbersInput.split(',').map(num => num.trim());
    const invalidInput = numbersArray.some(num => isNaN(num) || num === '');

    if (invalidInput) {
        alert('Пожалуйста, введите только числа, разделенные запятыми.');
        return;
    }

    // Преобразуем в числа
    const sortedNumbers = numbersArray.map(Number);

    // Сортировка
    if (sortOrder === 'asc') {
        sortedNumbers.sort((a, b) => a - b);
    } else {
        sortedNumbers.sort((a, b) => b - a);
    }

    // Отображение результата
    document.getElementById('result').textContent = sortedNumbers.join(', ');
};
