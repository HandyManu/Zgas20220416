import React from "react";

const CardBlog = ({ blog, onEdit, onDelete }) => {
  return (
    <div style={styles.card}>
      <img src={blog.image} alt={blog.title} style={styles.image} />
      <div style={styles.content}>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <div style={styles.actions}>
          <button style={styles.button} onClick={() => onEdit(blog)}>
            Editar
          </button>
          <button style={styles.button} onClick={() => onDelete(blog._id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "16px",
    maxWidth: "400px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
  },
};

export default CardBlog;
