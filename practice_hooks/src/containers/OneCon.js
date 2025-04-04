import OneCom from "../components/OneCom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOne } from "../service/member";

function OneCon() {
  const [params] = useSearchParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const id = params.get("id");
    setData(getOne(id));}, [params]);
  const navigate = useNavigate();
  const oneDelete = (id) => {
    navigate("/member/delete/" + id);
  }
  const oneUpdate = (id) => {
    navigate("/member/update/" + id);
  }
    return (
      <div>
        <OneCom data={data} oneDelete={oneDelete} oneUpdate={oneUpdate}/>
      </div>
    );
  }
  export default OneCon;