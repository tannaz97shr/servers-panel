import {SortingOrdetType} from "../../models/servers";

export interface SortingBoxComponentProps {
    sortByUptime(orderBy:SortingOrdetType): void;
}