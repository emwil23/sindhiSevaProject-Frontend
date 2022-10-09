import { DeleteTwoTone, ExportOutlined, EyeTwoTone, SolutionOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Popconfirm, Space, Table, Tag } from "antd";
import type {
  ColumnsType,
  TablePaginationConfig,
} from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { useEffect, useState, FC } from "react";
import { useSelector } from 'react-redux';
import { deleteRequest, getRequest } from "../../services/apiHelperService";
import { exportCSVFile } from '../../services/excelService';
import ViewComponent from "../pages/DirectoriesPage/ViewComponent";
// import { professionOption, qualificationOption, statusOption } from '../selectOptions';
import { currentUserRole } from '../app/slices/userSlice';

const exactMatch = [
  "gender",
  "qualification",
  "martialStatus",
  "maritalStatus",
  "status"
];

interface DataType {
  firstName: string; //table
  lastName: string; //table
  gender: string; //table
  email: string; //table
  dob: Date;
  profession: string; //table
  mobile: number;
  blood: string;
  qualification: string; //table
  maritalStatus: string; //table
  status: string; //table
  members: any;
  adminVerified: string;
  anniversary: Date;
  address: string; //table
}

interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
  where?: object | DataType;
}

let totalCount: any = getRequest("/members/count").then(({ count }) => {
  totalCount = count as number;
});

const whereBuilder = (whereObject: any | undefined) => {
  let andObject: any = [];
  let where: any = {};
  if (whereObject) {
    Object.entries(whereObject).map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((value) => {
          if (exactMatch.includes(key)) return andObject.push({ [key]: value });
          else return andObject.push({ [key]: { like: value, options: "i" } });
        });
      } else {
        if (value) return andObject.push({ [key]: value });
        return "";
      }
    });
  }
  Object.assign(where, { or: andObject });
  if (where.or.length !== 0) return where;
  return undefined;
};

/* const maritalStatusOptions: object[] = [
  { label: "Married", value: "Married" },
  { label: "Unmarried", value: "Unmarried" },
  { label: "Divorced", value: "Divorced" },
  { label: "Widow", value: "Widow" },
  { label: "Widower", value: "Widower" },
]; */

const TableComponent: FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [globalSearch, setGlobalSearch] = useState<string>();
  const userRole = useSelector(currentUserRole);

  useEffect(() => {
    if(!globalSearch) 
      return fetchData({ pagination });
    
    const params: Params = {
      pagination: pagination,
      where: { firstName: { like: globalSearch, options: 'i' }, lastName: { like: globalSearch, options: 'i' }, gender: { like: globalSearch, options: 'i' }, email: { like: globalSearch, options: 'i' }, profession: { like: globalSearch, options: 'i' }, qualification: { like: globalSearch, options: 'i' }, maritalStatus: { like: globalSearch, options: 'i' }, status: { like: globalSearch, options: 'i' }, address: { like: globalSearch, options: 'i' }}
    }
    fetchData(params);
  }, [globalSearch]);


  let headers: any = [
    { label: 'First Name', value: 'firstName' },
    { label: 'Last Name', value: 'lastName' },
    { label: 'Date of Birth', value: 'dob' },
    { label: 'Gender', value: 'gender' },
    { label: 'Email', value: 'email' },
    { label: 'Profession', value: 'profession' },
    { label: 'Qualification', value: 'qualification' },
    { label: 'Marital Status', value: 'maritalStatus' },
    { label: 'Address', value: 'address' },
    { label: 'Blood Group', value: 'blood' },
    { label: 'Mobile No.', value: 'mobile' },
  ]

  const fetchData = (params: Params = {}) => {
    let filterParams: any = {
      limit: params.pagination?.pageSize as number,
      order: `${params?.sortField || "dateCreated"} ${params?.sortOrder === "descend"
        ? "DESC"
        : params?.sortOrder === "ascend"
          ? "ASC"
          : "DESC"
        }`,
      skip:
        (params.pagination?.pageSize as number) *
        ((params.pagination?.current as number) - 1),
      where: whereBuilder(params.where),
    };

    setLoading(true);
    getRequest("/members", { filter: filterParams }).then((data: any) => {
      setData(data);
      setLoading(false);
      setPagination({
        ...params.pagination,
        total: filterParams.where === undefined ? totalCount : data.length,
      });
    });
  };

  /* useEffect(() => {
    fetchData({ pagination });
  }, []); */

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any>
  ) => {
    fetchData({
      sortField: sorter.field as string,
      sortOrder: sorter.order as string,
      pagination: newPagination,
      where: filters,
    });
  };

/*   const handleReset = (setSelectedKeys: any, confirm: any) => {
    setSelectedKeys("");
    return confirm();
  }; */

  /* const getColumnSearchProps = (dataIndex: string): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search Name`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Button
          onClick={() => confirm()}
          size="small"
          style={{ width: 90 }}
          className="me-1"
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(setSelectedKeys, confirm)}
          size="small"
          style={{ width: 90 }}
          danger
        >
          Reset
        </Button>
      </div>
    ),
    onFilter: (value, record: any) => {
      return record[dataIndex]
        .toLocaleLowerCase()
        .includes((value as string).toLocaleLowerCase());
    },
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  }); */

  /* const getColumnFilterProps = (
    dataIndex: string,
    label: string,
    values: object[]
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <div className="mb-1">{`Select ${label}`}</div>
        <Select
          placeholder={`Select ${label}`}
          value={selectedKeys}
          onChange={(value: any) => {
            setSelectedKeys(value ? [value] : [""]);
            confirm();
          }}
          className="w-100"
        >
          {values.map((option: any, index) => {
            return (
              <Select.Option key={index} value={option.value}>
                {option.label}
              </Select.Option>
            );
          })}
        </Select>
        <Button
          onClick={() => clearFilters && handleReset(setSelectedKeys, confirm)}
          size="small"
          className="mt-1 w-100"
          danger
        >
          Reset
        </Button>
      </div>
    ),
    onFilter: (value, record: any) => {
      return record[dataIndex]
        .toLocaleLowerCase()
        .includes((value as string).toLocaleLowerCase());
    },
  }); */

  const deleteRecord = (record: any) => {
    deleteRequest('/members', record?.id).then(res => {
      window.location.reload();
    })
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: true,
      // ...getColumnSearchProps("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: true,
      // ...getColumnSearchProps("lastName"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      /* ...getColumnFilterProps("gender", "Gender", [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Others", value: "Others" },
      ]), */
    },
    {
      title: "Email",
      dataIndex: "email",
      // ...getColumnSearchProps("email"),
    },
    {
      title: "Profession",
      dataIndex: "profession",
      // ...getColumnFilterProps("profession", "Profession", professionOption),
    },
    {
      title: "Status",
      dataIndex: "status",
      // ...getColumnFilterProps("status", "Status", statusOption),
      render: (status: string) => status.match('InActive') ? <Tag color='red'>{status.toUpperCase()}</Tag> : <Tag color='green'>{status.toUpperCase()}</Tag>
    },
    {
      title: "Qualification",
      dataIndex: "qualification",
      /* ...getColumnFilterProps(
        "qualification",
        "Qualification",
        qualificationOption
      ), */
    },
    {
      title: "maritalStatus",
      dataIndex: "maritalStatus",
      /* ...getColumnFilterProps(
        "maritalStatus",
        "MaritalStatus",
        maritalStatusOptions
      ), */
    },
    {
      title: "address",
      dataIndex: "address",
      // ...getColumnSearchProps("address"),
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => <Space size='middle'>
        <EyeTwoTone className="fs-5" onClick={() => confirm(record.firstName, record, userRole)} />
        {/* <DeleteTwoTone hidden={userRole !== 'admin'} className='fs-5' onClick={() => { deleteRecord(record) } } /> */}
        {userRole === 'admin' ? <Popconfirm
          title="Are you sure to delete?"
          onConfirm={() => deleteRecord(record)}
          placement='topRight'
          okText="Yes"
          cancelText="No"
        >
          <DeleteTwoTone className='fs-5' />
        </Popconfirm> : null}
      </Space>
    },
  ];

  const confirm = (title?: string, records?: any, userRole?: string) => {
    Modal.info({
      title: `${title} Information`,
      icon: <SolutionOutlined style={{ color: 'blue-4' }} />,
      content: <ViewComponent items={records} userRole={userRole as string} />,
      okText: 'CLOSE',
      width: 1000
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (onSelectChange: any, selectedRow: any) => {
      setSelectedRowKeys(onSelectChange);
      setSelectedRows(selectedRow);
    },
  };

  const hasSelected = selectedRowKeys.length < 11;

  return (
    <>
      <div className='mx-5 d-flex mb-2'>
        <Input.Search placeholder='Search fields here...'
          allowClear
          onSearch={(value) => {
            setGlobalSearch(value);
          }}
          className='mt-2'
        >
        </Input.Search>
        <div className='text-end my-2 mx-1'>
          <Button disabled={!hasSelected || selectedRowKeys.length === 0} onClick={() => { if (hasSelected) exportCSVFile(headers, selectedRows, 'Records') }}><ExportOutlined />Export</Button>
        </div>
      </div>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        scroll={{ x: 2000 }}
        onChange={handleTableChange}
      />
    </>
  );
};

export default TableComponent;