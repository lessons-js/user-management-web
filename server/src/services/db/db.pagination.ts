import { DB } from "./db.service";

type PaginationOpions = {
    pageSize: number;
    pageIndex: number;
}

type PaginationResul = PaginationOpions & {
    data: any[];
    total: number;
}

export class DBPagination extends DB {
    public find(paganation: PaginationOpions) {
        const allItems = this.findAll();
        const res: Partial<PaginationResul> = {
            data: allItems,
        }

        if (paganation) {
            const { pageSize, pageIndex } = paganation;
            const start = pageSize * pageIndex;

            res.total = allItems.length;
            res.pageSize = pageSize;
            res.pageIndex = pageIndex;
            res.data = allItems.slice(start, start + pageSize);
        }

        return res;
    }
}
