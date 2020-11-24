import { Actions  } from "gatsby";

import path from 'path';
import { ArchiveQuery} from "../../types/query/archive";
import { rootDir } from "../config";

const archiveTemplate = path.join(rootDir, 'src/template/archive.tsx');

export default function createArchive(res: ArchiveQuery, actions: Actions) {
    actions.createPage({
        path: '/archive',
        component: archiveTemplate,
        context: {
            data: res
        }
    });
};
