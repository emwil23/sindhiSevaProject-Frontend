import { Alert, Avatar, Button, Card, DatePicker, Form, Image, Input, List, Modal, Popover, Select, Tooltip } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../../services/apiHelperService";
import { currentUser, currentUserRole, updateDownloadAccess, updateProfile } from "../../app/slices/userSlice";
import { bloodGroupOptions, genderOptions, martialStatusOptions, professionOption, professionOptions, qualificationOption, qualificationOptions, relationsOptions, statusOption } from "../../selectOptions";
import { useDispatch } from "react-redux";
import { pushUserDetails } from "../../app/slices/userSlice";
import { openNotification } from "../../../services/notificationService";
import Search from "antd/lib/input/Search";
import { CopyOutlined, DeleteOutlined, EyeOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../FileUpload";
import TextArea from "antd/lib/input/TextArea";
import { exportCSVFile } from "../../../services/excelService";

const ProfileComponent = () => {
  const [pendingMembers, setPendingMembers] = useState<any[]>();
  const [membersCount, setMembersCount] = useState(0);
  const [feeds, setFeeds] = useState<any>();
  const [coverVideoLink, setCoverVideoLink] = useState<any>();
  const [profileUrl, setProfileUrl] = useState<string>('');
  const [userProfile, setUserProfile] = useState<string>('');
  const userDetails = useSelector(currentUser);
  const userRole = useSelector(currentUserRole);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateData = async (index: string, value: string) => {
    await patchRequest('/members', userDetails?.id, { [index]: value }).then((res) => {
      dispatch(pushUserDetails(res));
      openNotification('Records Successfully Updated')
    }).catch(err => openNotification('Some Problem Occured', 'Please try again later.'))
  }

  // Update the Current User Profile
  const updateUserProfile = async () => {

    if (localStorage.getItem('userProfile')) {
      var profilePicture = JSON.parse(localStorage.getItem('userProfile') as string);
      await patchRequest('/members', userDetails?.id, { profilePicture }).then(res => {
        dispatch(updateProfile(profilePicture));
        openNotification('Updated Successfully');
        Modal.destroyAll();
      })
    }
  }


  const onFinishMembers = (value: any) => {
    updateData('members', value.members);
  }

  const openModal = (title: string, content: any) => {
    Modal.info({
      title: title,
      content: content,
      onOk: () => { },
      okText: 'Done',
      width: '50vw'
    })
  }

  async function getPendingUsers() {
    await getRequest('/members', { filter: { where: { adminVerified: 'Pending' } } }).then(res => {
      setPendingMembers(res);
    })
  }

  async function getUsersCount() {
    await getRequest('/members/count').then(res => {
      setMembersCount(res.count);
    });
    await getPendingUsers();
  }

  useEffect(() => {
    getUsersCount();
    getFeedsData();
    getCoverVideoLink();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    localStorage.setItem('profileImg', JSON.stringify(profileUrl));
  }, [profileUrl])

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    if (userProfile !== '')
      updateUserProfile();
    // eslint-disable-next-line
  }, [userProfile])

  // feed control panel
  const feedsPanelContent = () => {
    return <>
      <Form name="feedsForm"
        onFinish={feedsOnFinish}
        initialValues={{ feedsList: feeds?.feedsList }}
        autoComplete="off">
        <Form.List name="feedsList">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className="row mx-1">
                  <Form.Item
                    {...restField}
                    name={[name, 'link']}
                    className='col-10'
                    rules={[{ type: 'url' }]}
                  >
                    <Input placeholder="Enter target url" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    rules={[{ required: true, message: 'Missing  message' }]}
                    className='col-10'
                  >
                    <Input placeholder="Enter Message" />
                  </Form.Item>
                  <DeleteOutlined onClick={() => remove(name)} className="col-2 mt-2" />
                  {/* <MinusCircleOutlined  onClick={() => remove(name)}/> */}
                </div>
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  }

  const feedsOnFinish = (event: any) => {
    if (!feeds) return postRequest('/feeds', { feedsList: event.feedsList }).then(res => {
      getFeedsData();
      openNotification('Updated Feeds Successfully!')
    })
    return patchRequest('/feeds', feeds?.id, { feedsList: event.feedsList }).then(res => {
      getFeedsData();
      openNotification('Updated Feeds Successfully!')
    })
  }

  const getFeedsData = () => {
    getRequest('/feeds').then((res: object[]) => {
      setFeeds(res[0]);
    })
  }

  // video panel

  const videoPanelContent = () => {
    return <>
      <Form
        layout="vertical"
        onFinish={videoOnFinish}
        initialValues={{ url: coverVideoLink?.videoUrl }}
        autoComplete="off"
      >
        <Form.Item
          name="url"
          label="Enter Video URL"
          rules={[{ required: true }, { type: 'url', warningOnly: true }]}
        >
          <Input placeholder="Enter valid video url" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  }

  const videoOnFinish = (event: any) => {
    if (!coverVideoLink) return postRequest('/cover-video', { videoUrl: event.url }).then(res => {
      getCoverVideoLink();
      openNotification('Updated Video Successfully!')
    })

    return patchRequest('/cover-video', coverVideoLink.id, { videoUrl: event.url }).then(res => {
      getCoverVideoLink();
      openNotification('Updated Video Successfully!')
    })
  }

  const getCoverVideoLink = () => {
    getRequest('/cover-video').then(res => {
      setCoverVideoLink(res[0]);
    })
  }


  //New Members Requests

  const newMembersPanel = (): JSX.Element => {
    return <>
      {pendingMembers?.length ? <List itemLayout='horizontal'>
        {pendingMembers.map((data: any, index: number) => {
          return <List.Item key={index} actions={[<Popover content={displayNewMembersDetails(data)} title={`${data?.firstName} Details`} trigger='click'><Button icon={<EyeOutlined />}></Button></Popover>, <Button onClick={() => acceptMember(data)}>Accept</Button>, <Button onClick={() => rejectMember(data)}>Reject</Button>]}>
            <List.Item.Meta avatar={<Avatar src={`${data?.profilePicture}`} />} title={`${data?.firstName} ${data?.lastName}`} description={`phone: ${data?.mobile}`} />
          </List.Item>
        })}
      </List> : 'No List'}
    </>
  }

  const acceptMember = async (data: any) => {
    await patchRequest('/members', data?.id, { adminVerified: 'Accepted' }).then(res => {
      getPendingUsers();
      Modal.destroyAll();
      openNotification('Member Added Successfully');
    })
  }

  const rejectMember = async (data: any) => {
    await deleteRequest('/members', data?.id).then(res => {
      getPendingUsers();
      getUsersCount();
      Modal.destroyAll();
      openNotification('Member Rejected Successfully');
    })
  }

  const displayNewMembersDetails = (data: any): JSX.Element => {
    var dob: any = new Date(data?.dob);
    dob = `${dob.getDate()}-${dob.getMonth()}-${dob.getFullYear()}`
    return <>
      <div>
        <span>Fist Name:</span>
        <span>{data.firstName}</span>
      </div>
      <div>
        <span>Last Name:</span>
        <span>{data.lastName}</span>
      </div>
      <div>
        <span>DOB:</span>
        <span>{dob}</span>
      </div>
      <div>
        <span>Profession:</span>
        <span>{data.profession}</span>
      </div>
      <div>
        <span>Marital Status:</span>
        <span>{data.maritalStatus}</span>
      </div>
    </>
  }

  //Add Member Form

  const onFinish = (values: any) => {
    var profileImg = JSON.parse(localStorage.getItem('profileImg') as string);
    if (values.dob) {
      let dob = new Date(values?.dob);
      values.dob = `${dob.getFullYear()}-${dob.getMonth() < 10 ? `0${dob.getMonth()}` : dob.getMonth()}-${dob.getDate() < 10 ? `0${dob.getDate()}` : dob.getDate()}`
    }
    if (!profileImg || profileImg === '')
      return openNotification('Please Upload Profile Picture');
    values.profilePicture = profileImg;
    localStorage.removeItem('profileImg');
    postRequest('/signup', values).then(res => {
      openNotification('SignUp Successful');
      getUsersCount();
      getPendingUsers();
      Modal.destroyAll();
    }).catch((err:any) =>  { 
      Modal.destroyAll();
      openNotification(err.response?.data?.error?.message);
    })
  };

  const addMemberForm = () => {
    return <Form onFinish={onFinish} layout="vertical">
      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please enter first name",
                type: "string",
              },
            ]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please enter last name",
                type: "string",
              },
            ]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Item name='profilePicture' label='Upload Profile Picture' getValueFromEvent={(e) => console.log(e)}>
            <FileUpload storageUrl={setProfileUrl} />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                // required: true,
                message: "Please enter the Email",
                type: 'email',
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[
              {
                required: true,
                message: "Please select date",
                type: "date",
              },
            ]}
          >
            <DatePicker placeholder="select date" className="w-100" format={'YYYY-MM-DD'} />
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please select the gender",
                type: "string",
              },
            ]}
          >
            <Select placeholder="Select gender">
              {genderOptions.map((option, index) => {
                return <Select.Option value={option} key={index}>{option}</Select.Option>
              })}
            </Select>
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label="Profession"
            name="profession"
            rules={[
              {
                required: true,
                message: "Please select the Profession",
                type: "string",
              },
            ]}
          >
            <Select placeholder="Select Profession">
              {professionOptions.map((option, index) => {
                return <Select.Option value={option} key={index}>{option}</Select.Option>
              })}
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label="Phone"
            name="mobile"
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: "Please enter mobile valid number",
                type: 'string'
              }
            ]}
          >
            <Input placeholder="Enter Mobile Number with countrycode" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label="Blood Group"
            name="blood"
            rules={[
              {
                required: true,
                message: "Please enter blood group",
                type: "string",
              },
            ]}
          >
            <Select placeholder='Select Blood Group'>
              {bloodGroupOptions.map((option, index) => {
                return <Select.Option value={option} key={index}>{option}</Select.Option>
              })}
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label="Qualification"
            name="qualification"
            rules={[
              {
                required: true,
                message: "Please enter qualification",
                type: "string",
              },
            ]}
          >
            <Select placeholder="Select">
              {qualificationOptions.map((option, index) => {
                return <Select.Option value={option} key={index}>{option}</Select.Option>
              })}
            </Select>
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label="Marital Status"
            name="maritalStatus"
            rules={[
              {
                required: true,
                message: "Please select marital status",
                type: "string",
              },
            ]}
          >
            <Select placeholder="Select">
              {martialStatusOptions.map((option, index) => {
                return <Select.Option value={option} key={index}>{option}</Select.Option>
              })}
            </Select>
          </Form.Item>
        </div>
      </div>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            // required: true,
            message: "Please enter address",
            type: "string",
          },
        ]}
      >
        <TextArea rows={3} placeholder="Enter Address" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>
          Register
        </Button>
      </Form.Item>
    </Form>
  }

  //Admin Controls

  const adminControls = () => {
    return (
      <>
        <div className="text-end mt-4 me-3">
          <Button onClick={() => openModal('Add Members', addMemberForm())} >Add members</Button>
        </div>
        <div className="mx-5 my-4 row">
          <div className="col-6">
            <Card className="shadow-sm">
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
          <div className="col-6">
            <Card onClick={() => openModal('New Member Requests', newMembersPanel())} className='myBtnCard shadow-sm' style={{ cursor: 'pointer' }} >
              <div className="row">
                <div className="col-6 fs-2 fw-light">{pendingMembers?.length}</div>
                <div className="col-6">New Requests</div>
              </div>
            </Card>
          </div>
          <div className="col-12">
            <Card className="mt-2 shadow-sm">
              <div className="row">
                <div className="col-6 text-center pt-5 fw-light">Profile Picture <br />
                  <Button onClick={() => openModal('Upload new Picture', updateProfilePicture())}>Change Picture</Button>
                </div>
                <div className="col-6">
                  <Image height='150px' width='100px' src={`${userDetails?.profilePicture}`} />
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="text-center">
          {/* <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Feeds Panel', stepForm())}>Feeds Panel</Button> */}
          <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Feeds Controls', feedsPanelContent())}>Feeds Panel</Button>
          <Button type='primary' className="w-75 mb-3" onClick={() => openModal('Video Controls', videoPanelContent())} >Change Video Panel</Button>
          <Button type='primary' className="btn w-75 mb-3" onClick={() => navigate('ads')} >Advertisment Panel</Button>
        </div>
      </>
    )
  };

  //Default Members Control

  const downloadAllRecords = async () => {
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
    ];
    var allRecords = await getRequest('/members', { filter: { where: { role: { eq: 'member' }, status: { eq: 'Active' }, adminVerified: { eq: 'Accepted'}  } } }).then((res:any[]) => {
      return res;
    });
    if(allRecords.length === 0)
      return openNotification('Some Problem Occured', 'Please try again later');
    exportCSVFile(headers, allRecords, 'AllRecord');
    await patchRequest('/members', userDetails?.id, { downloadsAllowed: { allowed: false } }).then(res => {
      dispatch(updateDownloadAccess({ allowed: false }));
    })
  }

  const memberControls = (): JSX.Element => {
    return <>
      <div className="text-center mt-5">
        <Card className="mt-2">
          <div className="row">
            <div className="col-6 text-center pt-5 fw-light">Profile Picture <br />
              <Button onClick={() => openModal('Upload new Picture', updateProfilePicture())}>Change Picture</Button>
            </div>
            <div className="col-6">
              <Image height='150px' width='100px' src={`${userDetails?.profilePicture}`} />
            </div>
          </div>
        </Card>
        <div className="mt-4 text-center">
          { !userDetails?.downloadsAllowed?.allowed ?
          <Button className="w-75" type='primary' onClick={() => openModal('Download Access', <p>Request the Admin for downloading all records.<br/><br/><Button onClick={() =>{navigate('/contactUs'); Modal.destroyAll();}}>Contact Us</Button></p>)}>Download All Records</Button>:
          <div>
            <Alert message='Download Access Given' description='Access only lasts for 24hrs, you can download records only onces.' type='warning' />
            <Button className="w-100 mt-2" type='default' onClick={() => downloadAllRecords()}>Click here to download</Button>
          </div> }
        </div>
      </div>
    </>
  }

  const updateProfilePicture = (): JSX.Element => {
    return <>
      <FileUpload storageUrl={setUserProfile} />
    </>
  }

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
            <Search defaultValue={userDetails?.email} type='email' enterButton="SAVE" size='middle' onSearch={(e) => { updateData('email', e as string) }} />
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
            <Select defaultValue={userDetails?.status} disabled className='w-100' onChange={(e) => { updateData('status', e as string) }}>
              {statusOption.map((value: any, index) => {
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
        userRole === 'admin' ? adminControls() : memberControls()
      }</div>
    </div>
  )
}

export default ProfileComponent;