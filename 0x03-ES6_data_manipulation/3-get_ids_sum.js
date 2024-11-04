export default function getStudentIdSum(object) {
  if (typeof object !== 'object') return [];
  return object.reduce((previous, current) => previous + current.id, 0);
}
