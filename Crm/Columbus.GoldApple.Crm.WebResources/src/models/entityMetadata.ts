import { SimpleKeyValue } from "./simpleKeyValue";

export interface EntityMetadata extends SimpleKeyValue {
    attributes: Array<SimpleKeyValue>
}