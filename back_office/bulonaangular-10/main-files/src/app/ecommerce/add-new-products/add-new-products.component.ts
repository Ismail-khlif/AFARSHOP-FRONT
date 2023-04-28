import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product/product.service";
import {FileHandle} from "../../models/FileHandle";

@Component({
  selector: 'app-add-new-products',
  templateUrl: './add-new-products.component.html',
  styleUrls: ['./add-new-products.component.scss']
})
export class AddNewProductsComponent implements OnInit {
  product:Product=new Product();
  array: FileHandle[] = [];

  constructor(private productservice :ProductService) { }

  ngOnInit(): void {

    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript("./assets/js/add-new-product-image-upload.js")
  }
  onSubmit(storeForm: NgForm) {
    //console.log(this.currentToken);

    const storeFormData = this.prepareFormData(this.product);
    this.productservice.addProduct(storeFormData).subscribe(
      (store: Product) => {
        console.log('Product added successfully', store);
        // Reset the form
        this.product = new Product();
      },
      (error) => {
        console.error('Failed to add product', error);
      }
    );
    this.array = [];
  }

  prepareFormData(store: Product): FormData{
    const formData = new FormData();

    formData.append('store', new Blob([JSON.stringify(store)], {type: 'application/json'}));
    if (store.images && store.images.length) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < store.images.length; i++) {
        formData.append('imageFile', store.images[i].filefile, store.images[i].filefile.name);
      }
    }
    return formData;
  }

}
