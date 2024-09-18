import {IconDefinition} from "@fortawesome/angular-fontawesome";

export interface Link {
    left: LinkItem[];
    right: LinkItem[];
}

export interface LinkItem {
    title?: string;
    icon?: IconDefinition;
    url?: string;
    action?: () => void;
    badge?: number;
}
