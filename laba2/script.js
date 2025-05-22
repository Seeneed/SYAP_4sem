var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
array.forEach(function (person) {
    console.log("ID: ".concat(person.id, ", \u0418\u043C\u044F: ").concat(person.name, ", \u0413\u0440\u0443\u043F\u043F\u0430: ").concat(person.group));
});
var car = {
    manufacturer: "Italy",
    model: "Ferrari",
};
console.log("\u0421\u0442\u0440\u0430\u043D\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ".concat(car.manufacturer, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(car.model));
var car1 = {
    manufacturer: "Germany",
    model: "Audi",
};
var car2 = {
    manufacturer: "Japan",
    model: "Nissan",
};
var arrayCars = [{
        cars: [car, car2]
    }];
for (var i = 0; i < arrayCars.length; i++) {
    for (var j = 0; j < arrayCars[i].cars.length; j++) {
        console.log("ID: ".concat(j, ", \u0421\u0442\u0440\u0430\u043D\u0430-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C: ").concat(arrayCars[i].cars[j].manufacturer, ", \u041C\u0430\u0440\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ").concat(arrayCars[i].cars[j].model));
    }
}
var student1 = {
    id: 1,
    name: "Vasya",
    group: 3,
    marks: [{ subject: "Math", mark: 7, done: true }]
};
var student2 = {
    id: 2,
    name: "Ivan",
    group: 5,
    marks: [{ subject: "English", mark: 9, done: true }]
};
var group = {
    students: [student1, student2],
    studentsFilter: function (filterGroup) { return group.students.filter(function (student) { return student.group === filterGroup; }); },
    marksFilter: function (mark) { return group.students.filter(function (student) { return student.marks.some(function (m) { return m.mark === mark; }); }); },
    deleteStudent: function (id) {
        group.students = group.students.filter(function (student) { return student.id !== id; });
    },
    mark: 5,
    group: 1,
};
group.students.forEach(function (student) {
    console.log("ID: ".concat(student.id, ", \u0418\u043C\u044F: ").concat(student.name, ", \u0413\u0440\u0443\u043F\u043F\u0430: ").concat(student.group));
    student.marks.forEach(function (mark) {
        console.log("\u041F\u0440\u0435\u0434\u043C\u0435\u0442: ".concat(mark.subject, ", \u041E\u0446\u0435\u043D\u043A\u0430: ").concat(mark.mark, ", \u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435: ").concat(mark.done));
    });
});
