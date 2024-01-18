function validateForm() {
    let person = document.getElementById('person').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let error = false;
    if (!validateReservation(person, date, time)) {
        error = true;
        alert('Неверные данные для бронирования');
    }
    if (error) {
        return false;
    } else {
        window.location.href = "index-UP.html"; // Перенаправление на главную страницу
    }
}
function validateReservation(person, date, time) 
    // Проверка количества человек (должно быть число от 1 до 10)
    const personPattern = /^[1-9]|10$/;
    return emailPattern.test(person);
    // Проверка даты (должна быть в формате MM/DD/YYYY)
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    return datePattern.test(date)
    // Проверка времени (должно быть в формате HH:MM AM/PM)
    const timePattern = /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/;
    return datePattern.test(time)
