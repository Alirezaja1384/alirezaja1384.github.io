import LoadingSVG from "../images/loading.svg";

function LoadingComponent() {
    return (
        <div className="flex justify-center w-full">
            <img src={LoadingSVG} className="w-[75px]" alt="درحال بارگذاری" />
        </div>
    );
}

export default LoadingComponent;
