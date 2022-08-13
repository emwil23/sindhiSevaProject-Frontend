import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useEffect, useState, FC } from 'react';
import { getRequest } from '../../services/apiHelperService';


interface DataType {
    firstName: string,
    lastName: string,
    gender: string,
    email: string
}


interface Params {
    pagination?: TablePaginationConfig;
    sorter?: SorterResult<any> | SorterResult<any>[];
    total?: number;
    sortField?: string;
    sortOrder?: string;
    where?: object;
}



let totalCount: any = getRequest('/members/count').then(({ count }) => {
    totalCount = count as number;
})

// const whereBuilder = (whereObject: any | undefined) => {
//     let where:any = []
//     if(whereObject){
//     Object.entries(whereObject).map(([key, value]) => {
//        if(Array.isArray(value)){
//         let orObject:any = {};
//          value.map((value) => {
//             orObject = { or: [{}] }
//          })
//        }
//        else {
//             where.push({ [key]: value })
//        }
//     })
//     }
//     console.log(where);
// }

const TableComponent: FC = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<TablePaginationConfig>({ current: 1, pageSize: 10 });

    const fetchData = (params: Params = {}) => {

        let myParams: any = {
            "limit": params.pagination?.pageSize as number,
            "order": `${params?.sortField || 'dateCreated'} ${params?.sortOrder === 'descend' ? 'DESC' : params?.sortOrder === 'ascend' ? 'ASC' : 'DESC'}`,
            "skip": (params.pagination?.pageSize as number * (params.pagination?.current as number - 1)),
            // "where" : whereBuilder(params.where)
        }

        let filterParams: any = myParams;

        console.log(params);

        setLoading(true);
        getRequest('/members', { filter: filterParams }).then((data) => {
            setData(data);
            console.log(data);

            setLoading(false);
            setPagination({
                ...params.pagination,
                total: totalCount
            })
        });
    };

    useEffect(() => {
        fetchData({ pagination });
    }, []);

    const handleTableChange = (
        newPagination: TablePaginationConfig,
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<any>,
    ) => {
        console.log(sorter, filters);

        fetchData({
            sortField: sorter.field as string,
            sortOrder: sorter.order as string,
            pagination: newPagination,
            where: filters
        });
    };

    const columns: ColumnsType<DataType> = [
        // {
        //     title: 'Name',
        //     dataIndex: 'name',
        //     sorter: true,
        //     render: name => { console.log(name); return ''},
        //     width: '20%',
        // },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            sorter: true,
            width: '20%'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            sorter: true,
            width: '20%'
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            // filters: [
            //     { text: 'Male', value: 'male' },
            //     { text: 'Female', value: 'female' },
            //     { text: 'Others', value: 'Others' }
            // ],
            width: '20%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: '20%',
        },
    ];

    return (
        <Table
            columns={columns}
            rowKey={record => record.id}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
}

export default TableComponent;