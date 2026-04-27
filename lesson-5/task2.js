let averageGrade = 61;

switch (true) {
  case (averageGrade < 60):
    console.log("Успішність студента: Незадовільно");
    break;
  case (averageGrade >= 60 && averageGrade <= 70):
    console.log("Успішність студента: Задовільно");
    break;
  case (averageGrade >= 71 && averageGrade <= 80):
    console.log("Успішність студента: Добре");
    break;
  case (averageGrade >= 81 && averageGrade <= 90):
    console.log("Успішність студента: Дуже добре");
    break;
  case (averageGrade >= 91 && averageGrade <= 100):
    console.log("Успішність студента: Відмінно");
    break;
}
