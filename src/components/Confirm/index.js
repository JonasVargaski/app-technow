import events from '~/util/events_old';

export default function confirm(props) {
  return new Promise(resolve => {
    events.emit('confirm:dialog', {
      title: 'Confirmação',
      content: '',
      confirmText: 'Confirmar',
      cancelText: 'Cancelar',
      showConfirm: true,
      showCancel: true,
      confirmColor: '#7560ec',
      cancelColor: '#b3b3b3',
      resolve,
      ...props,
    });
  });
}
