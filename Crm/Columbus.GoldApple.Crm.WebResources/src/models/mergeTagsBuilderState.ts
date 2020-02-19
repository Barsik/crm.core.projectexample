import { EntityMetadata } from "./entityMetadata";
import { MergeTag } from "./mergeTag";

export interface MergeTagsBuilderState {
    metadata: Array<EntityMetadata>;
    tags: Array<MergeTag>;
    templateId: string;
}

