import { Select, Image, Input, Button } from 'antd';
import Descriptions from 'antd/lib/descriptions';
import TextArea from 'antd/lib/input/TextArea';
import Spin from 'antd/lib/spin';
import { FC, useEffect, useState } from 'react';
import { getRequest, patchRequest } from '../../../services/apiHelperService';
import { openNotification } from '../../../services/notificationService';
import { martialStatusOptions, professionOption, qualificationOption, statusOption, yesNoOption } from '../../selectOptions';

interface Props {
    items: any,
    userRole: string,
    refreshTable?: any
}

const ViewComponent: FC<Props> = (props: Props) => {

    const [relationData, setRelationData]: any[] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState<string>();
    const items: any = props.items;
    const isAdmin: boolean = props.userRole === 'admin';


    const findRelation = (members: any[]) => {
        if (!members || members.length === 0) {
            setLoading(false);
            return;
        };
        members.forEach((value: any) => {
            fetchRelation(value.relationId, value.relationName).then(() => {
                if (items?.members.length === relationData.length) {
                    setLoading(false);
                }
            })
        })
    }

    const fetchRelation = async (uid: string, relationName: string) => {
        let relationArray: any[] = relationData;
        await getRequest('/members', {
            filter: {
                where: {
                    "uid": uid
                }
            }
        }).then((data: any) => {
            relationArray.push({ data: data[0], relationName: relationName })
            setRelationData(relationArray);
        });
    }

    useEffect(() => {
        findRelation(items?.members);
        // eslint-disable-next-line
    }, []);

    const updateData = async (index: string, value: string) => {
        await patchRequest('/members', items?.id, { [index]: value }).then((res) => {
            setText('');
            openNotification('Records Successfully Updated');
            props.refreshTable(true);
        }).catch(err => openNotification('Some Problem Occured', 'Please try again later.'))
    }

    const giveDownloadAccess = async (index: string, value: any) => {
        await patchRequest('/members', items.id, { [index]: value }).then((res) => {
            if(!res.downloadsAllowed.allowed)
                openNotification('Download Access Taken Back');
            else
                openNotification(`Download Access Given to ${items.firstName}`);
            props.refreshTable(true);
        }).catch(err => openNotification('Some Problem Occured', 'Please try again later.'));
    }



    return loading ? (<Spin size='large' />) :
        <>
            <Descriptions layout="vertical">
                { items.profilePicture ? <Descriptions.Item label="Profile Picture" contentStyle={{ color: 'grey' }}>
                <Image
                    width={100}
                    src={`${items.profilePicture}`}
                    className='rounded'
                />
                </Descriptions.Item> : null}
                { isAdmin ? <Descriptions.Item label='First Name' contentStyle={{ color: 'gray' }}>
                    <Input defaultValue={items.firstName} type='text' onChange={(e) => setText(e.target.value)} className='w-50' />
                    <Button onClick={() => updateData('firstName', text as string )}>Save</Button>
                </Descriptions.Item> : 
                <Descriptions.Item label="First Name" contentStyle={{ color: 'grey' }}>{items.firstName}</Descriptions.Item> }
                { isAdmin ? <Descriptions.Item label='Last Name' contentStyle={{ color: 'gray' }}>
                    <Input defaultValue={items.lastName} type='text' onChange={(e) => setText(e.target.value)} className='w-50' />
                    <Button onClick={() => updateData('lastName', text as string )}>Save</Button>
                </Descriptions.Item> : 
                <Descriptions.Item label="Last Name" contentStyle={{ color: 'grey' }}>{items.lastName}</Descriptions.Item> }
                { isAdmin ? <Descriptions.Item label="Qualification" contentStyle={{ color: 'grey' }}>{
                    <Select defaultValue={items.qualification} onChange={(e) => updateData('qualification', e)}>
                        {qualificationOption.map((option: any, index) => {
                            return (
                                <Select.Option key={index} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            );
                        })}
                    </Select>
                }</Descriptions.Item> :
                <Descriptions.Item label="Qualification" contentStyle={{ color: 'grey' }}>{items.qualification}</Descriptions.Item> }
                { isAdmin ? <Descriptions.Item label="Profession" contentStyle={{ color: 'grey' }}>{
                    <Select defaultValue={items.profession} onChange={(e) => updateData('profession', e)}>
                        {professionOption.map((option: any, index) => {
                            return (
                                <Select.Option key={index} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            );
                        })}
                    </Select>
                }</Descriptions.Item> :
                <Descriptions.Item label="Profession" contentStyle={{ color: 'grey' }}>{items.profession}</Descriptions.Item> }
                { isAdmin ? <Descriptions.Item label='Mobile' contentStyle={{ color: 'gray' }}>
                    <Input defaultValue={items.mobile} type='text' onChange={(e) => setText(e.target.value)} className='w-50' />
                    <Button onClick={() => updateData('mobile', text as string )}>Save</Button>
                </Descriptions.Item> : 
                <Descriptions.Item label='mobile' contentStyle={{ color: 'grey' }}>{items.mobile}</Descriptions.Item> }
                { isAdmin ?  <Descriptions.Item label="Marital Status" contentStyle={{ color: 'grey' }}>{
                    <Select defaultValue={items.maritalStatus} onChange={(e) => updateData('maritalStatus', e)}>
                        {martialStatusOptions.map((option: any, index) => {
                            return (
                                <Select.Option key={index} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            );
                        })}
                    </Select>
                }</Descriptions.Item> :
                <Descriptions.Item label='Marital Status' contentStyle={{ color: 'grey' }}>{items.maritalStatus}</Descriptions.Item> }
                <Descriptions.Item label='Gender' contentStyle={{ color: 'grey' }}>{items.gender}</Descriptions.Item>
                { isAdmin ? <Descriptions.Item label='Email' contentStyle={{ color: 'gray' }}>
                    <Input defaultValue={items.email} type={'email'} onChange={(e) => setText(e.target.value)} className='w-50' />
                    <Button onClick={() => updateData('email', text as string )}>Save</Button>
                </Descriptions.Item> :
                <Descriptions.Item label="Email" contentStyle={{ color: 'grey' }}>{items.email}</Descriptions.Item> }
                <Descriptions.Item label="Date Of Birth" contentStyle={{ color: 'grey' }}>{new Date(items.dob).toDateString()}</Descriptions.Item>
                <Descriptions.Item label="Blood" contentStyle={{ color: 'grey' }}>{items.blood}</Descriptions.Item>
                {isAdmin ? <Descriptions.Item label="Status" contentStyle={{ color: 'grey' }}>{
                    <Select defaultValue={items.status} onChange={(e) => updateData('status', e)}>
                        {statusOption.map((option: any, index) => {
                            return (
                                <Select.Option key={index} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            );
                        })}
                    </Select>
                }</Descriptions.Item> : <Descriptions.Item label="Status" contentStyle={{ color: 'grey' }}>{items.status}</Descriptions.Item>}
                { isAdmin ? <Descriptions.Item label='Address' contentStyle={{ color: 'gray' }}>
                    <TextArea defaultValue={items.address} rows={4} onChange={(e) => setText(e.target.value)} className='w-75' />
                    <Button className='ms-2' onClick={() => updateData('address', text as string )}>Save</Button>
                </Descriptions.Item> : 
                <Descriptions.Item label="Address" contentStyle={{ color: 'grey' }} span={2}>
                    {items.address}
                </Descriptions.Item> }
                { isAdmin ? <Descriptions.Item label='AllowDownload' contentStyle={{ color: 'gray' }}>
                    <Select defaultValue={items?.downloadsAllowed?.allowed} onChange={e => giveDownloadAccess('downloadsAllowed', { allowed: e, time: Date.now() })}>
                    {yesNoOption.map((option: any, index) => {
                            return (
                                <Select.Option key={index} value={option.value}>
                                    {option.label}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Descriptions.Item> : null}
            </Descriptions>
            {items?.members ? <Descriptions title="Family">
                {relationData.map((value: any, index: any) => {
                    return value?.data ? <>
                        <Descriptions.Item label='Name' key={index}>{`${value.data.firstName} ${value.data.lastName}`}</Descriptions.Item>
                        <Descriptions.Item label='Relation' key={value.data.uid}>{`${value.relationName}`}</Descriptions.Item>
                        {items?.anniversary && ['Wife', 'Husband'].includes(value.relationName) ? <Descriptions.Item label='Anniversary' key={value.data.id}>{new Date(items.anniversary).toDateString()}</Descriptions.Item> : <></>}
                    </> : null;
                })}
            </Descriptions> : null}
        </>
}

export default ViewComponent;