import { DeleteOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Form, Image, Input, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { FC, useEffect, useState } from 'react'
import { deleteRequest, getRequest, postRequest } from '../../../services/apiHelperService';
import LoadingService from '../../../services/loadingService';
import { openNotification } from '../../../services/notificationService';
import FileUpload from '../../FileUpload';

const AdvertismentComponent: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [adsData, setAdsData] = useState<any[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = async (event: any) => {
        const payload = {
            imageUrl: imageUrl,
            description: event.description,
            expireDate: new Date(event.expireDate)
        }
      await postRequest('/ads', payload ).then(res => {
        fetchAds();
      });
    }

    const fetchAds = () => {
        setLoading(true);   
        getRequest('/ads').then(res => { 
            setAdsData(res);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchAds();        
    },[]);


    const deleteAd = async (id:string) => {
        await deleteRequest('/ads', id).then(res => {
            openNotification('Ad Deleted Successfully');
            fetchAds();
        });
    }

    console.log(adsData);
    

    return (
        <>
            <div className='d-flex justify-content-between mx-5 mt-2'>
                <p className='fs-4'>Advertisment Panel</p>
                <Button className='ms-5' type='primary' onClick={() => setIsModalOpen(true)} >List Advertisment</Button>
            </div>
            { loading ? <LoadingService /> :
            <div className='mx-2' >
                { adsData?.length ? <div className='row g-2 text-center'>
                    { adsData.map((ads:any, index:number) => {
                    const date = new Date(ads?.expireDate)
                    const displayDate = `${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`
                    return <div className='col-4'>
                         <Card className='overflow-hidden' key={index}>
                        <Image src={`${ads?.imageUrl}`} height={'100px'} />
                        <p className='mt-2'>{ads?.description}</p>
                        <p>{displayDate}</p>
                        <Button type='text' danger onClick={() => deleteAd(ads?.id)} icon={<DeleteOutlined/>}></Button>
                    </Card>
                    </div>
                } )}
                </div> : 'No Data' }
            </div>
            }
            <Modal title="Basic Modal" visible={isModalOpen} destroyOnClose={true} footer={null} onCancel={() => setIsModalOpen(!isModalOpen)}>
                <Form onFinish={onFinish} layout='vertical'>
                    <Form.Item
                        name={'imageUrl'}
                        label='Upload Image'
                    >
                        <FileUpload storageUrl={setImageUrl}/>
                    </Form.Item>
                    <Form.Item
                        name={'description'}
                        rules={[{ required: true, message: 'Description is required' }]}
                        label='Enter Description'
                    >
                        <TextArea rows={3} maxLength={100} placeholder='Max Characters 100' />
                    </Form.Item>
                    <Form.Item
                        name={'expireDate'}
                        rules={[{ min: Date.now(), type: 'date',  message: 'Date cannot be earlier than today.' }]}
                        label='Enter Expire Date'
                    >
                        <DatePicker placeholder="select date" className="w-100" format={'YYYY-MM-DD'} />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' onClick={() => setIsModalOpen(false)} >Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AdvertismentComponent;