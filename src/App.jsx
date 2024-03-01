import IsDone from "./containers/IsDone/IsDone";
import Task from "./containers/Task/Task";

function App() {
    return (
        <>
            <h1 className="title-app">Todo's Riyanda</h1>
            <div className="border-outer">
                <div className="board">
                    <Task />
                    {/* <IsDone /> */}
                </div>
            </div>
        </>
    );
}

export default App;
