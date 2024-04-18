import Content from "./Content";
import Sidebar from "./Sidebar";

const Main = ({ lang }) => {
    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar lang={lang} />
                <Content />
            </div>
        </main>
    );
};

export default Main;