import * as React from "react";
import webapi from 'xrm-webapi-client'
import { Layout, Menu, Icon, Table } from 'antd';
const { Content, Footer, Sider } = Layout;

interface IProps {
  title: string;
}

const columns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    sorter: true,
    width: '20%'
  },
  {
    title: 'Адрес',
    dataIndex: 'address1_composite',
  },
];

export default class FooBar extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  async componentDidMount() {
    await this.fetch();
  }

  fetch = async (params = {}) => {
    this.setState({ loading: true });
    const response: any = await webapi.Retrieve({
      async: true,
      entityName: 'account'
    }) as any;
    console.log(response);
    this.setState({
      loading: false,
      data: response.value
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Организации</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="upload" />
              <span className="nav-text">Загрузки</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span className="nav-text">Контакты</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '5px' }}>
            <Table
              pagination={{ pageSize: 3 }}
              columns={columns}
              rowKey={(record: any) => record.accountid}
              dataSource={this.state.data}
              loading={this.state.loading}
            />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Columbus</Footer>
        </Layout>
      </Layout>);
  }
}
