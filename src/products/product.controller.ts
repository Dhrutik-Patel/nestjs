import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
    UsePipes,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productService.getProductById(id);
    }

    @Post()
    createProduct(@Body() productData) {
        return this.productService.createProduct(productData);
    }

    @Put(':id')
    @UsePipes(ParseIntPipe)
    updateProduct(@Param('id') id: number, @Body() productData) {
        return this.productService.updateProduct(id, productData);
    }

    @Delete(':id')
    @UsePipes(ParseIntPipe)
    deleteProduct(@Param('id') id) {
        return this.productService.deleteProduct(id);
    }
}

/**
 * Pipes:
 * Pipes in NestJS serve to transform the incoming data before it reaches the route handler.
 * They validate, transform, or sanitize data, ensuring it meets specific criteria or format.
 *
 * Built-in Pipes:
 * 1. ParseIntPipe:
 *    - It is used to parse the incoming parameter as an integer.
 *
 * 2. ParseFloatPipe:
 *    - It is used to parse the incoming parameter as a floating-point number.
 *
 * 3. ParseBoolPipe:
 *    - It is used to parse the incoming parameter as a boolean.
 *
 * 4. ValidationPipe:
 *    - It integrates with class-validator and class-transformer libraries to perform validation on incoming data.
 *    - It automatically validates request payloads against defined DTO (Data Transfer Object) classes.
 *    - If validation fails, it throws a BadRequestException with detailed error messages.
 *
 * 5. DefaultValuePipe:
 *    - It sets a default value for the parameter if it is not provided in the request.
 *    - This pipe is useful for providing fallback values for optional parameters.
 *
 * 6. TransformPipe:
 *    - It transforms the incoming data to the specified type using the provided transformation function.
 *    - This pipe is useful for converting incoming data to a desired format.
 *
 * 7. ParseUUIDPipe:
 *    - It parses the incoming parameter as a UUID (Universally Unique Identifier).
 *
 * 8. ParseArrayPipe:
 *    - It parses the incoming parameter as an array.
 *    - It can optionally apply additional parsing to the array elements using a specified pipe.
 *
 * 9. ParseEnumPipe:
 *   - It parses the incoming parameter as an enum value.
 *  - It validates the incoming value against the specified enum type.
 */
