import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    messge: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    messge: "점심 식사 시간입니다.",
  },
  {
    id: 3,
    messge: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      Notifications: [],
    };
  }
  componentDidMount(){    //JS의 setInterval()함수를 사용해서 1초마다 작업을 수행중
    const {notifications} = this.state;
    timer = setInterval(() => {     //Line4 에서 설정해 놓은 배열 reservedNotification로 부터 데이터를 하나씩 가져아 state에 있는 notification 배열에 넣고 업데이트
      if(notifications.length < reservedNotifications.length){
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          //notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
  render(){
    return(
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification 
                key={notification.id}
                id={notification.id}
                messge={notification.messge}/>
            );
        })}
      </div>
    );
  }
}
export default NotificationList;