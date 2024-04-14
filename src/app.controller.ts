import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Request,
} from '@nestjs/common';
import { Request as ExpressRequest } from 'express';

@Controller('/')
class AppController {
    @Get('/greeter') // The @Get() decorator creates a new route handler.
    @HttpCode(200) // The @HttpCode() decorator sets the status code of the response. @HttpCode(HttpStatus.OK)
    @Header('Cache-Control', 'none') // The @Header() decorator sets the response header.
    getHello(@Request() req: ExpressRequest): string {
        console.log(req.query);
        return 'Hello World!';
    }

    @Get('/hello/:name')
    getHelloName(@Param() params: Record<string, any>): string {
        const { name } = params;
        return `Hello ${name}!`;
    }

    @Get('/hello')
    getHelloQuery(@Request() req: ExpressRequest): string {
        const { name } = req.query;
        return `Hello ${name}!`;
    }

    // Post request example
    @Post('/hello')
    postHello(@Body() body: Record<string, any>): string {
        const { name } = body;
        return `Hello ${name}!`;
    }
}

export default AppController;

/**
 * @Controller():
 * The @Controller() decorator marks a class as a controller within the NestJS framework.
 * Controllers handle incoming HTTP requests and define various routes to respond to those requests.
 */

/**
 * @Param():
 * The @Param() decorator is used to extract parameters from incoming HTTP requests.
 * It is commonly used to retrieve parameters from the request URL, such as route parameters or query parameters.
 */

/**
 * @Query():
 * The @Query() decorator is used to extract query parameters from incoming HTTP requests.
 * It is commonly used to retrieve query parameters from the request URL.
 */

/**
 * @Body():
 * The @Body() decorator is used to extract the body of an incoming HTTP request.
 * It is commonly used to retrieve data sent in the request body, such as form data or JSON payloads.
 */
