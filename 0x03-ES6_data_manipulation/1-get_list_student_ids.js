export default function getListStudentIds(obj) {
  if (!Array.isArray(obj)) {
    return [];
  }
  return obj.map(item => item.id);
}
