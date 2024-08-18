
export const WidgetComponent = ({ icon, title, subtitle }) => {
    return (
        <CardCom extra="!flex-row flex-grow items-center py-4 rounded-[20px]">
            <div className="ml-[18px]  hidden md:block x h-[90px] w-auto flex-row items-center">
                <div className="rounded-full shadow bg-red-500 p-3 dark:bg-navy-700">
                     <span className="flex items-center text-red-500 dark:text-white">
                       {icon}
                     </span>
                </div>
            </div>
            <div className="h-50 ml-4 flex w-auto  flex-col justify-center">
                <p className="font-dm text-sm font-medium text-black">{title}</p>
                <h4 className="text-xl mt-2 font-bold text-navy-700 text-black">
                    {subtitle}
                </h4>
            </div>
        </CardCom>
    );
};

export const CardCom = (props) => {
    const { variant, extra, children, ...rest } = props;
    return (
        <div
            className={`!z-5 relative flex flex-col w-full rounded-[8px] md:rounded-[20px] bg-white/90 bg-clip-border shadow-3xl border border-gray-200 shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra}`}
            {...rest}
        >
            {children}
        </div>
    );
}



