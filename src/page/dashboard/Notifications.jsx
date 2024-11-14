import React, { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";
import NotificationItem from "../../components/notification/NotificationItem";
import { Link } from "react-router-dom";
import backarrow from "/backarrow.svg";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Notifications = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulated fetch call
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Simulated notifications data
        const notificationsData = [
          {
            id: 1,
            date: "Today",
            icon: "/paymentsuccessful.svg",
            message: "Payment succesful",
            details: "You have made a salon payment",
            isRead: false,
          },
          {
            id: 2,
            date: "Yesterday",
            icon: "/paymentsuccessful.svg",
            message: "Special offer for you",
            details: "Enjoy 5% discount on your next booking",
            isRead: false,
          },
          {
            id: 3,
            date: "Yesterday",
            icon: "/newservices.svg",
            message: "New Services Available",
            details: "Check out new services listing",
            isRead: false,
          },
          {
            id: 4,
            date: "September 15, 2023",
            icon: "/paymentsuccessful.svg",
            message: "Debit Card Connecteed",
            details: "Your payment plan via Debit Card has been set up",
            isRead: false,
          },
          {
            id: 5,
            date: "September 15, 2023",
            icon: "/accountcreated.svg",
            message: "Account created successful",
            details: "You can now begin to offer services and get paid",
            isRead: false,
          },
          {
            id: 6,
            date: "September 15, 2023",
            icon: "/ordersuccessful.svg",
            message: "Order successfully delivered",
            details: "Kindly confirm your order delivery",
            isRead: false,
          },
        ];

        // Group notifications by date
        const groupedNotifications = notificationsData.reduce(
          (acc, notification) => {
            if (!acc[notification.date]) {
              acc[notification.date] = [];
            }
            acc[notification.date].push(notification);
            return acc;
          },
          {}
        );

        // Convert groupedNotifications object to array
        const groupedNotificationsArray = Object.keys(groupedNotifications).map(
          (date) => ({
            date,
            notifications: groupedNotifications[date],
          })
        );

        setNotifications(groupedNotificationsArray);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchData();
  }, []);

  const goBack = () => {
    console.log(history);
  };

  return (
    <DashboardLayout>
      <div className="flex gap-8 text-primaryColor lg:pr-8">
        <div className="mt-4 md:mt-20 w-full px-4 md:px-0">
          <Link to="/dashboard" className="flex gap-2">
            <img src={backarrow} alt="" />
            <h3 className="text-2xl font-bold">Notifications</h3>
          </Link>
          <div className="container mx-auto py-8">
            {notifications.map((group, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold mb-2">{group.date}</h4>
                <div className="grid gap-4">
                  {group.notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      icon={notification.icon}
                      message={notification.message}
                      details={notification.details}
                      isRead={notification.isRead}
                    />
                  ))}
                  <hr className="border border-black" />
                </div>
              </div>
            ))}
            {notifications.length === 0 && (
              <p className="text-center">No notifications</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
