function deepCopy(obj) {
    // Проверка на примитивные типы и null
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Проверка на массив
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item)); // Рекурсивно копируем элементы массива
    }

    // Создаем новый объект для копирования
    const newObj = {};

    // Рекурсивно копируем свойства объекта
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]); // Рекурсивный вызов для вложенных объектов
        }
    }

    return newObj;
}

// Объект для тестирования
const complexObject = {
    name: 'Test Object',
    age: 42,
    isActive: true,
    scores: [95, 88, 76, 100],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345',
        geo: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    tags: ['test', 'example', 'sample'],
    metadata: {
        version: 1.0,
        contributors: [
            { name: 'Alice', role: 'Author' },
            { name: 'Bob', role: 'Reviewer' }
        ]
    },
    settings: {
        theme: 'dark',
        notifications: {
            email: true,
            sms: false
        },
        preferences: {
            language: 'en',
            timezone: 'UTC'
        }
    },
    preferences: {
        colorScheme: 'light',
        fontSize: 14,
        layout: {
            header: 'fixed',
            footer: 'static'
        }
    },
    history: [
        { event: 'created', timestamp: '2023-10-01T10:00:00Z' },
        { event: 'updated', timestamp: '2023-10-02T12:00:00Z' }
    ]
};
