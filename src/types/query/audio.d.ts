export interface IAudioItem {
    artist: string
    cover: string
    name: string
    theme: string
    url: string
}

export interface IAudioQuery {
    audioJson: {
        audio: IAudioItem[]
    }
}
