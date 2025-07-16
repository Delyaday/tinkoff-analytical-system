"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const detect_port_1 = require("detect-port");
async function bootstrap() {
    const DEFAULT_PORT = 3000;
    const port = await (0, detect_port_1.default)(DEFAULT_PORT);
    if (port !== DEFAULT_PORT) {
        console.warn(`⚠️  Port ${DEFAULT_PORT} is busy, I'll use a free port ${port}`);
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    await app.listen(port);
    console.log(`🚀 Server is listening on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map