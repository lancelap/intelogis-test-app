import { Form, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { changeRequestAddress } from '../../../store/slices/requests';

export default function Item({ addresses, address, row, start }) {
    const dispatch = useDispatch();

    if (!addresses || Object.keys(addresses).length === 0) return null;

    const data = Object.keys(addresses).map((id) => {
        if (id) {
            return {
                id,
                text: addresses[id].text,
                latLng: addresses[id].latLng,
                row,
                start,
            };
        }

        return null;
    });

    const handleChange = (value) => {
        dispatch(changeRequestAddress({ address: value, position: start ? 'start' : 'end', row }));
    };

    return (
        <Form.Item name={[address.id, start, row]} initialValue={address.id}>
            <Select bordered={false} onChange={handleChange}>
                {data.map(({ id, text }) => (
                    <Select.Option key={id} value={id}>
                        {text}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );
}
