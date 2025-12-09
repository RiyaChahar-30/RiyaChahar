import Card from "C:\Users\riyac\OneDrive\Desktop\html\card.jsx";

export default function App() {
  const products = [
    {
      image: "https://via.placeholder.com/250",
      title: "Smartphone",
      description: "High quality smartphone with great features."
    },
    {
      image: "https://via.placeholder.com/250",
      title: "Headphones",
      description: "Noise-cancelling wireless headphones."
    },
    {
      image: "https://via.placeholder.com/250",
      title: "Laptop",
      description: "Powerful laptop for work and gaming."
    }
  ];

  return (
    <div style={{ 
      display: "flex", 
      gap: "20px", 
      padding: "20px" 
    }}>
      {products.map((product, index) => (
        <Card 
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}
