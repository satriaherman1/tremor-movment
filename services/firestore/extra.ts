import { db } from "@src/config/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

class ExtraService {
  async getExtras() {
    const docRef = collection(db, "extra-list");
    return await getDocs(docRef)
      .then((snapShot) => {
        const data = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        return data;
      })
      .catch((err) => console.log(err));
  }

  async getExtra(id: string) {
    const docRef = doc(db, "extra-list", id);
    return await getDoc(docRef).then((snapShot) => snapShot.data());
  }

  async registerExtra(id: string, uid: string) {
    const docRef = doc(db, "users", uid);
    const newData = {
      extras: arrayUnion(id),
    };

    return await updateDoc(docRef, newData);
  }

  async searchMaterial(extraId: string): Promise<any> {
    const q = query(
      collection(db, "material-list"),
      where("extraId", "==", extraId)
    );

    const materials = await getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          // Dokumen yang memiliki extraId sesuai

          const result = {
            id: doc.id,
            ...doc.data(),
          };

          return result;
        });

        console.log("data : ", data);

        return data;
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });

    return materials;
  }
}

export default ExtraService;
