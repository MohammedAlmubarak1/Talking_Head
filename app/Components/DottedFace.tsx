
export default function DottedFace(props: any) {
    return (
        <div className="flex justify-center items-center">
            <video
                src="/trump.mp4"
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