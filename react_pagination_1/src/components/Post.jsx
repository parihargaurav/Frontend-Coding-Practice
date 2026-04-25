
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

export default function Post() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(5);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=${pageNo}&limit=5")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNo]); // because every time when page changes content changes
  return (
    <div className="container">
      <div className="post-container">
        {data.map((item) => {
          return (
            <img key={item.id} src={item.download_url} alt={item.author} />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}

//  We pass pageNo and setPageNo  on below here so that the Pagination component
//  can display the correct page number and allow the user to change the page number by calling setPageNo
