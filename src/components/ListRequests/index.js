import { useEffect } from 'react';
import { Table, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAddressesRequest } from '../../store/slices/addresses/actions';
import { selectRequest } from '../../store/slices/requests';
import Item from './Item';
import './style.css';

export default function ListRequests() {
    const requests = useSelector((state) => state.requests.data);
    const addresses = useSelector((state) => state.addresses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddressesRequest());
    }, [dispatch]);

    const data = Object.keys(requests).map((key) => {
        return {
            key,
            start: requests[key].start,
            end: requests[key].end,
        };
    });

    const rowSelection = {
        onChange: (_, selectedRows) => {
            dispatch(selectRequest(selectedRows[0].key));
        },
    };

    return (
        <div className="list-container">
            <Form className="">
                <Table
                    dataSource={data}
                    bordered
                    rowSelection={{
                        type: 'radio',
                        ...rowSelection,
                    }}
                >
                    <Table.Column
                        title="Погрузка"
                        key="start"
                        render={(_, request) => {
                            return (
                                <Item
                                    address={{ id: request.start, ...addresses[request.start] }}
                                    addresses={addresses}
                                    row={request.key}
                                    start
                                />
                            );
                        }}
                    />
                    <Table.Column
                        title="Разгрузка"
                        key="end"
                        render={(text, request) => (
                            <Item
                                address={{ id: request.end, ...addresses[request.end] }}
                                addresses={addresses}
                                row={request.key}
                                end={false}
                            />
                        )}
                    />
                </Table>
            </Form>
        </div>
    );
}
