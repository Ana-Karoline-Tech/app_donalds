import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">products page</h1>
      <Input placeholder="Search products..." />
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductPage;

