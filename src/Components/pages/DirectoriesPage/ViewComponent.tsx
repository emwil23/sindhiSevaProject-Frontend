import Descriptions from 'antd/lib/descriptions';
import Spin from 'antd/lib/spin';
import { FC, useEffect, useState } from 'react';
import { getRequest } from '../../../services/apiHelperService';

interface Props {
    items: any
}

const ViewComponent: FC<Props> = (props: Props) => {

    const [relationData, setRelationData]: any[] = useState([]);
    const [loading, setLoading] = useState(true);
    const items: any = props.items;


    const findRelation = (members: any[]) => {
        if (!members || members.length === 0) { 
            setLoading(false);
            return;
        };
        members.forEach((value: any) => {
            fetchRelation(value.relationId, value.relationName).then(() => {
                if(items?.members.length === relationData.length){
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
    }, []);



    return loading ? (<Spin size='large' />) :
        <>
            <Descriptions layout="vertical">
                <Descriptions.Item label="First Name" contentStyle={{ color: 'grey' }}>{items.firstName}</Descriptions.Item>
                <Descriptions.Item label="Last Name" contentStyle={{ color: 'grey' }}>{items.lastName}</Descriptions.Item>
                <Descriptions.Item label="Qualification" contentStyle={{ color: 'grey' }}>{items.qualification}</Descriptions.Item>
                <Descriptions.Item label="Profession" contentStyle={{ color: 'grey' }}>{items.profession}</Descriptions.Item>
                <Descriptions.Item label='mobile' contentStyle={{ color: 'grey' }}>{items.mobile}</Descriptions.Item>
                <Descriptions.Item label='Marital Status' contentStyle={{ color: 'grey' }}>{items.maritalStatus}</Descriptions.Item>
                <Descriptions.Item label='Gender' contentStyle={{ color: 'grey' }}>{items.gender}</Descriptions.Item>
                <Descriptions.Item label="Email" contentStyle={{ color: 'grey' }}>{items.email}</Descriptions.Item>
                <Descriptions.Item label="Date Of Birth" contentStyle={{ color: 'grey' }}>{new Date(items.dob).toDateString()}</Descriptions.Item>
                <Descriptions.Item label="Blood" contentStyle={{ color: 'grey' }}>{items.blood}</Descriptions.Item>
                <Descriptions.Item label="active" contentStyle={{ color: 'grey' }}>{items.active}</Descriptions.Item>
                <Descriptions.Item label="Address" contentStyle={{ color: 'grey' }} span={2}>
                    {items.address}
                </Descriptions.Item>
            </Descriptions>
            { items?.members ? <Descriptions title="Family">
                {relationData.map((value: any, index: any) => {
                    return  <>
                                <Descriptions.Item label='Name' key={index}>{`${value.data.firstName} ${value.data.lastName}`}</Descriptions.Item>
                                <Descriptions.Item label='Relation' key={value.data.uid}>{`${value.relationName}`}</Descriptions.Item>
                                { items?.anniversary && ['Wife','Husband'].includes(value.relationName) ? <Descriptions.Item label='Anniversary' key={value.data.id}>{new Date(items.anniversary).toDateString()}</Descriptions.Item> : <></>}
                            </>
                })}
            </Descriptions> : null }
            
        </>
}

export default ViewComponent;