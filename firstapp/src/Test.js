export default function Test ({name1,roll1, add1}) {
    var a = "mern";

    return(
    <div>
        my test file{a} {name1} {roll1}
        <button onClick={add1}>click</button>
    </div>
    )
}
//const props = {
//name1 ="raunak pratap",
//roll1: 19
//}

export function Test2(props){
    var a = 123;
    return(
        <div>
            my test2 file{a} student name is {props.name1} and his roll no{props.roll1}
        </div>
    )
}
