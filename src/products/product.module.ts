import { Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import ProductSchema from '../schemas/product.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    ],
    controllers: [ProductController],
    providers: [ProductService], // Same as providers: [{ provide: ProductService, useClass: ProductService}]
    exports: [MongooseModule],
})
export class ProductModule implements OnModuleInit, OnModuleDestroy {
    constructor() {}

    onModuleInit() {
        // console.log('ProductModule has been initialized');
    }

    onModuleDestroy() {
        // console.log('ProductModule is about to be destroyed');
    }
}

/**
 * NestJS Lifecycle Hooks
 *
 * 1. onModuleInit(): This method is called once the module has been initialized.
 * 2. onModuleDestroy(): This method is called once the module is about to be destroyed.
 * 3. onApplicationBootstrap(): This method is called once the application has been bootstrapped.
 * 4. onApplicationShutdown(): This method is called once the application is about to be shut down.
 *
 * This lifecycle hooks can be used anywhere in the application, not just in the modules. for example, in the controllers
 * services, etc.
 */
