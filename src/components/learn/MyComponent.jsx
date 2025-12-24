//JSX
import './style.css';

const MyComponent = () => {
    //const bien = "Eric";
    const bien = [1, 2, 3];
    // const bien = {
    //     name: "V",
    //     age: 3
    // };
    return (
        <>
            <div>{JSON.stringify(bien)} & Sky</div>
            <div>{console.log(">>>ERIC")}</div>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >child</div>
        </>
    );
}

export default MyComponent;