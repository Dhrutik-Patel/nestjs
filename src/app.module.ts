import { Module } from '@nestjs/common';
import AppController from './app.controller';
import { ProductModule } from './products/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ProductModule,
        ConfigModule.forRoot(), // Load environment variables
        // MongooseModule.forRoot(
        //     'mongodb+srv://dhrutikpatel:dhrutikpatel@nestjs.c1h2r94.mongodb.net/',
        // ), // Connect to MongoDB
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                uri: `mongodb+srv://${configService.get('MONGODB_USER')}:${configService.get('MONGODB_PASSWORD')}@nestjs.c1h2r94.mongodb.net/${configService.get('MONGODB_DBNAME')}`,
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [],
    exports: [],
})
export class AppModule {}

/**
 * Imports:
 * The `imports` array specifies other modules to be imported into the current module.
 * Modules listed in the `imports` array become accessible within the current module.
 */

/**
 * Controllers:
 * The `controllers` array defines controllers associated with the module.
 * Controllers listed in the `controllers` array are accessible within the current module.
 */

/**
 * Providers:
 * The `providers` array specifies services or dependencies associated with the module.
 * Services listed in the `providers` array are available for injection throughout the module.
 */

/**
 * Exports:
 * The `exports` array exposes selected providers from the current module.
 * Providers listed in the `exports` array can be utilized by other modules that import this module.
 */

/**
 * NestJS Request Response Lifecycle:
 * Middleware -> Guards -> Interceptors -> Pipes -> Route Handlers
 *
 * Middleware: Middleware functions are functions that have access to the request object (req), the response object (res),
 * and the next middleware function in the application’s request-response cycle. The next middleware function is commonly
 * denoted by a variable named next.
 *
 * Guards: Guards are a type of middleware that is used to protect routes. Guards can be used to protect routes from
 * unauthorized access, validate input data, etc.
 *
 * Interceptors: Interceptors are used to intercept incoming and outgoing HTTP requests. Interceptors can be used to
 * modify the request object, the response object, or the data returned by the route handler.
 *
 * Pipes: Pipes are used to transform input data to a desired output. Pipes can be used to validate input data, transform
 * input data, etc.
 *
 * Route Handlers: Route handlers are functions that handle incoming HTTP requests. Route handlers are responsible for
 * processing the request and returning the response.
 */
