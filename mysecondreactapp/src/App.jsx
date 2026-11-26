import ProductCard from "./ProductCard";
import "./App.css";

function App() {
    return (
        <div className="container">

            <h1>Our Products</h1>

            <div className="product-list">

                <ProductCard
                    image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
                    title="Headphones"
                    description="High-quality wireless headphones with clear sound."
                />

                <ProductCard
                    image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
                    title="Smart Watch"
                    description="A stylish smartwatch with fitness tracking features."
                />

                <ProductCard
                    image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400"
                    title="Camera"
                    description="Capture beautiful moments with this digital camera."
                />

            </div>

        </div>
    );
}

export default App;