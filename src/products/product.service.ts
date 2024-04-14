import { Injectable, Param, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable({
    scope: Scope.DEFAULT, // Default scope: Singleton (same instance shared across entire application)
    // scope: Scope.REQUEST, // Request scope: New instance created for each incoming request
    // scope: Scope.TRANSIENT, // Transient scope: New instance created each time the service is requested
})
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel) {
        console.log('ProductService instantiated: ', this.productModel);
    }

    async getAllProducts() {
        return await this.productModel.find();
    }

    async getProductById(@Param('id') id: number) {
        return await this.productModel.findById(id);
    }

    async createProduct(productData) {
        const newProduct = new this.productModel(productData);
        return await newProduct.save();
    }

    async updateProduct(id, productData) {
        return await this.productModel.findByIdAndUpdate(id, productData, {
            new: true,
        });
    }

    async deleteProduct(id) {
        await this.productModel.findByIdAndDelete(id);
        return true;
    }
}

/**
 * @Injectable():
 * The @Injectable() decorator is used to define a class as a provider. Providers are a fundamental concept in NestJS. They are
 * used to define the services that can be injected into other classes.
 */

/**
 * Exception Filters:
 * Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application.
 * When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an
 * appropriate user-friendly response.
 */
