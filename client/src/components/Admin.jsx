import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: 0,
    rating: "",
    images: [],
    category: "",
    stock: 0,
    featured: "",
  });
  console.log(form);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("entered submit");
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DOMAIN}/admin/product/create`,
      form
    );
    alert(response.data.success);
   
  };
  const handleImageUploadAndSubmit = async (e) => {
    const files = e.target.files;
    console.log(files);
    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("file", file);
      formData.append("upload_preset", "productImage"); // Replace with your upload preset
    });

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      formData
    );
    console.log(response);
    // Assuming you want to store the first image's URL and ID
    const imageUrl = response.data.secure_url;
    const imageId = response.data.public_id;

    // Update form state with image ID and URL
    setForm({
      ...form,
      images: [...form.images, { public_id: imageId, url: imageUrl }],
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="rating"
          name="rating"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="file"
          name="images"
          onChange={handleImageUploadAndSubmit}
          multiple
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="stock"
          name="stock"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="featured"
          name="featured"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
