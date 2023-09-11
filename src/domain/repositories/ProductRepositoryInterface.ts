import { IProduct } from "../entities/Product";

export interface ProductRepository {
  getAllProducts(): Promise<IProduct[]>;
  findProductById(id: string): Promise<IProduct | null>;
  createProduct(name: string): Promise<IProduct>;
  updateProduct(id: string, name: string): Promise<IProduct | null>;
  deleteProduct(id: string): Promise<IProduct | null>;
}
