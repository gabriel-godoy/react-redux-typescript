const commentsState: TCommentsState = {
  flags: {
    isFetching: false,
    hasError: false,
  },
  items: [],
};

type TCommentsFlags = {
  isFetching: boolean;
  hasError: boolean;
};

export type TCommentsState = {
  flags: TCommentsFlags;
  items: string[];
};

export default commentsState;
