import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {FileHandle} from '../../models/FileHandle';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ImageProceesingsService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(store: Product) {
    const storeImages: any[] = store.images;
    const storeImagesToFileHandle: FileHandle[] = [];
    for(let i = 0; i < storeImages.length; i++){
      const imageFileData = storeImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.type});
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      const finalFileHandle: FileHandle = {
        filefile: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile)),
        preview: reader.result as string
      };
      storeImagesToFileHandle.push(finalFileHandle);
    }
    store.images = storeImagesToFileHandle;
    return store;
  }
  public dataURItoBlob(picBytes, imageType){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i = 0; i < byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }
}
