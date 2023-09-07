import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  api(slackName: string, track: string): object {
    const currentDay = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
    });

    // Get the current UTC time
    const now = new Date();
    const utcTime = new Date(
        now.getTime() + now.getTimezoneOffset() * 60000 // Adjust for the local timezone offset
    ).toISOString();

    // TODO: update link
    const githubFileUrl =
        'https://github.com/JC-Coder/api_hg_1';
    const githubRepoUrl = 'https://github.com/JC-Coder/api_hg_1';

    return {
      slack_name: slackName ?? 'Joseph Chimezie',
      current_day: currentDay,
      utc_time: utcTime,
      track: track ?? 'Backend',
      github_file_url: githubFileUrl,
      github_repo_url: githubRepoUrl,
      status_code: 200,
    }
  }
}
