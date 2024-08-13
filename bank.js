class BankAccount {
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error('Начальный баланс не может быть отрицательным.');
        }
        this.balance = initialBalance;
        this.interestInterval = null;
    }

    deposit(amount) {
        try {
            if (amount <= 0) {
                throw new Error('Сумма пополнения должна быть положительной.');
            }
            this.balance += amount;
            console.log(`Пополнение: +${amount}. Текущий баланс: ${this.getBalance()}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    withdraw(amount) {
        try {
            if (amount <= 0) {
                throw new Error('Сумма снятия должна быть положительной.');
            }
            if (amount > this.balance) {
                throw new Error('Недостаточно средств на счете.');
            }
            this.balance -= amount;
            console.log(`Снятие: -${amount}. Текущий баланс: ${this.getBalance()}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    getBalance() {
        return this.balance;
    }

    startInterest(interval, rate) {
        this.interestInterval = setInterval(() => {
            const interest = this.balance * (rate / 100);
            this.balance += interest;
            console.log(`Начислены проценты: +${interest.toFixed(2)}. Текущий баланс: ${this.getBalance().toFixed(2)}`);
        }, interval);
    }

    stopInterest() {
        if (this.interestInterval) {
            clearInterval(this.interestInterval);
            this.interestInterval = null;
            console.log('Начисление процентов остановлено.');
        }
    }

    scheduleTransaction(type, amount, delay) {
        setTimeout(() => {
            if (type === 'deposit') {
                this.deposit(amount);
            } else if (type === 'withdraw') {
                this.withdraw(amount);
            } else {
                console.error('Неизвестный тип транзакции.');
            }
        }, delay);
    }
}
