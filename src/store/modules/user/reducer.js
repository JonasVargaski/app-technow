import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    name: '',
    email: '',
    avatar: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = {
          ...action.payload.user,
          avatar:
            action.payload.user ||
            'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        };
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
