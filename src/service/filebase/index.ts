import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChXd5fqcIuz_o_ndwEyNYxgNhj8s4RZvU",
  authDomain: "md05-ce05d.firebaseapp.com",
  projectId: "md05-ce05d",
  storageBucket: "md05-ce05d.appspot.com",
  messagingSenderId: "441748675078",
  appId: "1:441748675078:web:5f6d71c3f1850c55634187",
  measurementId: "G-ZE1F99KK4X",
};

const app = initializeApp(firebaseConfig);

export const fireBaseFn = {
  uploadToStorage: async (
    file: File,
    fallBackUrl: string = `${import.meta.env.VITE_SV}/notimg.jpg`
  ) => {
    try {
      const typeFile = `.${file.type.split("/")[1]}`;
      const fileName = `picture_${Math.ceil(
        Date.now() * Math.random()
      )}${typeFile}`;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const res = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(res.ref)
        .then((res) => res)
        .catch((err) => (console.log(err), fallBackUrl));
      return url;
    } catch (err) {
      return fallBackUrl;
    }
  },
};

export const deleteImage = async (url: string) => {
  try {
    const storage = getStorage(app);
    const imageRef = ref(storage, url);
    await deleteObject(imageRef);
    console.log("Image deleted successfully");
  } catch (err) {
    console.error("Error deleting image:", err);
  }
};
