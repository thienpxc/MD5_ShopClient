import { Table } from "react-bootstrap";
import "./category-manager.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/store";
import { Category, categoryActions } from "@/store/slices/category.slices";
import { useEffect, useRef, useState } from "react";
import { fireBaseFn } from "@/service/filebase";
import api from "@/api";
import { Pagination } from "@mui/material";
import { useTranslation } from "react-i18next";
import { debounce } from "lodash";
import { type } from "./../../../../store/index";
export default function CategoryManager() {
  // const dispatch = useDispatch();
  const categoryStore = useSelector((store: StoreType) => {
    return store.categoryStore;
  });

  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileRef = useRef<any>();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const limit = 3;

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    api.category.paginationCategory(offset, limit).then((response) => {
      console.log("Category data:", response.data);
      const newData = categoryStore.data?.slice(offset, offset + limit) ?? [];
      setCurrentPageData(newData);
    });
  }, [currentPage, categoryStore.data]);

  const totalPage = Math.ceil((categoryStore.data?.length ?? 0) / limit);
  const handlePageChange = (event: any, page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  // Add category
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData(event.currentTarget);
    await fireBaseFn.uploadToStorage(file).then((res) => {
      setImage(res);
    });
    if (image === "") {
      console.error("Error uploading image");
      return;
    }
    const data = {
      name: formData.get("name"),
      image: image,
    };
    // Call your API to add the category details (excluding the file)
    console.log("datadasdasda", data);
    api.category
      .addCategories(data)
      .then((response) => {
        console.log("Category added:", response.data);

        setShowModal(false);
        // window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  // Delete category
  function handleDelete(id: number) {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (isConfirmed) {
      api.category
        .deleteCategories(id)
        .then((response) => {
          console.log("Category deleted:", response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  }

  // ----------Edit category-------------------------------

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState({
    id: "",
    name: "",
    image: "",
  });
  const closeModalEdit = () => {
    setIsModalVisible(false);
  };

  const openModalEdit = (id: number) => {
    setIsModalVisible(true);
    // Gọi API với categoryId
    api.category
      .getCategoriesID(id)
      .then((response) => {
        setCategoryEdit(response.data);
        console.log("Category :", response.data);
      })
      .catch((error) => {
        console.error("Error getting category:", error);
      });
  };

  const handleEdit = async (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData(event.target);
    await fireBaseFn.uploadToStorage(file).then((res) => {
      setImage(res);
    });

    const data = {
      id: formData.get("id"),
      name: formData.get("name"),
      image: image,
    };
    console.log("dataaa", data);
    // Gọi API edit
    api.category
      .updateCategories(data)
      .then((response) => {
        console.log("Category edited:", response.data);
        closeModalEdit(); // Close the modal on success
        // window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error editing category:", error.response.data);
          console.error("Status code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error(
            "Error editing category: No response received",
            error.request
          );
        } else {
          console.error("Error editing category:", error.message);
        }
      });
  };

  //translate
  const { t } = useTranslation();

  //search category (su dung debounce cua lodash)
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // Kiểm tra xem có kết quả tìm kiếm không, nếu có thì hiển thị kết quả tìm kiếm, nếu không thì hiển thị dữ liệu trang hiện tại
  const dataToShow = searchResult.length > 0 ? searchResult : currentPageData;

  const performSearch = () => {
    debouncedSearch(search);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const debouncedSearch = debounce((value: string) => {
    console.log("Debounced search called with value:", value);
    if (value === "") {
      setSearchResult([]);
    } else {
      api.category
        .searchCategory(value)
        .then((response) => {
          console.log("Search API response:", response);
          setSearchResult(response.data);
        })
        .catch((error) => {
          console.error("Error searching category:", error);
        });
    }
  }, 300);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  return (
    <div className="category-list">
      <div className="search-bar">
        <h1>{t("category")}</h1>
        <div>
          <input
            type="text"
            placeholder="Search for category"
            value={search}
            onChange={handleInputChange}
          />
          <button
            onClick={performSearch}
            style={{
              marginLeft: "10px",
              padding: "5px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              height: "40px",
            }}
          >
            Tìm kiếm
          </button>
        </div>
      </div>

      <h2>{t("allCategory")}</h2>

      <button className="add-category-btn" onClick={handleOpenModal}>
        {t("addCategory")}
      </button>
      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <h2>{t("addCategory")}</h2>
            <label htmlFor="name">{t("nameCategory")}</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="image">{t("imageCategory")}</label>
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
            <button type="button" onClick={handleCloseModal}>
              {t("close")}
            </button>
            <button type="submit" className="btn btn-primary">
              {t("add")}
            </button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>{t("idCategory")}</th>
            <th>{t("nameCategory")}</th>
            <th>{t("imageCategory")}</th>
            <th>{t("statusCategory")}</th>
            <th>{t("actionCategory")}</th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((category: any, index: number) => (
            <tr key={category.id}>
              <td>{(currentPage - 1) * limit + index + 1}</td>{" "}
              {/* Correct indexing for pagination */}
              <td>{category.name}</td>
              <td>
                <img src={category.image} />
              </td>
              <td>{category.status ? "Đang bán" : "Hết hàng"}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    openModalEdit(category.id);
                    console.log("category.id", category.id);
                  }}
                >
                  {t("edit")}
                </button>
                {isModalVisible && (
                  <div className="modal">
                    <form onSubmit={handleEdit}>
                      <h2>{t("editCategory")}</h2>
                      <label htmlFor="id">{t("idCategory")}</label>
                      <input
                        type="text"
                        name="id"
                        value={categoryEdit.id}
                        readOnly
                      />
                      <label htmlFor="name">{t("nameCategory")}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={categoryEdit.name}
                        required
                      />
                      <label htmlFor="image">{t("imageCategory")}</label>
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

                      <button type="button" onClick={closeModalEdit}>
                        {t("close")}
                      </button>
                      <button type="submit" className="btn btn-primary">
                        {t("save")}
                      </button>
                    </form>
                  </div>
                )}

                <button
                  className="delete-btn"
                  onClick={() => {
                    handleDelete(category.id);
                  }}
                >
                  {t("delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        count={totalPage} // Use the calculated total pages
        page={currentPage} // Current page
        onChange={handlePageChange} // Handle page change
        shape="rounded"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
}
