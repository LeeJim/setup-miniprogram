export declare namespace SiteMapJSON {
    interface ISiteMapJSON {
        desc: string;
        rules: Rule[];
    }
    interface Rule {
        action: 'allow' | 'disallow';
        page: string;
        params?: string[];
        matching?: 'exact' | 'inclusive' | 'exclusive' | 'partial';
        priority?: number;
        _index?: number;
    }
}
