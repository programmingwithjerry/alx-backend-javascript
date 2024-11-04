export default function updateStudentGradeByCity(list, city, newGrade) {
  if (!(list instanceof Array)) return [];
  return list
    .filter(item => item.location === city)
    .map(item => {
      const studentGrade = newGrade.find(grade => grade.studentId === item.id);
      return {
        ...item,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
