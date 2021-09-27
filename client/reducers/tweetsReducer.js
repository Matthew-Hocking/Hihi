import { STORE_TWEETS_CASE,ADD_LIKE,UPDATE_UNLIKE,UPDATE_LIKE } from '../actions/tweetsActions'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_TWEETS_CASE:
      return [...action.tweet, ...state]
    case ADD_LIKE:
      state.map(tweet=>{
        if(tweet.id==action.tweet.id)
        {
          return Object.assign({},tweet,{isliked:true,likesNum:(tweet.likesNum+1)})
        }
      })
      return state
    case UPDATE_LIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},tweet,action.tweet)
        }
      })
      return state
    case UPDATE_UNLIKE:
      state.map(tweet=>{
        if(tweet.id=action.tweet.id)
        {
          return Object.assign({},tweet,{likesNum:action.tweet.likesNum,isliked:action.tweet.isliked})
        }
      })
      return state
    default:
      return state
  }
}

export default tweetsReducer