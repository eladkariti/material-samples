import { Subtitle } from "../../ui/text"



const DragNDrop = () => {
    return (<div className="app_bg_row">
        <div className="app_bg_column" style={{maxWidth: '200px', backgroundColor: "#fff"}}>
            side Bar
            <br/>
            <br/>
            <Subtitle>Drag Item 1 </Subtitle>
            <br/>
            <br/>
            <br/>
            <Subtitle>Drag Item 2</Subtitle>
            <br/>
            <br/>
            <br/>
            <Subtitle>Drag Item 3</Subtitle>
        </div>
        <div className="app_bg_column center flex"  >
            content
            <br/>
            <br/>
            <div style={{width: 300, height: 300, backgroundColor: "thistle"}}>
                <Subtitle>Drag input</Subtitle>
            </div>
        </div>
    </div>)
}



export default DragNDrop