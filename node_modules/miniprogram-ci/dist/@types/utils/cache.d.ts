import { IProject } from '../types';
export declare enum CACHE_KEY {
    PROJECT_CONFIG = "project.config",
    RAW_APP_JSON = "raw|app.json",
    APP_JSON = "app.json",
    EXT_JSON = "ext.json",
    PAGE_JSON = "page.json",
    COMPILED_APP_JSON = "compiled.app.json",
    COMPILED_PAGE_JSON = "compiled.page.json",
    GAME_JSON = "game.json",
    PLUGIN_JSON = "plugin.json",
    SITE_MAP_JSON = "sitemap.json",
    THEME_JSON = "theme.json",
    PLUGIN_THEME_JSON = "plugin|theme.json",
    APP_JSON_THEME_LOCATION = "app.json.themeLocation",
    APP_JSON_USING_COMPONENTS = "app.json.usingComponents"
}
export declare const cacheManager: {
    get: (project: IProject, key: string) => any;
    set: (project: IProject, key: string, value: any) => void;
    clean: () => void;
    remove: (key: string) => void;
};
