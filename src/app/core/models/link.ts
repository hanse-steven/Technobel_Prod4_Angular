import {IconDefinition} from "@fortawesome/angular-fontawesome";

export interface Link {
    title?: string;
    icon?: IconDefinition;
    url?: string;
    action?: () => void;
}
