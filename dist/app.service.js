"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = exports.AppService = class AppService {
    api(slackName, track) {
        const currentDay = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
        });
        const now = new Date();
        const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000).toISOString();
        const githubFileUrl = 'https://github.com/JC-Coder/api_hg_1/blob/main/dist/main.js';
        const githubRepoUrl = 'https://github.com/JC-Coder/api_hg_1';
        return {
            slack_name: slackName !== null && slackName !== void 0 ? slackName : 'Joseph Chimezie',
            current_day: currentDay,
            utc_time: utcTime,
            track: track !== null && track !== void 0 ? track : 'Backend',
            github_file_url: githubFileUrl,
            github_repo_url: githubRepoUrl,
            status_code: 200,
        };
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map