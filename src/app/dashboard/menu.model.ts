export interface MenuItem {
    icon: string;
    title: string;
    path: string;
    badge?: number;
    children?: MenuItem[];
}