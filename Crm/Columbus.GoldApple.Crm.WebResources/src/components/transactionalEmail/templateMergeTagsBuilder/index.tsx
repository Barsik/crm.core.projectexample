import * as React from "react";
import { Layout, Button } from "antd";
import { MergeTagsBuilderState } from "../../../models/mergeTagsBuilderState";
import { EntityMetadata } from "../../../models/entityMetadata";
import { SimpleKeyValue } from "../../../models/simpleKeyValue";
import MergeTagItem from "./mergeTagItem";
import { MergeTag } from "../../../models/mergeTag";
import { WebResourceUtils } from "../../../common/webResourceUtils";
import { CommonUtils } from "../../../common/commonUtils";
import DynamicsWebApi from "dynamics-web-api"

const { Content } = Layout;

interface IProps {
}

export default class TemplateMergeTagsBuilder extends React.Component<IProps, MergeTagsBuilderState> {
    constructor(props: IProps) {
        super(props);

        this.handleAddTagClick = this.handleAddTagClick.bind(this);

        this.state = {
            metadata: [],
            tags: [],
            templateId: CommonUtils.GetGuid(WebResourceUtils.GetParameter("data") ?? '')
        };
    }

    componentDidMount = async () => {
        await this.GetMetadata();
        await this.GetTags();
    }

    GetTags = async () => {
        try {
            var dynamicsWebApi = new DynamicsWebApi();
            var response = await dynamicsWebApi.retrieveMultiple("cmb_mergetags", undefined, `_cmb_emailtemplateid_value eq ${this.state.templateId}`);

            if (response != null) {
                var tags = response.value.map((t: any) => {
                    var tag: MergeTag = {
                        entitySchemaName: t.cmb_entityname,
                        attributeSchemaName: t.cmb_attributepath,
                        mergeTagName: t.cmb_name,
                        crmId: t.cmb_mergetagid,
                        index: -1,
                        templateId: this.state.templateId
                    };
                    return tag;
                });

                this.setState({ ...this.state, tags: tags });
            }

        } catch (error) {
            CommonUtils.ShowNotification('error', error, 'Ошибка');
            console.log(error);
        }
    }

    GetMetadata = async () => {
        try {
            var response = await fetch(`${Xrm.Page.context.getClientUrl()}/api/data/v8.0/EntityDefinitions?$select=DisplayName,SchemaName&$filter=LogicalName eq 'contact' or LogicalName eq 'cmb_config'&$expand=Attributes($select=LogicalName,DisplayName)`);
            const body = await response.json();

            var metadata: Array<EntityMetadata> = body.value.map(function (entity: any): EntityMetadata {
                return {
                    key: entity.SchemaName,
                    value: (entity.DisplayName != null && entity.DisplayName.UserLocalizedLabel != null) ? entity.DisplayName.UserLocalizedLabel.Label : null,
                    attributes: entity.Attributes.map(function (attribute: any): SimpleKeyValue {
                        const attributeKey = attribute.LogicalName;
                        const attributeValue = (attribute.DisplayName != null && attribute.DisplayName.UserLocalizedLabel != null) ? attribute.DisplayName.UserLocalizedLabel.Label : null;

                        return {
                            key: attributeKey,
                            value: attributeValue ?? attributeKey
                        };
                    })
                };
            });

            this.setState({ ...this.state, metadata: metadata });
        } catch (error) {
            CommonUtils.ShowNotification('error', error, 'Ошибка');
            console.log(error);
        }
    }

    handleAddTagClick = () => {

        var defaultEntityMetadata = (this.state.metadata.length > 0) ? this.state.metadata[0] : null;

        var tag: MergeTag = {
            entitySchemaName: defaultEntityMetadata != null ? defaultEntityMetadata.key : undefined,
            attributeSchemaName: undefined,
            mergeTagName: '',
            crmId: undefined,
            index: -1,
            templateId: this.state.templateId
        };

        var tags: Array<MergeTag> = this.state.tags;
        tags.push(tag);
        this.setState({ ...this.state, tags: tags });
    }

    renderTags = () => {
        return (
            <table>
                {this.state.tags.length > 0 ?
                    <thead>
                        <tr>
                            <td>Сущность</td>
                            <td>Атрибут</td>
                            <td>Тег</td>
                        </tr>
                    </thead>
                    :
                    <thead></thead>
                }
                <tbody>
                    {this.state.tags.map((tag, index) => {
                        tag.index = index;
                        return (
                            <MergeTagItem tag={tag} metadata={this.state.metadata} />
                        );
                    })
                    }
                </tbody>
            </table>
        );
    }

    render = () => {
        return (
            <div>
                <Layout>
                    <Content>
                        <div>
                            <h2>Конструктор тегов слияния</h2>
                        </div>
                        <div>
                            {this.renderTags()}
                        </div>
                        <div>
                            <Button onClick={this.handleAddTagClick} type="link" size={'small'}>
                                Добавить</Button>
                        </div>
                        <hr />
                        <div>
                            <Button>Закрыть</Button>
                        </div>
                    </Content>
                </Layout>
            </div>);
    }
}
