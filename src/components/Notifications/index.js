import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MdNotifications } from 'react-icons/md';
// import { parseISO, formatDistance } from 'date-fns';
// import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const notificationsRef = useRef(null);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      // const response = await api.get('notifications');
      const response = {
        data: [
          {
            _id: 'dsa5asd45',
            content: ' msdlmdslkms ddfsdf,mlsdfmslk mfdsmdfsmdsfk ',
            read: false,
            timeDistance: 'há 2 horas',
          },
          {
            _id: 'dsafd5asd45',
            content: ' msdlmdslkms ddfsdf,mlsdfmslk mfdsmdfsmdsfk ',
            read: false,
            timeDistance: 'há 2 horas',
          },
          {
            _id: 'dsa5afdsd45',
            content: ' msdlmdslkms ddfsdf,mlsdfmslk mfdsmdfsmdsfk ',
            read: false,
            timeDistance: 'há 2 horas',
          },
          {
            _id: 'dsa5dsasd45',
            content: ' msdlmdslkms ddfsdf,mlsdfmslk mfdsmdfsmdsfk ',
            read: true,
            timeDistance: 'há 2 horas',
          },
        ],
      };

      const data = response.data.map(notification => ({
        ...notification,
        // timeDistance: formatDistance(
        //   parseISO(notification.createdAt),
        //   new Date(),
        //   { addSuffix: true, locale: pt }
        // ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  function toogleVisible(e) {
    if (notificationsRef && !notificationsRef.current.contains(e.target)) {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', toogleVisible, false);
    document.addEventListener('touchend', toogleVisible, false);
    return () => {
      document.removeEventListener('mouseup', toogleVisible, false);
      document.removeEventListener('touchend', toogleVisible, false);
    };
  }, []);

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#5e6067" size={23} />
      </Badge>

      <NotificationList visible={visible} ref={notificationsRef}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
