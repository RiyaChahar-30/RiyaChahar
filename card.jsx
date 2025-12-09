// Card.jsx
export default function Card({ image, title, description }) {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px"
        }} 
      />

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
