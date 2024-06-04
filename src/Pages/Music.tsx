import { Trans } from "@lingui/macro"

export const MusicPath = "Music"

const Music = () => {
    return <div style={{ alignItems: "center", justifyContent: "center", width: "100%", overflow: "hidden" }}>
        <iframe title="Ophélie" width="100%" height="200" allow="autoplay" style={{ border: "none" }} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1790196076&color=%23f3d0bc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        <div style={{ padding: "1rem", paddingBottom:"2rem" }} >
            <Trans>I wrote, recorded, mixed all of this track by myself, pretty much self taugth, if you don't count the occassionnal youtube video. I wanted to record this because I was going on a trip and I used to play this little tune to my child every day! </Trans>
        </div >
        <iframe title="Puzmul" width="100%" height="200" allow="autoplay" style={{ border: "none" }} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/650142545&color=%23f3d0bc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        <div style={{ padding: "1rem", paddingBottom:"2rem" }} >
            <Trans>I made this while at my last year of uni, it was for a class in unreal engine and this was the menu song. I recorded a two more songs and with multiple track to layer and plug and play as a beat maker loop.</Trans>
        </div >
        <iframe title="Beat" width="100%" height="200" allow="autoplay" style={{ border: "none" }} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/373320356&color=%23153838&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        <div style={{ padding: "1rem", paddingBottom:"2rem" }} >
            <Trans>I made this a while ago, I ripped off some chords of a song and used the same as a beat, to motivate myself to study for an exam, but I ended up playing the bass and jamming on this pretty much all night.</Trans>
        </div >
        <iframe title="WhyMe?" width="100%" height="200"  allow="autoplay" style={{ border: "none" }} src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1356729634&color=%23153838&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
        <div style={{ padding: "1rem", paddingBottom:"2rem" }} >
            <Trans>This was recorded in coldsun drummer's basement. We have since improved the song quite a bit and mostly, are more at ease playing it. Also, you can totally hear the change to 7/4 and how incomfortable it made me while singing.<br/><br/>
                Vocals: JP, Antoine<br/>
                Guitar: JP,<br/>
                Bass: Antoine,<br/>
                Drums: Franco,<br/>
                Mixing: Antoine,<br/>
                Mastering: Antoine,<br/>
                Lyrics: Franco,<br/>
                Composition: JP, Franco, Antoine
            </Trans>
        </div >
    </div >
}

export default Music