import {FileHandle} from './FileHandle';

export class Product {
  productId: number;
  reference: string;
  productName: string;
  description: string;
  quantity: number;
  brand: string;
  price: number;
  discount: number;
  yearsOfWarranty: number;
  ProductCategory: string;
  images: FileHandle[];
}
