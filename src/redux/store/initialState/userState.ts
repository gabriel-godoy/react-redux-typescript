const userState: TUserState = {
  flags: {
    isFetching: false,
    hasError: false,
  },
  details: {
    isLoggedIn: false,
    name: '',
    email: '',
    username: '',
    password: '',
  },
};

type TUserFlags = {
  isFetching: boolean;
  hasError: boolean;
};

type TUserDetails = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  username: string;
  password: string;
};

export type TUserState = {
  flags: TUserFlags;
  details: TUserDetails;
};

export default userState;
