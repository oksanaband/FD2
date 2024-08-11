
function Participant(name, email) {
    this.name = name;
    this.email = email;
}

function Event(title, date) {
    this.title = title;
    this.date = date;
    this.participants = [];
}

// метод для добавления участника к событию
Event.prototype.addParticipant = function(participant) {
    // Проверяем, является ли participant объектом, созданным с помощью Participant
    if (participant instanceof Participant) {
        this.participants.push(participant);
        console.log(`Участник ${participant.name} добавлен к событию "${this.title}".`);
    } else {
        console.log("Ошибка: объект не является участником.");
    }
};

// метод для вывода списка участников
Event.prototype.listParticipants = function() {
    if (this.participants.length === 0) {
        console.log(`У события "${this.title}" нет участников.`);
    } else {
        console.log(`Участники события "${this.title}":`);
        this.participants.forEach((participant) => {
            console.log(`- ${participant.name} (${participant.email})`);
        });
    }
};

// метод для поиска участника по email
Event.prototype.findParticipantByEmail = function(email) {
    const participant = this.participants.find((p) => p.email === email);
    if (participant) {
        console.log(`Участник найден: ${participant.name} (${participant.email})`);
        return participant;
    } else {
        console.log("Участник с таким email не найден.");
        return null;
    }
};