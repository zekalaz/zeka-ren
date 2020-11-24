import {BaseContext, BaseMarkdownRemark} from "./base";

export interface ArchiveItem {
    date: string,
    title: string
}

interface EdgeItem {
    node: {
        frontmatter: ArchiveItem;
    }
}

export interface ArchiveQuery extends BaseMarkdownRemark {
    allMarkdownRemark: {
        edges: EdgeItem[];
    }
}

export interface ArchiveContext extends BaseContext {
    pageContext: {
        data: ArchiveQuery
    }
}

interface ParseDateRes {
    year: number,
    month: number,
    day: number
}

interface ISortedItemBase {
    order: number[],
    [ yearNum: number ]: any
}

interface ISortedItemYear extends ISortedItemBase {
    order: number[],
    [ yearNum: number ]: ISortedItemMonth
}

interface ISortedItemMonth extends ISortedItemBase {
    order: number[],
    [ monthNum: number ]: ISortedItemDay
}

interface ISortedItemDay extends ISortedItemBase {
    order: number[],
    [ dayNum: number ]: ArchiveItem[]
}

export interface ISortedItems extends ISortedItemYear{}

export interface ISortDate {
    unsortedDate: EdgeItem[];
    sortedDate: ISortedItems;

    process(): ISortedItems;
}
