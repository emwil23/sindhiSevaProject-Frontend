import { Button, Card, DatePicker, Form, Input, Modal, Select, Space, Tooltip } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { getRequest, patchRequest } from "../../../services/apiHelperService";
import { currentUser, currentUserRole } from "../../app/slices/userSlice";
import { activeOptions, professionOption, qualificationOption, relationsOptions } from "../../selectOptions";
import { useDispatch } from "react-redux";
import { pushUserDetails } from "../../app/slices/userSlice";
import { openNotification } from "../../../services/notificationService";
import Search from "antd/lib/input/Search";
import { CopyOutlined, DeleteOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import comingSoonAmination from '../../../assets/Comingsoon.json';

const ProfileComponent = () => {
  const [membersCount, setMembersCount] = useState(0);
  const userDetails = useSelector(currentUser);
  const userRole = useSelector(currentUserRole);
  const dispatch = useDispatch();

  const updateData = async (index: string, value: string) => {
    await patchRequest('/members', userDetails?.id, { [index]: value }).then((res) => {
      dispatch(pushUserDetails(res));
      openNotification('Records Successfully Updated')
    }).catch(err => openNotification('Some Problem Occured', 'Please try again later.'))
  }

  const onFinishMembers = (value: any) => {
    updateData('members', value.members);
  }

  const stepForm = () => {
    return <Form autoComplete='off' className="my-5">
      <Form.List name='feedsList'>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div className="row">
                <Form.Item
                  {...restField}
                  name={[name, 'feed']}
                  rules={[{ required: true, message: 'Missing first name' }]}
                  className='col-11'
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} className='col-1 mt-2' />
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Feeds
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  }

  const openModal = (title: string, content: any) => {
    Modal.info({
      title: title,
      content: content,
      onOk: () => { },
      width: '50vw'
    })
  }

  async function getUsersCount() {
    await getRequest('/members/count').then(res => {
      setMembersCount(res.count);
    })
  }

  useEffect(() => {
    getUsersCount();
  }, [])

  const feedsPanelContent = () => {
      return <>
        <Form name="dynamic_form_nest_item"
          //  onFinish={onFinish}
            autoComplete="off">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <DeleteOutlined onClick={() => remove(name)} />
                  {/* <MinusCircleOutlined  onClick={() => remove(name)}/> */}
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </>
  }

  const adminControls = () => {
    return (
      <>
        <div className="text-end mt-4 me-3">
          <Button onClick={() => openModal('Add Members', <Lottie animationData={comingSoonAmination} loop={false} style={{ height: '150px' }} />)} >Add members</Button>
        </div>
        <div className="mx-5 my-4 row">
          <div className="col-6">
          <Card>
            <div className="row">
              <div className="col-6 fs-2 fw-light">
                {membersCount}
              </div>
              <div className="col-6">
                Total Members
              </div>
            </div>
          </Card>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="text-center">
          {/* <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Feeds Panel', stepForm())}>Feeds Panel</Button> */}
          <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Feeds Controls', feedsPanelContent())}>Feeds Panel</Button>
          <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Video Controls', <Lottie animationData={comingSoonAmination} loop={false} style={{ height: '150px' }} />)} >Change Video Panel</Button>
          <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Advertisment Controls', <Lottie animationData={comingSoonAmination} loop={false} style={{ height: '150px' }} />)} >Adverisments Panel</Button>
        </div>
      </>
    )
  };

  return (
    <div className="row justify-content-center ">
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
            <span>UID</span><br />
            <Input defaultValue={userDetails?.uid} readOnly className="w-75" />
            <Tooltip title="Copy UID">
              <Button onClick={() => navigator.clipboard.writeText(userDetails?.uid)} icon={<CopyOutlined />} />
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
          <Form initialValues={{ members: userDetails?.members }} onFinish={onFinishMembers} >
            <Form.List name="members">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
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
      <div className="col-md-6">{
        userRole === 'admin' ? adminControls() : ''
      }</div>
    </div>
  )
}

export default ProfileComponent;