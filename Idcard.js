import pic from './Images/pic.jpg'
export default function Idcard(){
    return (
        <form>
<br></br><table align="center" cellspacing="0">
<tbody><tr>
	<td align="center" style={{color:"red"}}><h2>KONERU LAKSHMAIAH EDUCATION FOUNDATION</h2></td>
</tr>
	<tr><td align="center" style={{color:"green"}}><h3>IDENTITY CARD</h3></td></tr>
<tr>
	<td align="center"><img src={pic} style={{height:"300px", witdh:"200px"}}/></td>
</tr>
<tr></tr>
<tr> <td align="center" style={{color:"blue"}}><b> IDNO : 2200030524 </b></td></tr>
<tr><td><br></br></td></tr>
<tr> <td align="center"><b> CHANUMOLU SRIVALLI </b></td></tr>
<tr><td><br></br></td></tr>
<tr> <td align="center"><b> CSE-H </b></td></tr>

</tbody></table>
</form>
    )
}