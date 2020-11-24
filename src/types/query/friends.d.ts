export interface IFriendSingle {
    description: string | null
    name: string
    website: string
    avatar: string | null
}

export interface IFriendsQuery {
    friendsJson: {
        friends: IFriendSingle[]
    }
}
