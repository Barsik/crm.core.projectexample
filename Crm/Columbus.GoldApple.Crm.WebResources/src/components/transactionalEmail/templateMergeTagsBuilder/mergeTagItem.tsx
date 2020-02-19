import * as React from "react";
import { Select, Button, Input } from "antd";
import { MergeTag } from "../../../models/mergeTag";
import { EntityMetadata } from "../../../models/entityMetadata";
import { SimpleKeyValue } from "../../../models/simpleKeyValue";

import DynamicsWebApi from "dynamics-web-api"
import { CommonUtils } from "../../../common/commonUtils";


const { Option } = Select;

interface MergeTagItemProps {
    tag: MergeTag;
    metadata: Array<EntityMetadata>;
}

interface MergeTagItemState extends MergeTag {
    isDeleted: boolean;
}

export default class MergeTagItem extends React.Component<MergeTagItemProps, MergeTagItemState> {
    constructor(props: MergeTagItemProps) {
        super(props);

        this.onChangeEntityMetadata = this.onChangeEntityMetadata.bind(this);
        this.onChangeAttributeMetadata = this.onChangeAttributeMetadata.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSave = this.onSave.bind(this);

        this.state = {
            attributeSchemaName: props.tag.attributeSchemaName,
            crmId: props.tag.crmId,
            entitySchemaName: props.tag.entitySchemaName,
            index: props.tag.index,
            mergeTagName: props.tag.mergeTagName,
            templateId: props.tag.templateId,
            isDeleted: false
        };
    }

    onChangeEntityMetadata = (value: string) => {
        this.setState({ ...this.state, entitySchemaName: value, attributeSchemaName: undefined, mergeTagName: '' });
    }

    onChangeAttributeMetadata = (value: string) => {
        this.setState({ ...this.state, attributeSchemaName: value });
    }

    onChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, mergeTagName: event.target.value });
    }

    onDelete = async () => {
        if (this.state.crmId == null) {
            this.setState({ ...this.state, isDeleted: true })
        } else {
            var dynamicsWebApi = new DynamicsWebApi();
            try {
                await dynamicsWebApi.deleteRecord(this.state.crmId, "cmb_mergetags");
                this.setState({ ...this.state, isDeleted: true })
            } catch (error) {
                CommonUtils.ShowNotification('error', error, 'Ошибка');
                console.log(error);
            }
        }
    }

    onSave = async () => {

        var cmb_mergetag = {
            cmb_attributepath: this.state.attributeSchemaName,
            cmb_entityname: this.state.entitySchemaName,
            cmb_name: this.state.mergeTagName,
            "cmb_emailtemplateid@odata.bind": `/cmb_emailtemplates(${this.state.templateId})`
        };

        var dynamicsWebApi = new DynamicsWebApi();

        try {
            if (this.state.crmId == null) {
                var response = await dynamicsWebApi.create(cmb_mergetag, "cmb_mergetags");
                this.setState({ ...this.state, crmId: response });
            } else {
                var response = await dynamicsWebApi.update(this.state.crmId, "cmb_mergetags", cmb_mergetag);
            }
        } catch (error) {
            CommonUtils.ShowNotification('error', error, 'Ошибка');
            console.log(error);
        }
    }

    currentEntityMetadataAttributes = (): Array<SimpleKeyValue> => {

        var currentEntityMetadata = this.props.metadata.find(m => m.key == this.state.entitySchemaName);

        if (currentEntityMetadata != null) {
            return currentEntityMetadata.attributes;
        }
        return [];
    }

    render = () => {
        return (
            <tr hidden={this.state.isDeleted}>
                <td style={{ padding: '10px 5px 10px 5px' }}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Выберите сущность"
                        optionFilterProp="children"
                        onChange={this.onChangeEntityMetadata}
                        defaultValue={this.state.entitySchemaName}
                    >
                        {this.props.metadata.map((entityMetadata) => <Option value={entityMetadata.key}>{entityMetadata.value}</Option>)}
                    </Select>
                </td>
                <td>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Выберите поле"
                        optionFilterProp="children"
                        onChange={this.onChangeAttributeMetadata}
                        defaultValue={this.state.attributeSchemaName}
                    >
                        {this.currentEntityMetadataAttributes().map((attributeMetadata) => <Option value={attributeMetadata.key}>{attributeMetadata.value}</Option>)}
                    </Select>
                </td>
                <td>
                    <Input placeholder="Тег" onChange={this.onChangeTag} value={this.state.mergeTagName} />
                </td>
                <td>
                    <Button icon="save" onClick={this.onSave}></Button>
                </td>
                <td>
                    <Button type="danger" icon="delete" onClick={this.onDelete}></Button>
                </td>
            </tr>);
    }
}