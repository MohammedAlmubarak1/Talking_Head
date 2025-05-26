
export default function DottedFace(props: any) {
    return (
        <div className="flex justify-center items-center">
            <video
                src="/Napoleanvid.mp4"
                width={350}
                height={350}
                autoPlay
                loop
                muted
                playsInline
            >
                Loading video...
            </video>
        </div>
    );
}