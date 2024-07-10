import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVDLhDkjsJNI3l97DU9mONV60JASOfokA",
  authDomain: "java-75075.firebaseapp.com",
  projectId: "java-75075",
  storageBucket: "java-75075.appspot.com",
  messagingSenderId: "596834806177",
  appId: "1:596834806177:web:edcffb86efbdd12fd283e0",
  measurementId: "G-EMPYD4HQXR",
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
