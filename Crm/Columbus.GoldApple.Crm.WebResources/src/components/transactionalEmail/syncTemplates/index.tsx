import * as React from "react";
import { Button } from 'antd';
import { Typography } from 'antd';
import { WebApiUtils } from "../../../common/webApiUtils";
import { DialogUtils } from "../../../common/dialogUtils";

const { Text } = Typography;
interface IProps {
}

interface IState {
    isError: boolean;
    errorText: string;
    loadingText: string;
}

export default class TransactionalEmailSyncTemplates extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.state = {
            isError: false,
            loadingText: 'Синхронизируем шаблоны...',
            errorText: ''
        };
    }

    async componentDidMount() {
        debugger;
        await this.fetch();
    }

    fetch = async (params = {}) => {
        debugger;
        try {
            await WebApiUtils.RunAction("cmb_TransactionalEmailTemplatesSync");
            DialogUtils.CloseThisDialog();
        } catch (error) {
            this.setState({ isError: true, errorText: error })
            console.log(error);
        }
    };

    handleOkClick = () => {
        DialogUtils.CloseThisDialog();
    };

    WhenError = () => {
        return <div>
            <div>
                <Text type="danger" style={{ whiteSpace: 'nowrap' }}>Произошла ошибка. Попробуйте позже.</Text>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button type="danger" onClick={this.handleOkClick}>Ок</Button>
            </div>
        </div>;
    };

    WhenLoading = () => {
        return <div>
            <div>
                <img src='/_imgs/AdvFind/progress.gif'></img>
            </div>
            <div>
                <span>Синхронизируем шаблоны...</span>
            </div>
        </div>;
    };



    render() {
        var content = this.state.isError ? <this.WhenError /> : <this.WhenLoading />;
        return (
            <div className="content-sync-templates">
                {content}
            </div>);
    }
}
