export default function Avatar({ size }) {
    let width = "w-12";
    if (size === "lg") {
        width = "w-24 md:w-36";
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="/images/profile.svg" alt="Profile" />
        </div>
    );
}
