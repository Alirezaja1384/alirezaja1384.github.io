import DefaultProfile from "src/images/user.png";

export interface ProfileComponentProps {
    fullName: string;
    jobTitle: string;
    imageUrl: string | null;
}

function ProfileComponent({
    fullName,
    jobTitle,
    imageUrl,
}: ProfileComponentProps) {
    return (
        <div id="sidebar-profile">
            <img
                src={imageUrl || DefaultProfile}
                className="w-1/3"
                alt="تصویر پروفایل"
            />
            <div className="text-center mt-3">
                <h3 className="text-3xl font-bold">{fullName}</h3>
                <h6 className="text-gray-300">{jobTitle}</h6>
            </div>
        </div>
    );
}

export default ProfileComponent;
