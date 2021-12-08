import { IProject } from '../types';
export declare function getLatestVersion(options: {
    project: IProject;
}): Promise<{
    latestVersion: string;
    grayReleaseVersion?: string;
}>;
