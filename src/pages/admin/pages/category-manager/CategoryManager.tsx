import { Table } from "react-bootstrap";
import "./category-manager.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/store";
import { Category, categoryActions } from "@/store/slices/category.slices";
import { useRef, useState } from "react";
import { fireBaseFn } from "@/service/filebase";
import api from "@/api";


export default function CategoryManager() {
  const dispatch = useDispatch();
  const categoryStore = useSelector((store: StoreType) => {
    return store.categoryStore;
  });

  const [file, setFile] = useState<File | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileRef = useRef<any>();

  return (
    <div className="category_manager_box">
      <input
        ref={fileRef}
        type="file"
        onChange={(e) => {
          if (e.target.files?.length != 0) {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }
        }}
      />
      <button
        onClick={async () => {
          if (file === null) return;
          const newCategory: Category = {
            name: prompt("Enter category name") || "",
            image: await fireBaseFn.uploadToStorage(file),
          };

          api.category
            .addCategories(newCategory)
            .then((res) => {
              console.log("res", res);
              // dispatch(categoryAction.findAllThunk() as any)
              dispatch(categoryActions.add(res.data));
              fileRef.current.value = null;
            })
            .catch((err) => {
                console.log("err", err);
                
            });
        }}
        className="btn btn-primary"
      >
        Add New
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Icon</th>
            <th>Status</th>
            <th colSpan={2}>Tools</th>
          </tr>
        </thead>
        <tbody>
          {categoryStore.data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} />
                </td>
                <td>{item.status ? "Active" : "Inactive"}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
