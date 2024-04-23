
import "./NavbarStyle.css";
export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>IsMarried</th>
                <td>{props.isMarried ?"yes":"NO"}</td>
            </tr>
            
            


        </table>
    </div>
  )
}
