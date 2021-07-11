import { Form, Input, Modal, Select, Space } from 'antd';
import axios from 'axios';
import { Locations, SupportChannel } from '../../types';

type CreateModalProps = {
  visible: boolean;
  handleClose: () => void;
};

export const CreateModal = ({ visible, handleClose }: CreateModalProps) => {
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const res = await (
        await axios.post('/api/create-ticket', {
          type: form.getFieldValue('type'),
          startTimestamp: new Date(),
          location: form.getFieldValue('location'),
          telephone: form.getFieldValue('telephone')
        })
      ).data;
      console.log(res);
    } catch (error) {
      console.error('A problem occurred while trying to save a ticket', error);
    }
    handleClose();
  };

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        handleClose();
        form.resetFields();
      }}
      title="Novo Chamado"
      destroyOnClose
      maskClosable={false}
      onOk={handleOk}
    >
      <Form layout="vertical" name="create" form={form}>
        <Space direction="vertical">
          <Form.Item
            name="type"
            label="Tipo do chamado"
            initialValue={SupportChannel.HARDWARE}
          >
            <Select
              options={[
                { value: SupportChannel.HARDWARE, label: 'Hardware' },
                { value: SupportChannel.NETWORK, label: 'Rede' },
                {
                  value: SupportChannel.SOFTWARE,
                  label: 'Aplicação / Banco de dados'
                }
              ]}
            />
          </Form.Item>
          <Form.Item name="location" label="Local" initialValue={0}>
            <Select
              placeholder="Selecione"
              options={Locations.map((location, i) => ({
                value: i,
                label: location.cityName
              }))}
            />
          </Form.Item>
          <Form.Item name="telephone" label="Telefone para contato">
            <Input />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
};
