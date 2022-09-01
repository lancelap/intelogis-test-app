import { Table, Form } from 'antd';
import './style.css';

export default function ListRequests() {
    return (
        <div className="list-container">
            <Form className="">
                <Table
                    bordered
                    rowSelection={{
                        type: 'radio',
                    }}
                />
            </Form>
        </div>
    );
}
