import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();

/**
 * AppModule
 * The AppModule is the root module of the application. It is the entry point of the application. The AppModule is decorated with
 * the @Module() decorator, which provides metadata that Nest uses to organize the application structure.
 */

/**
 * NestFactory
 * The NestFactory class is the entry point of the Nest application. It is used to create a new instance of the Nest application.
 */

/**
 * Module can be classified into four types:
 * 1. Root Module
 * 2. Feature Module
 * 3. Shared Module
 * 4. Global Module
 *
 * Root Module: The root module is the main module of the application. It is the entry point of the application.
 *
 * Feature Module: The feature module is a module that contains a group of related components, directives, and pipes.
 *
 * Shared Module: The shared module is a module that contains a group of components, directives, and pipes that are used by other
 * modules.
 *
 * Global Module: The global module is a module that is available throughout the application.
 *
 */
