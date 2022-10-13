import DoubleRightOutlined from '@ant-design/icons/lib/icons/DoubleRightOutlined';
import { List } from 'antd';
import { FC } from 'react';

interface ListDataInerface {
  title: string,
  description: string
}

const ListData:ListDataInerface[] = [
  {
    title: 'Women to be given the freedom to go to the cremation ground',
    description: 'It was felt that in today\'s times where women are empowered and certainly have a right to choose what they want to do, it is left to the choice of the women if they so want to go to the cremation ground'
  },
  {
    title: 'Women to be given the freedom to perform last rites of their loved ones',
    description: "With the shrinking of family size, there are cases when there is no male legal heir to perform the last rites. It was recommended that only in such cases, where there is no male legal heir, keeping in mind the sentiments of the family, freedom should be accorded to the girl/women wanting to perform the last rites. In such event, the respected Brahmins will guide the women in conducting / performing the last rites."
  },
  {
    title: '13 day ceremony to be a family affair',
    description: "13th day ceremony is an assemblage of all the relatives and kith and kin of the deceased person, hence… It should be restricted to being a family affair."
  },
  {
    title: "The Paath Sahab / Garuda Puran, if required, can be kept at the Darbar instead of at home",
    description: "Considering the space and other constraints, it is cumbersome for some families to manage within the house; therefore, keeping this in mind, anyone so desiring is free to keep the same at the darbar instead of at one's home. This is already in practice in many other cities in the North."
  },
  {
    title: 'To propagate the use of electric crematorium as far as possible',
    description: "We are going eco-friendly globally and a step in this direction is usage of Electric crematoriums instead of firewood.  We should most certainly propagate the use of electric crematoriums as against the traditional wood pyres."
  },
  {
    title: "Condolence meeting namely, Chautha, to be held jointly for Ladies & Gents in one hall",
    description: "It was recommended that the condolence meetings should be held jointly for ladies and gents in one hall wherein the people coming to offer their condolences will be able to meet the entire family under one roof itself. While departing from the hall, the ladies and gents could form a common queue to offer condolences to the family of the departed person."
  },
  {
    title: "All invites including wedding invites to be sent by Whats App and / or E-mail; No cards / invites to be printed",
    description: "To save on paper, postage and time, this suggestion was made. All invites from now should be only in electronic mode and paper format should be completely avoided/discouraged."
  },
  {
    title: "Phone calls for function invites to be avoided since the messages are sent by WhatsApp or E-mail",
    description: "After mailing the invites, making phone calls is the normal practice; however, it was recommended that this practice should be avoided due to time constraints and other function responsibilities."
  },
  {
    title: "Wedding function to be restricted to only one public function, other ceremonies should be Private affairs",
    description: "This recommendation is made to limit public functions at weddings. A much appreciated and need of the hour reform. To be implemented with immediate effect. It was further suggested that eminent persons who follow this should be recognized at social functions as Trend setters."
  },
  {
    title: "To Propagate Widow/Widower/Divorcee Remarriage",
    description: "Companionship is the fulcrum of a relationship. Therefore, Widow/Widower/Divorcee Remarriage should be encouraged and extended all help and support."
  }
]

const ReformsComponent: FC = () => {
  return (
    <div className='container'>
      <h4 className='text-center my-4'>Socio Religious Reforms Recommended by <br /> The Sindhi Fedration of Bangalore</h4>
      <div className='mb-5'>
        <h2 className='fw-light'><span style={{ color: "#0050b3" }}>Jai</span> <span style={{ color: "#69c0ff" }}>Jhoolelal</span></h2 >
        <p >Change is the course of nature, and society in general is changing rapidly with major impact from social media as well as digitalization. Our Sindhi community too, is facing lot of challenges, and considering the need of the hour, our apex body - The Sindhi Federation of Bangalore, which is a representative body of 13 various Sindhi Associations of Bangalore, took it up as a daunting cause for the benefit of the community to recommend changes in our socio religious practices.</p>
        <p >The issues were narrowed down to a 10 Point Agenda, which has been under discussion on various occasions with the community members from all walks of life, including the revered Brahmins.  After a series of such discussions, Sindhi Federation of Bangalore at the 'Open House Discussion' held on Sunday ththe 12 February, 2017, arrived at the following decisions after a great deal of deliberations and discussion.  It must be noted that at this session, more than 160 eminent Sindhis participated and the recommendations presented here under were approved unanimously.</p>
      </div>
      <div>
        <h2 className='fw-light'><span style={{ color: "#0050b3" }}>Religious</span> <span style={{ color: "#69c0ff" }}>Reforms</span></h2>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={ListData}
          renderItem={(item:ListDataInerface) => (<List.Item key={item?.title}>
            <List.Item.Meta avatar={<DoubleRightOutlined />} title={item.title} description={item.description}></List.Item.Meta>
          </List.Item>)}
        ></List>
      </div>
      <div className='text-center fs-5 my-5'>
        <p>These important recommendations apart, it was also emphasised that Punctuality should be maintained by the Hosts and the Guests for all functions.</p>
        <p>The reforms recommended as herein above are arrived at after due deliberations over series of meetings with eminent members of the society, The Federation appeals to all the Sindhi brothers and sisters to kindly follow these recommendations in all earnestness.</p>
        <p>The Federation would like to thank all the Sindhi brothers and sisters including the revered Brahmins for participating in various sessions and arriving at the aforementioned recommendations.</p>
      </div>
      <h1 className='my-5 fw-light text-center'><span style={{ color: "#0050b3" }}>The more we crave for worldly pleasures,</span><br/> <span style={{ color: "#69c0ff" }}>the more we make ourselves their slave</span></h1>
    </div>
  )
}

export default ReformsComponent;