import { EyeTwoTone, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Table, Tag } from "antd";
import type {
  ColumnType,
  ColumnsType,
  TablePaginationConfig,
} from "antd/es/table";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { useEffect, useState, FC } from "react";
import { getRequest } from "../../services/apiHelperService";

const exactMatch = [
  "gender",
  "qualification",
  "martialStatus",
  "maritalStatus",
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
  active: string; //table
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
  where?: object;
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
  Object.assign(where, { and: andObject });
  if (where.and.length !== 0) return where;
  return undefined;
};

const professionOption: object[] = [
  { label: "Doctor", value: "Doctor" },
  { label: "Engineer", value: "Engineer" },
  { label: "Other", value: "Other" },
];

const qualificationOption: object[] = [
  { label: "10th", value: "10th" },
  { label: "12th", value: "12th" },
  { label: "Graduate", value: "Graduate" },
  { label: "PostGraduate", value: "PostGraduate" },
  { label: "PHD", value: "PHD" },
];

const maritalStatusOptions: object[] = [
  { label: "Married", value: "Married" },
  { label: "Unmarried", value: "Unmarried" },
  { label: "Divorced", value: "Divorced" },
  { label: "Widow", value: "Widow" },
  { label: "Widower", value: "Widower" },
];

const TableComponent: FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const fetchData = (params: Params = {}) => {
    let filterParams: any = {
      limit: params.pagination?.pageSize as number,
      order: `${params?.sortField || "dateCreated"} ${
        params?.sortOrder === "descend"
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

  useEffect(() => {
    fetchData({ pagination });
  }, []);

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

  const handleReset = (setSelectedKeys: any, confirm: any) => {
    setSelectedKeys("");
    return confirm();
  };

  const getColumnSearchProps = (dataIndex: string): ColumnType<DataType> => ({
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
  });

  const getColumnFilterProps = (
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
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "First Name",
      dataIndex: "firstName",
      sorter: true,
      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      sorter: true,
      ...getColumnSearchProps("lastName"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      ...getColumnFilterProps("gender", "Gender", [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Others", value: "Others" },
      ]),
    },
    {
      title: "Email",
      dataIndex: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Profession",
      dataIndex: "profession",
      ...getColumnFilterProps("profession", "Profession", professionOption),
    },
    {
      title: "Active",
      dataIndex: "active",
      render: (active: string) => (
        <Tag color={"yellow"}>{active.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Qualification",
      dataIndex: "qualification",
      ...getColumnFilterProps(
        "qualification",
        "Qualification",
        qualificationOption
      ),
    },
    {
      title: "maritalStatus",
      dataIndex: "maritalStatus",
      ...getColumnFilterProps(
        "maritalStatus",
        "MaritalStatus",
        maritalStatusOptions
      ),
    },
    {
      title: "address",
      dataIndex: "address",
      ...getColumnSearchProps("address"),
      ellipsis: true,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <EyeTwoTone className="fs-5" onClick={() => ""} />,
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      scroll={{ x: 1300 }}
      onChange={handleTableChange}
    />
  );
};

export default TableComponent;