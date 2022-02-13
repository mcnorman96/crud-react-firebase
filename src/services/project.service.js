import firebase from "../firebase";

const db = firebase.collection("/development");

class ProjectDataService {
  getAll() {
    return db;
  }

  create(project) {
    return db.add(project);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new ProjectDataService();
