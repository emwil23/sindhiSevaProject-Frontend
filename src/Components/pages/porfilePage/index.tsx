import { Button, DatePicker, Form, Input, Select, Tooltip } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { patchRequest } from "../../../services/apiHelperService";
import { currentUser } from "../../app/slices/userSlice";
import { activeOptions, professionOption, qualificationOption, relationsOptions } from "../../selectOptions";
import { useDispatch } from "react-redux";
import { pushUserDetails } from "../../app/slices/userSlice";
import { openNotification } from "../../../services/notificationService";
import Search from "antd/lib/input/Search";
import { CopyOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const ProfileComponent = () => {
  const userDetails = useSelector(currentUser);
  const dispatch = useDispatch();

  const updateData = async (index: string, value: string) => {
    await patchRequest('/members', userDetails?.id, { [index]: value }).then((res) => {
      dispatch(pushUserDetails(res));
      openNotification('Records Successfully Updated')
    }).catch(err => openNotification('Some Problem Occured', 'Please try again later.'))
  }

  const onFinishMembers = (value:any) => {
    updateData('members',value.members);
  }

  console.log(userDetails);
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h3>User Information</h3>
        <div className="row mb-2">
          <div className="col-md-6">
            <span>First Name</span>
            <Input value={userDetails?.firstName} disabled />
          </div>
          <div className="col-md-6">
            <span>Last Name</span>
            <Input value={userDetails?.lastName} disabled />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <span>Email</span>
            <Input value={userDetails?.email} disabled />
          </div>
          <div className="col-md-6">
            <span>Date of Birth</span><br />
            <DatePicker defaultValue={moment(userDetails?.dob)} format={'DD/MM/YYYY'} className='w-100' disabled />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <span>Blood Group</span>
            <Input value={userDetails?.blood} disabled />
          </div>
          <div className="col-md-6">
            <span>Member Since</span>
            <DatePicker defaultValue={moment(userDetails?.dateCreated)} format={'DD/MM/YYYY'} className='w-100' disabled />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <span>Admin Verified</span>
            <Input value={userDetails?.adminVerified} disabled />
          </div>
          <div className="col-md-6">
            <span>Gender</span>
            <Input value={userDetails?.gender} disabled />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <span>Active Status</span><br />
            <Select defaultValue={userDetails?.active} className='w-100' onChange={(e) => { updateData('active', e as string) }}>
              {activeOptions.map((value: any, index) => {
                return <Select.Option value={value.label} key={index}>{value.value}</Select.Option>
              })}
            </Select>
          </div>
          <div className="col-md-6">
            <span>Mobile</span><br />
            <Search defaultValue={userDetails?.mobile} maxLength={10} enterButton="SAVE" size='middle' onSearch={(e) => { updateData('mobile', e as string) }} />
          </div>
        </div>
        <div className="row mb-2">
        <div className="col-md-6">
              <span>UID</span><br/>
              <Input defaultValue={userDetails?.uid} readOnly className="w-75" />
              <Tooltip title="Copy UID">
                <Button onClick={() =>  navigator.clipboard.writeText(userDetails?.uid) } icon={<CopyOutlined />} />
              </Tooltip>
          </div>
          <div className="col-md-6">
            <span>Profession</span>
            <Select defaultValue={userDetails?.profession} className='w-100' onChange={(e) => { updateData('active', e as string) }}>
              {professionOption.map((value: any, index) => {
                return <Select.Option value={value.label} key={index}>{value.value}</Select.Option>
              })}
            </Select>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <span>Qualification</span>
            <Select defaultValue={userDetails?.qualification} className='w-100' onChange={(e) => { updateData('active', e as string) }}>
              {qualificationOption.map((value: any, index) => {
                return <Select.Option value={value.label} key={index}>{value.value}</Select.Option>
              })}
            </Select>
          </div>
        </div>
        <div className="mx-1">
          <span className="ms-1">Members</span>
          <Form initialValues={{ members: userDetails?.members}} onFinish={onFinishMembers} >
            <Form.List name="members">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({key, name, ...restField}) => (
                    <div className='row mx-1' key={key}>
                    <Form.Item
                      {...restField}
                      name={[name, "relationId"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter member UID",
                          min: 8,
                          max: 9
                        },
                      ]}
                      className='col-5'
                    >
                      <Input placeholder="Enter Exsiting member id" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "relationName"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select relation",
                        },
                      ]}
                      className='col-5 ms-1'
                    >
                      <Select placeholder='Select Relation'>
                        {relationsOptions.map((option, index) => {
                          return <Select.Option value={option} key={index}>{option}</Select.Option>
                        })}
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} className='col-1 mt-2' />
                  </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                      className='w-75 me-1'
                    >
                      Add Member
                    </Button>
                    <Button htmlType='submit'>Save Members</Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      </div>
      <div className="col-md-6">Controls</div>
    </div>
  )
}

export default ProfileComponent;